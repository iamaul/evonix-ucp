import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

import Topbar from '../../layouts/topbar/Topbar';

const Characters = ({ auth: { user }}) => {
    return (
        <>
            <Topbar isVerified={user && user.setLoading} />
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

Characters.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Characters);
