import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Menu,
    Grid
} from 'semantic-ui-react';

const Sidebar = () => {
    return (
        <>
            <Grid.Column width={4}>
                <Menu fluid vertical tabular>
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
            </Grid.Column>
        </>
    )
}

export default Sidebar;
