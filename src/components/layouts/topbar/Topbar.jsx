import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { 
    Menu,
    Message 
} from 'semantic-ui-react';

const Topbar = ({ auth: { user } }) => {
    return (
        <>
            { !user.email_verified &&
                <Message size="small" warning>
                    <Message.Header>Warning</Message.Header>
                    <p>
                        Hey! You have not yet verify your email address to this account, please click <Link to="#">here</Link> to verify.<br/><br/>
                        <b>Note</b>: Verifying your email address will improves the security of your account.
                    </p>
                </Message>   
            }
            <Menu attached="top" tabular>
                <Menu.Item
                    as={NavLink}
                    name="dashboard"
                    exact to="/dashboard"
                />
                <Menu.Item
                    as={NavLink}
                    name="characters"
                    to="/characters"
                />
                <Menu.Item
                    as={NavLink}
                    name="settings"
                    to="/settings"
                />
            </Menu>
        </>
    )
}

Topbar.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Topbar);
