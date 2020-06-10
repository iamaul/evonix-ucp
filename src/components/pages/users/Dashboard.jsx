import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    Segment,
    Grid,
    Statistic,
    Divider
} from 'semantic-ui-react';

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

    if (user !== null) {
        if (user.status === 0 || user.status === 1 || user.status === 2) {
            return <Redirect to="/applications" />;
        }
    }

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
                            <p style={{ textAlign: 'justify' }}>
                                Sebuah media pemenuhan hasrat para roleplayer sekalian yang ingin dan rindu akan vibe roleplay yang bold dan realistis tanpa ada embel-embel murahan lain nya. Di server ini para player memiliki kebebasan untuk mengekspresikan diri sebebas-bebas nya, dan tentu saja harus dilandasi oleh server rules yang berlaku. Dengan demikian segenap Server Management dan Administator mengharapkan kenyamanan bagi para player yang nantinya bermain di server ini.
                            </p>
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
