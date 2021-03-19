import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    Segment,
    Grid,
    Statistic,
    Divider,
    List,
    Embed,
    Header
} from 'semantic-ui-react';
import NumberFormat from 'react-number-format';

import { 
    getCountServerUsers, 
    getCountServerVehicles,
    getCountServerProperties,
    getCountServerUserApps
} from '../../actions/stats';

import Sidebar from '../../layouts/sidebar/Sidebar';
import Loader from '../../layouts/loader/Loader';

const Dashboard = ({ 
    getCountServerUsers,
    getCountServerVehicles,
    getCountServerProperties, 
    getCountServerUserApps,
    stats: { total_users, player_vehicles, player_properties, total_user_apps, setLoading },
    auth: { user }
}) => {
    useEffect(() => {
        getCountServerUsers();
        getCountServerVehicles();
        getCountServerProperties();
        getCountServerUserApps();
    }, [getCountServerUsers, getCountServerVehicles, getCountServerProperties, getCountServerUserApps])

    // if (user !== null) {
    //     if (user.status === 0 || user.status === 1 || user.status === 2) {
    //         return <Redirect to="/applications" />;
    //     }
    // }

    return (
        <>
            <section id="dashboard">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            <Statistic.Group size="small" widths="4">
                                <Statistic>
                                    { setLoading ? (<Loader isLoading={setLoading} />) : (
                                        <Statistic.Value>
                                            <NumberFormat value={total_user_apps} displayType={'text'} thousandSeparator={true} />
                                        </Statistic.Value> )
                                    }
                                    <Statistic.Label>User Applications</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    { setLoading ? (<Loader isLoading={setLoading} />) : (
                                        <Statistic.Value>
                                            <NumberFormat value={total_users} displayType={'text'} thousandSeparator={true} />
                                        </Statistic.Value> )
                                    }
                                    <Statistic.Label>Registered Users</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    { setLoading ? (<Loader isLoading={setLoading} />) : (
                                        <Statistic.Value>
                                            <NumberFormat value={player_vehicles} displayType={'text'} thousandSeparator={true} />
                                        </Statistic.Value> )
                                    }
                                    <Statistic.Label>Player Vehicles</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    { setLoading ? (<Loader isLoading={setLoading} />) : (
                                        <Statistic.Value>
                                            <NumberFormat value={player_properties} displayType={'text'} thousandSeparator={true} />
                                        </Statistic.Value> )
                                    }
                                    <Statistic.Label>Properties</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                            <Divider hidden />
                            <Divider horizontal>Welcome to EvoniX Roleplay</Divider>
                            <Divider hidden />
                            <Grid columns={2} stackable>
                                <Grid.Column>
                                    <Embed
                                        id="Hfyp_vLZw-Y"
                                        iframe={{ allowFullScreen: true }}
                                        source="youtube"
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <p style={{ textAlign: 'justify' }}>
                                        <Header as="h3">Useful Links</Header>
                                        These guidelines are recommended for newcomers. Please read the server rules and guidelines to get started!
                                        <Divider hidden />
                                        <List celled ordered>
                                            <List.Item><a href="https://forum.evonix-rp.com/viewtopic.php?f=49&t=118" target="_blank" rel="noopener noreferrer">Ingame Rules</a></List.Item>
                                            <List.Item><a href="https://forum.evonix-rp.com/viewforum.php?f=74" target="_blank" rel="noopener noreferrer">Official Guide</a></List.Item>
                                            <List.Item>
                                            Recommended Guides
                                                <List.List>
                                                    <List.Item><a href="https://forum.evonix-rp.com/viewtopic.php?f=74&t=210" target="_blank" rel="noopener noreferrer">Evonix Starter Guide</a></List.Item>
                                                    <List.Item><a href="https://forum.evonix-rp.com/viewtopic.php?f=75&t=112" target="_blank" rel="noopener noreferrer">/do dapat? Apakah ini benar?</a></List.Item>
                                                    <List.Item><a href="https://forum.evonix-rp.com/viewtopic.php?f=75&t=402" target="_blank" rel="noopener noreferrer">Powergaming</a></List.Item>
                                                    <List.Item><a href="https://forum.evonix-rp.com/viewtopic.php?f=75&t=181" target="_blank" rel="noopener noreferrer">your character!</a></List.Item>
                                                </List.List>
                                            </List.Item>
                                            <List.Item><a href="https://forum.evonix-rp.com/viewforum.php?f=28" target="_blank" rel="noopener noreferrer">Bug Report</a></List.Item>
                                            <List.Item><a href="https://forum.evonix-rp.com/viewforum.php?f=134" target="_blank" rel="noopener noreferrer">Player Suggestion</a></List.Item>
                                            <List.Item><a href="https://forum.evonix-rp.com/viewforum.php?f=25" target="_blank" rel="noopener noreferrer">Ban Appeal</a></List.Item>
                                        </List>
                                    </p>
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
    getCountServerUsers: PropTypes.func.isRequired,
    getCountServerVehicles: PropTypes.func.isRequired,
    getCountServerProperties: PropTypes.func.isRequired,
    getCountServerUserApps: PropTypes.func.isRequired,
    stats: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    stats: state.stats,
    auth: state.auth
});

export default connect(mapStateToProps, { 
    getCountServerUsers, 
    getCountServerVehicles, 
    getCountServerProperties,
    getCountServerUserApps })(Dashboard);
