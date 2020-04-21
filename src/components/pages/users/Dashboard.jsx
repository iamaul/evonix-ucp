import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { 
    Segment,
    Message,
    Grid,
    Header
} from 'semantic-ui-react';

import Topbar from '../../layouts/topbar/Topbar';

const Dashboard = ({ auth: { user } }) => {
    return (
        <>
            <Topbar />
            <Segment attached="bottom">
                {/* <Header as="h4">Welcome, { user && user.name }!</Header> */}
                <Grid stackable>
                    <Grid.Column width={4}>
                        <div 
                            style={{ 
                                width: '100%',
                                height: '100%',
                                paddingBottom: '56%',
                                position: 'relative'
                            }}
                        >
                            <img
                                src="https://media.giphy.com/media/VefU4ZZeZ0kbR5duDs/source.gif"
                                style={{ 
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute' 
                                }}
                                alt="neil warnock"
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <p style={{ textAlign: 'justify' }}>
                            <Header as='h3'>Welcome to EvoniX Roleplay</Header><hr/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at hendrerit leo. Proin lacinia non dolor vel laoreet. Morbi non risus porta, efficitur sapien vitae, luctus orci. Nam imperdiet metus tortor, convallis posuere dolor cursus sed. Maecenas in vulputate sapien, in bibendum ligula. Vestibulum vel sollicitudin sem. Suspendisse varius eget erat at feugiat. Donec sed maximus mi, ac dignissim augue. Sed mauris ipsum, molestie eu diam quis, bibendum mollis arcu. Fusce pellentesque commodo faucibus. Ut iaculis efficitur nunc, in euismod quam facilisis interdum. Donec urna nunc, facilisis vitae diam et, hendrerit luctus nisi. Duis blandit porttitor varius. Vestibulum posuere elementum quam, quis aliquam lectus rutrum vitae. Nulla tempor orci pretium lacinia tristique.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Message info>
                            <Message.Header>Profile</Message.Header>
                            <Segment>
                                <p style={{ textAlign: 'justify' }}>
                                    Username        :   <b>{ user && user.name }</b><br/>
                                    Email           :   <b>{ user && user.email }</b><br/>
                                    Admin           :   <b>{ user && user.admin }</b><br/>
                                    Helper          :   <b>{ user && user.helper }</b><br/>
                                    Created At      :   <b><Moment unix format="llll">{ user && user.registered_date }</Moment></b><br/>
                                    Last Login      :   <b><Moment unix fromNow>{ user && user.lastlogin }</Moment></b>
                                </p>
                            </Segment>
                        </Message>
                        <p style={{ textAlign: "center", padding: '20px' }}> RESERVED FOR ACCEPTS DONATION PAYMENT BANNER </p>
                    </Grid.Column>
                </Grid>
            </Segment>
        </>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
