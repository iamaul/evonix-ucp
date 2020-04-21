import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Menu 
} from 'semantic-ui-react';

const Topbar = () => {
    return (
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
    )
}

export default Topbar;
