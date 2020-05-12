import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import { 
    Form, 
    Grid, 
    Header, 
    Image, 
    Message, 
    Segment,
    Icon
} from 'semantic-ui-react';

import { userRegister } from '../../actions/auth';

// import evonixLogo from '../../../assets/images/evonix-logo.png';

const Register = ({ userRegister, isAuthenticated, auth: { user } }) => {
    const initialState = {
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    const [formData, setFormData] = useState(initialState);

    const {
        username,
        email,
        password,
        confirm_password
    } = formData;

    const onChange = c => setFormData({
        ...formData,
        [c.target.name]: c.target.value
    });

    const recaptchaRef = React.createRef();
    
    const onSubmit = async e => {
        e.preventDefault();

        const recaptchaVal = recaptchaRef.current.getValue();

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end'
        });

        if (!recaptchaVal) {
            Toast.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid reCAPTCHA response.'
            });
        } else if (password !== confirm_password) {
            Toast.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The password confirmation does not match.'
            });
        } else {
            userRegister({ username, email, password });
        }
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
                    <Form size="large" onSubmit={e => onSubmit(e)}>
                        <Segment color="red" stacked>
                            <Form.Input
                                type="text"
                                name="username"
                                value={username}
                                icon="user" 
                                iconPosition="left"  
                                placeholder="Username" 
                                onChange={c => onChange(c)}
                                fluid 
                            />
                            <Form.Input 
                                type="email"
                                name="email"
                                value={email}
                                icon="envelope" 
                                iconPosition="left"  
                                placeholder="Email Address"
                                onChange={c => onChange(c)}
                                fluid 
                            />
                            <Form.Input
                                type="password"
                                name="password"
                                value={password}
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                onChange={c => onChange(c)}
                                fluid
                            />
                            <Form.Input
                                type="password"
                                name="confirm_password"
                                value={confirm_password}
                                icon="lock"
                                iconPosition="left"
                                placeholder="Confirm Password"
                                onChange={c => onChange(c)}
                                fluid
                            />
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                onChange={c => onChange(c)}
                            /><br/>
                            <Form.Button color="red" fluid size="large" content="Sign Up" />
                        </Segment>
                    </Form>
                    <Message info>
                        Already have an account? <Link to="/login"><Icon name="sign in"/>Sign In</Link>
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

Register.propTypes = {
    userRegister: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
});

export default connect(mapStateToProps, { userRegister })(Register);
