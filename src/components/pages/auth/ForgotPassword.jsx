import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    Form, 
    Grid, 
    Header, 
    Image, 
    Segment,
    Button,
    Icon 
} from 'semantic-ui-react';

import { userForgotPassword } from '../../actions/auth';

// import evonixLogo from '../../../assets/images/evonix-logo.png';

const ForgotPassword = ({ userForgotPassword }) => {
    const [email, setEmail] = useState('');
    const onChange = e => setEmail(e.target.value);

    const onSubmit = e => {
        e.preventDefault();

        userForgotPassword(email);
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
                                type="email"
                                name="email" 
                                value={email}
                                icon="envelope" 
                                iconPosition="left" 
                                placeholder="Email Address"
                                onChange={onChange}
                                fluid 
                            />
                            <Form.Button color="red" fluid size="large" content="Reset" />
                        </Segment>
                    </Form>
                    <br/>
                    <Button
                        info
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

ForgotPassword.propTypes = {
    userForgotPassword: PropTypes.func.isRequired
}

export default connect(null, { userForgotPassword })(ForgotPassword);
