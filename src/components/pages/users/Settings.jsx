import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, Icon, Segment, Grid } from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';
import ChangePassword from './settings/ChangePassword';
import ChangeEmail from './settings/ChangeEmail';

const Settings = ({ auth: { user }}) => {
    return (
        <>
            <Grid stackable>
                <Sidebar isVerified={user && user.setLoading} />
                <Grid.Column stretched width={12}>
                    <Segment>
                        <Header as="h2" icon textAlign="center">
                            <Icon name="settings" />
                            Account Settings
                            <Header.Subheader>
                                Manage your account settings.
                            </Header.Subheader>
                        </Header>
                        <Grid stackable columns={2}>
                            <Grid.Column>
                                <Segment>
                                    <Header as="h3" textAlign="center">Change Password</Header>
                                    <ChangePassword />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <ChangeEmail currentEmail={user && user.email} />
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid>
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
