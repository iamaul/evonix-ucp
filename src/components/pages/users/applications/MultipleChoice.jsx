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

const MultipleChoice = ({ user_applications: { questions, submissions, loadQuiz, gradeQuiz, quizSubmissions, setLoading }, nextStep }) => {
    useEffect(() => {
        const questions = setQuestions();
        loadQuiz(questions);
        // eslint-disable-next-line
    }, [])

    const numbersCorrect = questions.filter((question) => question.isCorrect).length;
    const maxSubmissions = (submissions === 2);

    const questionContainerNodes = questions.map((question, index) => {
        return <MultipleChoiceQuestion key={index} index={index} {...question} />;
    });

    const saveAndNext = e => {
        e.preventDefault();
        nextStep();
    }
    
    let submitButton = maxSubmissions ? (
        <Button color="red" size="small" content="Save & Next" onClick={saveAndNext} /> 
    ) : (
        <Button icon color="red" labelPosition="right" size="small">
            Submit
            <Icon name="save" />
        </Button>
    );

    const onSubmit = e => {
        e.preventDefault();

        const gradedQuestions = getGradedQuestions(questions);
        const newSubmissions = submissions + 1;

        gradeQuiz(gradedQuestions);
        quizSubmissions(newSubmissions);
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
                            Step 1: Multiple Choices
                        </Header>
                        <Results {...{ submissions, maxSubmissions, numbersCorrect }} />
                        { setLoading ? <Loader isLoading={setLoading} /> : (
                            <Form size="small" onSubmit={onSubmit}>
                                <p style={{ textAlign: "justify" }}>
                                    {questionContainerNodes}
                                </p>
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
    user_applications: PropTypes.object.isRequired,
    nextStep: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user_applications: state.user_applications
});

export default connect(mapStateToProps, { loadQuiz, gradeQuiz, quizSubmissions })(MultipleChoice);
