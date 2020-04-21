import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

import Topbar from '../../layouts/topbar/Topbar';

const Characters = () => {
    return (
        <>
            <Topbar />
            <Segment attached="bottom">
                <Segment placeholder textAlign="center">
                    <Header icon>
                        <Icon name='search' />
                        No characters are listed for this account.
                    </Header>
                    <Button primary>Add New</Button>
                </Segment>
            </Segment>
        </>
    )
}

export default Characters;
