import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { 
    Segment,
    Grid,
    Header,
    Table,
    Label,
    Icon
} from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';

const Dashboard = ({ auth: { user } }) => {
    return (
        <>
            <section id="dashboard">
                <Grid stackable>
                    <Sidebar isVerified={user && user.setLoading} />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            <div 
                                style={{ 
                                    width: '50%',
                                    height: '50%',
                                    paddingBottom: '30%',
                                    position: 'relative',
                                    textAlign: 'center'
                                }}
                            >
                                <img
                                    src="https://media.giphy.com/media/YkrEHLsVinbIuddp1q/giphy-downsized.gif"
                                    style={{ 
                                        width: '100%',
                                        height: '100%',
                                        position: 'absolute' 
                                    }}
                                    alt="neil warnock"
                                />
                            </div><br/>
                            <Header as="h3">Welcome to EvoniX Roleplay</Header><hr/>
                            <p style={{ textAlign: 'justify' }}>
                                Sebuah media pemenuhan hasrat para roleplayer sekalian yang ingin dan rindu akan vibe roleplay yang bold dan realistis tanpa ada embel-embel murahan lain nya. Di server ini para player memiliki kebebasan untuk mengekspresikan diri sebebas-bebas nya, dan tentu saja harus dilandasi oleh server rules yang berlaku. Dengan demikian segenap Server Management, dan Administator mengharapkan kenyamanan bagi para player yang nantinya bermain di server ini.
                            </p>
                            <Grid stackable columns={2}>
                                <Grid.Column>
                                    <Segment>
                                        <Header as="h3" textAlign="center">Profile</Header>
                                        <Table>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell><b>Username</b></Table.Cell>
                                                    <Table.Cell>{ user && user.name }</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Email</b></Table.Cell>
                                                    <Table.Cell>{ user && user.email }</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Admin</b></Table.Cell>
                                                    <Table.Cell>{ user && user.admin }</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Helper</b></Table.Cell>
                                                    <Table.Cell>{ user && user.helper }</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Joined</b></Table.Cell>
                                                    <Table.Cell><Moment unix format="llll">{ user && user.registered_date }</Moment></Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Last Login</b></Table.Cell>
                                                    <Table.Cell>{ user && user.lastlogin === 0 ? ('Not logged in yet') : (<Moment unix fromNow>{ user && user.lastlogin }</Moment>) }</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <Header as="h3" textAlign="center">Server Status</Header>
                                        <Label color="green" size="tiny" pointing="left" floating>
                                            <Icon name="wifi" /> Online
                                        </Label>
                                        <Table>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell><b>IP</b></Table.Cell>
                                                    <Table.Cell>101.50.3.61:7780</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Hostname</b></Table.Cell>
                                                    <Table.Cell>[0.3.DL] Evonix Roleplay | www.evonix-rp.com</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Players</b></Table.Cell>
                                                    <Table.Cell>0 / 32</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Gamemode</b></Table.Cell>
                                                    <Table.Cell>EX-RP 1.1.0</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Language</b></Table.Cell>
                                                    <Table.Cell>English</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Version</b></Table.Cell>
                                                    <Table.Cell>0.3.DL-R1</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
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

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
