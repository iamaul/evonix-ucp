import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    Grid,
    Header,
    Image,
    Segment,
    Button
 } from 'semantic-ui-react';

const Introduction = ({ nextStep, auth: { user } }) => {
    const startQuiz = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <>
            <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 700 }}>
                    <Header as="h2" textAlign="center">
                        <Image src="/assets/images/evonix-logo.png" size="massive" />
                    </Header>
                    <Segment color="red" stacked>
                        <Header as="h2" textAlign="center">
                            Introduction
                        </Header>
                        <p style={{ textAlign: "justify" }}>
                            Hi, {user.name}! Welcome to EvoniX Roleplay. You're almost ready to go! You'll be given 10 multiple choices and 1 scenario to complete the test. 
                            All questions and scenarios are categorized in such a way, make sure that you have read the server rules before starting to take the test. 
                            The passing grade of multiple choice is <b>70</b> otherwise, you can't get the next step of taking a scenario. Take your time to ensure all the answers are correct!
                            Your application will be reviewed by our staff within the next 24 hours. Thanks for joining us and happy roleplaying! 
                        </p>
                        <Button color="red" content="Start" onClick={startQuiz} />
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}

Introduction.propTypes = {
    nextStep: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Introduction);
