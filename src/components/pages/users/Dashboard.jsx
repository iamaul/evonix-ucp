import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    Segment,
    Grid,
    Header,
    Statistic,
    Divider
} from 'semantic-ui-react';

import { 
    getCountServerUsers, 
    getCountServerVehicles,
    getCountServerProperties
} from '../../actions/stats';

import Sidebar from '../../layouts/sidebar/Sidebar';
import Loader from '../../layouts/loader/Loader';

const Dashboard = ({ 
    getCountServerUsers,
    getCountServerVehicles,
    getCountServerProperties, 
    stats: { total_users, player_vehicles, player_properties, setLoading }
}) => {
    useEffect(() => {
        getCountServerUsers();
        getCountServerVehicles();
        getCountServerProperties();
    }, [getCountServerUsers, getCountServerVehicles, getCountServerProperties])

    return (
        <>
            <section id="dashboard">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            <Statistic.Group widths="three" size="small">
                                <Statistic>
                                    { setLoading ? (<Loader isLoading={setLoading} />) : (
                                        <Statistic.Value>
                                            { total_users }
                                        </Statistic.Value> )
                                    }
                                    <Statistic.Label>Registered Users</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    { setLoading ? (<Loader isLoading={setLoading} />) : (
                                        <Statistic.Value>
                                            { player_vehicles }
                                        </Statistic.Value> )
                                    }
                                    <Statistic.Label>Player Vehicles</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    { setLoading ? (<Loader isLoading={setLoading} />) : (
                                        <Statistic.Value>
                                            { player_properties }
                                        </Statistic.Value> )
                                    }
                                    <Statistic.Label>Properties</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                            <Divider hidden />
                            <Header as="h3">Welcome to EvoniX Roleplay</Header><hr/>
                            <p style={{ textAlign: 'justify' }}>
                                Sebuah media pemenuhan hasrat para roleplayer sekalian yang ingin dan rindu akan vibe roleplay yang bold dan realistis tanpa ada embel-embel murahan lain nya. Di server ini para player memiliki kebebasan untuk mengekspresikan diri sebebas-bebas nya, dan tentu saja harus dilandasi oleh server rules yang berlaku. Dengan demikian segenap Server Management, dan Administator mengharapkan kenyamanan bagi para player yang nantinya bermain di server ini.
                            </p>
                            {/* <Divider horizontal>Server Status</Divider>
                            { samp && samp.setLoading ? (<Loader isLoading={samp.setLoading} />) : (
                                <Grid stackable centered>
                                    <Segment>
                                        { server && server.active ? (
                                            <Label color="green" size="tiny" pointing="left" floating>
                                                <Icon name="wifi" /> Online
                                            </Label>) : (
                                            <Label color="red" size="tiny" pointing="left" floating>
                                                <Icon name="power off" /> Offline
                                            </Label>) 
                                        }
                                        <Table>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell><b>IP</b></Table.Cell>
                                                    <Table.Cell>{ server && server.core.ip }</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Hostname</b></Table.Cell>
                                                    <Table.Cell>{ server && server.core.hn }</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Players</b></Table.Cell>
                                                    <Table.Cell>{ server && server.core.pc } / { server && server.core.pm }</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Gamemode</b></Table.Cell>
                                                    <Table.Cell>{ server && server.core.gm }</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Language</b></Table.Cell>
                                                    <Table.Cell>{ server && server.core.la }</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Version</b></Table.Cell>
                                                    <Table.Cell>{ server && server.core.vn }</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Segment>
                                </Grid>
                            )} */}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

Dashboard.propTypes = {
    getCountServerUsers: PropTypes.func.isRequired,
    getCountServerVehicles: PropTypes.func.isRequired,
    getCountServerProperties: PropTypes.func.isRequired,
    stats: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    stats: state.stats
});

export default connect(mapStateToProps, { 
    getCountServerUsers, 
    getCountServerVehicles, 
    getCountServerProperties })(Dashboard);
