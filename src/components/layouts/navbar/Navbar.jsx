import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Menu, Icon } from 'semantic-ui-react';

import { userLogout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, user, setLoading }, userLogout }) => {
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
                <Dropdown.Header content="Hi there!" />
                <Dropdown.Item onClick={userLogout}>
                    <Icon name="sign out" />
                    Sign Out
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

    const guestMenu = (
        <Dropdown
            text="Guest"
            icon="user circle"
            floating
            labeled
            button
            className="icon"
        >
            <Dropdown.Menu>
                <Dropdown.Header content="You're not signed in" />
                <Dropdown.Item as={NavLink} to="/login">
                    <Icon name="sign in" />
                    Sign In
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/register">
                    <Icon name="signup" />
                    Sign Up
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

    return (
        <Menu stackable secondary>
            <Menu.Item
                as={NavLink}
                name="home"
                exact to="/"
            />
            <Menu.Item
                as={NavLink}
                name="blog"
                to="/blog"
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
