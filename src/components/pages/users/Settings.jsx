import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

import Topbar from '../../layouts/topbar/Topbar';

const Settings = () => {
    return (
        <>
            <Topbar />
            <Segment attached="bottom">
                <Header as="h2" icon textAlign="center">
                    <Icon name="settings" />
                    Account Settings
                    <Header.Subheader>
                        Manage your account settings.
                    </Header.Subheader>
                </Header>
            </Segment>
        </>
    )
}

export default Settings;
