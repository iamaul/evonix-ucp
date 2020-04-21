import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Icon, Segment } from 'semantic-ui-react';

import Topbar from '../../layouts/topbar/Topbar';

const Settings = ({ auth: { user }}) => {
    return (
        <>
            <Topbar isVerified={user && user.setLoading} />
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

Settings.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Settings);
