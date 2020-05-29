import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Menu, Icon, Button } from 'semantic-ui-react';

import { userLogout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, setLoading, user }, userLogout }) => {
    const authMenu = (
        <Dropdown
            text={user && user.name}
            icon="user circle"
            floating
            labeled
            button
            className="icon"
        >
            <Dropdown.Menu>
                <Dropdown.Header content="Welcome back!" />
                <Dropdown.Item as={NavLink} to="/dashboard">
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item onClick={userLogout}>
                    <Icon name="sign out" />
                    Sign Out
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

    const guestMenu = (
        <Button.Group>
            <Button as={Link} to="/login" size="small">Sign In</Button>
            <Button.Or />
            <Button color="red" as={Link} to="/register" size="small">Sign Up</Button>
        </Button.Group>
    )

    return (
        <Menu stackable secondary>
            <Menu.Item
                as={NavLink}
                name="home"
                exact to="/"
            />
            <Menu.Menu position="right">
                { !setLoading && (<>{ isAuthenticated ? authMenu : guestMenu }</>) }
            </Menu.Menu>
        </Menu>
    )
}

Navbar.propTypes = {
    userLogout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { userLogout })(Navbar);
