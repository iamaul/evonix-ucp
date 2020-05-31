import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    Form, 
    Grid, 
    Header, 
    Image, 
    Message, 
    Segment,
    Icon 
} from 'semantic-ui-react';

import { userLogin } from '../../actions/auth';

// import evonixLogo from '../../../assets/images/evonix-logo.png';

const Login = ({ userLogin, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        usermail: '',
        password: ''
    });

    const { usermail, password } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();

        userLogin({ usermail, password });
    }

    if (isAuthenticated) {
        return <Redirect to="/applications" />;
    }

    return (
        <>
            <Grid textAlign="center" style={{ height: '80vh' }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" textAlign="center">
                        <Image as={Link} src="/assets/images/evonix-logo.png" size="massive" to="/" />
                    </Header>
                    <Form size="large" onSubmit={onSubmit}>
                        <Segment color="red" stacked>
                            <Form.Input 
                                type="text"
                                name="usermail" 
                                value={usermail}
                                icon="user" 
                                iconPosition="left" 
                                placeholder="Username or Email Address"
                                onChange={onChange}
                                fluid 
                            />
                            <Form.Input
                                type="password"
                                name="password"
                                value={password}
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                onChange={onChange}
                                fluid
                            />
                            <Form.Button color="red" fluid size="large" content="Sign In" />
                        </Segment>
                    </Form>
                    <Message 
                        info
                    >
                        <Message.Content>
                            Don't have an account? <Link to="/register"><Icon name="signup"/>Sign Up</Link><br/>
                            Forgotten your password? <Link to="/forgot/password"><Icon name="external alternate"/>Recover</Link>
                        </Message.Content>
                    </Message>
                </Grid.Column>
            </Grid>
            <footer>
                <p>
                    <a href="http://facebook.com/EvonixRoleplay" target="_blank" rel="noopener noreferrer">
                        <Icon name="facebook official" />
                    </a>
                    <a href="http://twitter.com/EvonixRoleplay" target="_blank" rel="noopener noreferrer">
                        <Icon name="twitter square" />               
                    </a> 
                    <a href="http://instagram.com/evonixroleplay" target="_blank" rel="noopener noreferrer">
                        <Icon name="instagram" />
                    </a>               
                    <br/>          
                    <Icon name="copyright outline" /> 2020 EvoniX Community.
                </p>
            </footer>
            <style>{`
                footer {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    text-align: center;
                    padding: 10px;
                }
            `}</style>
        </>
    )
}

Login.propTypes = {
    userLogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { userLogin })(Login);
