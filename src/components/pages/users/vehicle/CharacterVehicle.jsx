import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import { Grid, Image, Label, Icon } from 'semantic-ui-react';

import { getCharacterVehicles } from '../../../actions/character';

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
                <b>Damage Panels</b>: {data.damage_panels === 0 ? 'Good' : 'Bad'}<br/>
                <b>Damage Doors</b>: {data.damage_doors === 0 ? 'Good' : 'Bad'}<br/>
                <b>Damage Lights</b>: {data.damage_lights === 0 ? 'Good' : 'Bad'}<br/>
                <b>Damage Tires</b>: {data.damage_tires === 0 ? 'Good' : 'Bad'}<br/>
                <b>Health</b>: {data.health}<br/>
                <b>Max Health</b>: {data.max_health}<br/>
                <b>Fuel</b>: {data.fuel}<br/>
                <b>Component</b>: {data.component}
            </p>
        </Grid.Column>
    </Grid>
);

const CharacterVehicle = ({ getCharacterVehicles, char_id, char_name, character: { vehicle, setLoading }, match }) => {
    useEffect(() => {
        getCharacterVehicles(char_id);
        // eslint-disable-next-line
    }, []);

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
            allowOverflow: true,
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
            {vehicle !== null && !setLoading ? (<div>
                <DataTable
                    title={`${char_name}'s Vehicle List`}
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
        </>
    )
}

CharacterVehicle.propTypes = {
    getCharacterVehicles: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.character
});

export default connect(mapStateToProps, { getCharacterVehicles })(CharacterVehicle);
