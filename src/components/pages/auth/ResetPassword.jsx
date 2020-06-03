import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import { 
    Form, 
    Grid, 
    Header, 
    Image, 
    Segment,
    Icon,
    Button
} from 'semantic-ui-react';

import { userResetPassword } from '../../actions/auth';

const ResetPassword = ({ userResetPassword, match }) => {
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const onPasswordChange = e => setPassword(e.target.value);
    const onConfirmPasswordChange = e => setConfirmPassword(e.target.value);

    const recaptchaRef = createRef();
    
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
                text: 'The new password confirmation does not match.'
            });
        } else {
            userResetPassword(password, match.params.code);
        }
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
                                type="password"
                                name="password" 
                                value={password}
                                icon="lock" 
                                iconPosition="left" 
                                placeholder="New Password"
                                onChange={onPasswordChange}
                                fluid 
                            />
                            <Form.Input 
                                type="password"
                                name="confirm_password" 
                                value={confirm_password}
                                icon="lock" 
                                iconPosition="left" 
                                placeholder="Confirm New Password"
                                onChange={onConfirmPasswordChange}
                                fluid 
                            />
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                            /><br/>
                            <Form.Button color="red" fluid size="large" content="Reset" />
                        </Segment>
                    </Form>
                    <br/>
                    <Button
                        as={Link}
                        to="/login"
                    >
                        <Icon name="arrow alternate circle left"/>Back
                    </Button>
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

ResetPassword.propTypes = {
    userResetPassword: PropTypes.func.isRequired
}

export default connect(null, { userResetPassword })(ResetPassword);
