import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import { Grid, Image, Label, Icon, Segment, Header } from 'semantic-ui-react';

import { getCharacterVehicles } from '../../../actions/vehicle';

import Sidebar from '../../../layouts/sidebar/Sidebar';
import Loader from '../../../layouts/loader/Loader';

const ExpandedData = ({ data }) => (
    <Grid columns={2} padded>
        <Grid.Column>
            <Image src={`/assets/vehicles/${data.model}.png`} />
        </Grid.Column>
        <Grid.Column>
            <p style={{ textAlign: 'justify' }}>
                <b>Model</b>: {data.model}<br/>
                <b>World</b>: {data.world}<br/>
                <b>Interior</b>: {data.interior}<br/>
                <b>Damage Panels</b>: {data.damage_panels}<br/>
                <b>Damage Doors</b>: {data.damage_doors}<br/>
                <b>Damage Lights</b>: {data.damage_lights}<br/>
                <b>Damage Tires</b>: {data.damage_tires}<br/>
                <b>Health</b>: {data.health}<br/>
                <b>Max Health</b>: {data.max_health}<br/>
                <b>Fuel</b>: {data.fuel}<br/>
                <b>Component</b>: {data.component}
            </p>
        </Grid.Column>
    </Grid>
);

const CharacterVehicle = ({ getCharacterVehicles, vehicle: { vehicle, setLoading }, match }) => {
    useEffect(() => {
        getCharacterVehicles(match.params.id);
    }, [getCharacterVehicles, match.params.id]);

    const columns = useMemo(() => [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            style: {
                fontWeight: 'bold'
            }
        },
        {
            name: 'Plate',
            selector: 'number_plate',
            sortable: true
        },
        {
            name: 'Status',
            selector: 'lock_status',
            sortable: true,
            cell: row => <div>{row.lock_status ? (<Label color="red"><Icon name="lock" />Locked</Label>) : (<Label color="green"><Icon name="lock open" />Unlocked</Label>)}</div>
        },
        {
            name: 'Mileage',
            selector: 'mileage',
            sortable: true
        }
        // eslint-disable-next-line
    ], []);

    return (
        <>
            <section id={`characters-${match.params.id}-vehicle`}>
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            {vehicle !== null && !setLoading ? (<div>
                                <Header as="h5">{vehicle.vehicleChar && vehicle.vehicleChar.name}</Header>
                                <DataTable
                                    title="Vehicle List"
                                    columns={columns}
                                    data={vehicle}
                                    expandableRows
                                    expandableRowsComponent={<ExpandedData />}
                                    highlightOnHover
                                    defaultSortField="mileage"
                                />
                            </div>) : (
                                <Loader isLoading={setLoading} />
                            )}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

CharacterVehicle.propTypes = {
    getCharacterVehicles: PropTypes.func.isRequired,
    vehicle: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    vehicle: state.vehicle
});

export default connect(mapStateToProps, { getCharacterVehicles })(CharacterVehicle);
