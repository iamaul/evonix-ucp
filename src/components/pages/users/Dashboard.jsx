import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    Segment,
    Grid,
    Header,
    Table,
    Label,
    Icon,
    Statistic
} from 'semantic-ui-react';

import { getApiSampServer } from '../../actions/samp';
import { 
    getCountServerUsers, 
    getCountServerVehicles,
    getCountServerProperties
} from '../../actions/stats';

import Sidebar from '../../layouts/sidebar/Sidebar';
import Loader from '../../layouts/loader/Loader';

const Dashboard = ({ 
    getApiSampServer,
    getCountServerUsers,
    getCountServerVehicles,
    getCountServerProperties, 
    samp: { server, setLoading },
    stats: { server_stats }
}) => {
    useEffect(() => {
        getApiSampServer();
        getCountServerUsers();
        getCountServerVehicles();
        getCountServerProperties();
    }, [getApiSampServer, getCountServerUsers, getCountServerVehicles, getCountServerProperties])

    return (
        <>
            <section id="dashboard">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            <Statistic.Group widths="three" size="small">
                                <Statistic>
                                    <Statistic.Value>{ server_stats && server_stats.users }</Statistic.Value>
                                    <Statistic.Label>Registered Users</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>{ server_stats && server_stats.player_vehicles }</Statistic.Value>
                                    <Statistic.Label>Player Vehicles</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>{ server_stats && server_stats.player_properties }</Statistic.Value>
                                    <Statistic.Label>Properties</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                            <Header as="h3">Welcome to EvoniX Roleplay</Header><hr/>
                            <p style={{ textAlign: 'justify' }}>
                                Sebuah media pemenuhan hasrat para roleplayer sekalian yang ingin dan rindu akan vibe roleplay yang bold dan realistis tanpa ada embel-embel murahan lain nya. Di server ini para player memiliki kebebasan untuk mengekspresikan diri sebebas-bebas nya, dan tentu saja harus dilandasi oleh server rules yang berlaku. Dengan demikian segenap Server Management, dan Administator mengharapkan kenyamanan bagi para player yang nantinya bermain di server ini.
                            </p>
                            <Grid stackable centered>
                                <Segment>
                                    <Header as="h3" textAlign="center">Server Status</Header>
                                        { setLoading ? (<Loader isLoading={setLoading} />) : 
                                            server && server.active ? (
                                                <Label color="green" size="tiny" pointing="left" floating>
                                                    <Icon name="wifi" /> Online
                                                </Label>
                                            ) : (
                                                <Label color="red" size="tiny" pointing="left" floating>
                                                    <Icon name="power off" /> Offline
                                                </Label>
                                            ) (
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
                                            )
                                        }
                                </Segment>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

Dashboard.propTypes = {
    getApiSampServer: PropTypes.func.isRequired,
    getCountServerUsers: PropTypes.func.isRequired,
    getCountServerVehicles: PropTypes.func.isRequired,
    getCountServerProperties: PropTypes.func.isRequired,
    samp: PropTypes.object.isRequired,
    stats: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    samp: state.samp,
    stats: state.stats
});

export default connect(mapStateToProps, { getApiSampServer, 
    getCountServerUsers, 
    getCountServerVehicles, 
    getCountServerProperties })(Dashboard);
