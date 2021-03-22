import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Header, Icon, Segment, Grid, Message, Button } from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';
import ChangePassword from './settings/ChangePassword';
import ChangeEmail from './settings/ChangeEmail';

const Settings = ({ auth: { user }}) => {
    if (user !== null) {
        if (user.status === 0 || user.status === 1 || user.status === 2) {
            return <Redirect to="/applications" />;
        }
    }

    return (
        <>
            <section id="settings">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            <Header as="h3" icon textAlign="center">
                                <Icon name="settings" />
                                Account Settings
                                <Header.Subheader>
                                    Manage your account settings.
                                </Header.Subheader>
                            </Header>
                            <Grid stackable columns={2}>
                                <Grid.Column>
                                    <Segment>
                                        <Header as="h4" textAlign="center">Change Password</Header>
                                        <ChangePassword />
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <Header as="h4" textAlign="center">Change Email</Header>
                                        <ChangeEmail currentEmail={user && user.email} />
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

Settings.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(Settings);
