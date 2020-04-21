import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Menu 
} from 'semantic-ui-react';

const Sidebar = () => {
    return (
        <Menu attached="top" tabular>
            <Menu.Item
                as={NavLink}
                name="dashboard"
                exact to="/dashboard"
            />
            <Menu.Item
                as={NavLink}
                name="profile"
                to="/profile"
            />
            <Menu.Item
                as={NavLink}
                name="my-characters"
                to="/my-characters"
            />
            <Menu.Item
                as={NavLink}
                name="settings"
                to="/settings"
            />
        </Menu>
    )
}

export default Sidebar;
