import React from 'react';
import { Button, Header, Icon, Segment, Grid } from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';

const Characters = () => {
    return (
        <>
            <section id="characters">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            <Segment placeholder textAlign="center">
                                <Header icon>
                                    <Icon name='search' />
                                    No characters are listed for this account.
                                </Header>
                                <Button primary>Add New</Button>
                            </Segment>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

export default Characters;
