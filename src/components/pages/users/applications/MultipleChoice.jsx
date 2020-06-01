import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Grid,
    Segment,
    Header,
    Divider,
    Form,
    Image
} from 'semantic-ui-react';
import { setQuestions, getGradedQuestions } from '../../../utils';

import { 
    loadQuiz, 
    gradeQuiz, 
    quizSubmissions, 
    pushQuizScore,
    clearQuiz,
    loadQuizScenario
} from '../../../actions/quiz';

import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import Results from './Results';
import Loader from '../../../layouts/loader/Loader';

const MultipleChoice = ({ 
    loadQuiz, 
    gradeQuiz, 
    quizSubmissions,
    pushQuizScore,
    loadQuizScenario,
    clearQuiz,
    nextStep,
    prevStep,
    quiz: { questions, submissions, setLoading } 
}) => {
    useEffect(() => {
        const questions = setQuestions();
        loadQuiz(questions);
        loadQuizScenario();
    }, [loadQuiz, loadQuizScenario])

    const numbersCorrect = questions.filter((question) => question.isCorrect).length;
    const score = numbersCorrect*10;
    const maxSubmissions = (submissions === 2);

    const questionContainerNodes = questions.map((question, index) => {
        return <MultipleChoiceQuestion key={index} index={index} {...question} />;
    });

    const saveAndNext = e => {
        e.preventDefault();
        nextStep();
    }

    const goBack = e => {
        e.preventDefault();
        prevStep();
        clearQuiz();
    }

    let submitButton = score >= 70 ? (
        <Form.Button color="red" size="small" content="Save & Next" onClick={saveAndNext} /> 
    ) : maxSubmissions && score < 70 ? (
        <Form.Button content="Retry" color="red" size="small" onClick={goBack} />
    ) : (
        <Form.Button color="red" content="Submit" size="small" />    
    )

    const onSubmit = e => {
        e.preventDefault();

        const gradedQuestions = getGradedQuestions(questions);
        const newSubmissions = submissions + 1;

        gradeQuiz(gradedQuestions);
        quizSubmissions(newSubmissions);
        pushQuizScore(score);
        window.scrollTo(0, 0);
    }

    return (
        <>
            <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 700 }}>
                    <Header as="h2" textAlign="center">
                        <Image src="/assets/images/evonix-logo.png" size="massive" to="/" />
                    </Header>
                    <Segment color="red" stacked>
                        <Header as="h3" textAlign="center">
                            Step 1: Multiple Choice
                        </Header>
                        <Results {...{ submissions, maxSubmissions, score }} />
                        { setLoading ? <Loader isLoading={setLoading} /> : (
                            <Form size="small" onSubmit={onSubmit}>
                                {questionContainerNodes}
                                <Divider />
                                {submitButton}
                            </Form>
                        )}
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}

MultipleChoice.propTypes = {
    loadQuiz: PropTypes.func.isRequired,
    gradeQuiz: PropTypes.func.isRequired,
    quizSubmissions: PropTypes.func.isRequired,
    pushQuizScore: PropTypes.func.isRequired,
    loadQuizScenario: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    quiz: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    quiz: state.quiz
});

export default connect(mapStateToProps, { 
    loadQuiz, 
    gradeQuiz, 
    quizSubmissions,
    pushQuizScore,
    loadQuizScenario,
    clearQuiz 
})(MultipleChoice);
