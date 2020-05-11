import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Grid,
    Segment,
    Header,
    Divider,
    Button,
    Icon,
    Form,
    Image
} from 'semantic-ui-react';
import { setQuestions, getGradedQuestions } from '../../../utils';

import { loadQuiz, gradeQuiz, quizSubmissions } from '../../../actions/quiz';

import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import Results from './Results';
import Loader from '../../../layouts/loader/Loader';

const MultipleChoice = ({ quiz: { questions, submissions, setLoading }, loadQuiz, gradeQuiz, quizSubmissions, nextStep }) => {
    useEffect(() => {
        const questions = setQuestions();
        loadQuiz(questions);
    }, [loadQuiz])

    const numbersCorrect = questions.filter((question) => question.isCorrect).length;
    console.log("numbersCorrect: " + numbersCorrect);
    console.log("questions: " + questions);
    const maxSubmissions = (submissions === 2);

    const questionContainerNodes = questions.map((question, index) => {
        return <MultipleChoiceQuestion key={index} index={index} {...question} />;
    });

    const saveAndNext = e => {
        e.preventDefault();
        nextStep();
    }

    const onSubmit = e => {
        e.preventDefault();

        const gradedQuestions = getGradedQuestions(questions);
        console.log("gradedQuestions: " + gradedQuestions);
        const newSubmissions = submissions + 1;

        gradeQuiz(gradedQuestions);
        quizSubmissions(newSubmissions);
        window.scrollTo(0, 0);
    }

    let submitButton = maxSubmissions ? (
        <Form.Button color="red" size="small" content="Save & Next" onClick={saveAndNext} /> 
    ) : (
        <Form.Button icon color="red" labelPosition="right" size="small">
            Submit
            <Icon name="save" />
        </Form.Button>
    );

    return (
        <>
            <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 700 }}>
                    <Header as="h2" textAlign="center">
                        <Image src="/assets/images/evonix-logo.png" size="massive" to="/" />
                    </Header>
                    <Segment color="red" stacked>
                        <Header as="h3" textAlign="center">
                            Step 1: Multiple Choices
                        </Header>
                        <Results {...{ submissions, maxSubmissions, numbersCorrect }} />
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
    quiz: PropTypes.object.isRequired,
    loadQuiz: PropTypes.func.isRequired,
    gradeQuiz: PropTypes.func.isRequired,
    quizSubmissions: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    quiz: state.quiz
});

export default connect(mapStateToProps, { loadQuiz, gradeQuiz, quizSubmissions })(MultipleChoice);
