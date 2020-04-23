import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
    Menu,
    Message 
} from 'semantic-ui-react';

const Sidebar = (props) => {
    return (
        <>
            { !props.isVerified &&
                <Message size="small" warning>
                    <Message.Header>Warning</Message.Header>
                    <p>
                        Hey! You have not yet verified your email address to this account, please click <Link to="#">here</Link> to verify.<br/><br/>
                        <b>Note</b>: Verifying your email address will improves the security of your account.
                    </p>
                </Message>   
            }
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

export default (Sidebar);
