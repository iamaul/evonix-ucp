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
            <Topbar isVerified={user && user.setLoading} />
            <Segment attached="bottom">
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
                        <Header as="h3">Welcome to EvoniX Roleplay</Header><hr/>
                        <p style={{ textAlign: 'justify' }}>
                            Sebuah media pemenuhan hasrat para roleplayer sekalian yang ingin dan rindu akan vibe RP yang bold dan realistis tanpa ada embel embel murahan lain nya. Di server ini para player memiliki kebebasan untuk mengekspresikan diri sebebas-bebas nya, dan tentu saja harus dilandasi oleh server rules yang berlaku. Dengan demikian segenap Server Management, dan Administator mengharapkan kenyamanan bagi para player yang nantinya bermain di server ini.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Message info>
                            <Message.Header>Profile</Message.Header>
                            <Segment>
                                <p style={{ textAlign: 'justify' }}>
                                    Username: <b>{ user && user.name }</b><br/>
                                    Email: <b>{ user && user.email }</b><br/>
                                    Admin: <b>{ user && user.admin }</b><br/>
                                    Helper: <b>{ user && user.helper }</b><br/>
                                    Created At: <b><Moment unix format="llll">{ user && user.registered_date }</Moment></b><br/>
                                    Last Login: { user && user.lastlogin === 0 ? (<b>Not logged in yet</b>) : (<b><Moment unix fromNow>{ user && user.lastlogin }</Moment></b>) }
                                </p>
                            </Segment>
                        </Message>
                        <p style={{ textAlign: "center", padding: '15px' }}>SERVER STATUS</p>
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
