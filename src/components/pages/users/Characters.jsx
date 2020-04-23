import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';

const Characters = ({ auth: { user }}) => {
    return (
        <>
            <Grid stackable>
                <Sidebar isVerified={user && user.setLoading} />
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
        </>
    )
}

Characters.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Characters);
