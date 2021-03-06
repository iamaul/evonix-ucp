import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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

    const submitted = (<Fragment>
        <p style={{ textAlign: "justify" }}>
            Your application is still under review. We'll let you know when there are admins available to look through them! While you're waiting to get responded, we suggest you visit our forums or discord server to keep up-to-date. 
            Be patient and do not ever ask any admin to look at your application!
        </p>
        </Fragment>
    )
    
    const intro = (<Fragment>
            <p style={{ textAlign: "justify" }}>
                Welcome to EvoniX Roleplay. You're almost ready to go! You'll be given 10 multiple choices and 1 scenario to complete the test. 
                All questions and scenarios are categorized in such a way, make sure that you have read the <a href="https://forum.evonix-rp.com/viewforum.php?f=49&sid=c235711fc17caac6657b4f46ca8f02ec" target="_blank" rel="noopener noreferrer"><i>server rules</i></a> before starting to take the test. 
                The passing grade of multiple choice is <b>70</b> otherwise, you can't get the next step of taking a scenario. Take your time to ensure all the answers are correct!
                Your application will be reviewed by our staff within the next 24 hours. Thanks for joining us and good luck! 
            </p>
            <Button color="red" content="Start" onClick={startQuiz} />
        </Fragment>
    )

    if (user && user.status === 3) {
        return <Redirect to="/" />;
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
                            {user && user.status === 1 ? 'We\'ve received your application!' : 'Introduction'}
                        </Header>
                        {user && user.status === 1 ? submitted : intro}
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
