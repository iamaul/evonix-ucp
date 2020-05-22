import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import { 
    Button, 
    Segment, 
    Grid, 
    Image
} from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';
import Loader from '../../layouts/loader/Loader';

import { getUserCharacters } from '../../actions/character';

const ExpandedData = ({ data }) => (
    <Grid>
        <Grid.Column width={4}>
            <Image src={`/assets/images/skins/${data.skin_id}.png`} size="medium" />
        </Grid.Column>
        <Grid.Column width={9}>
            <p style={{ textAlign: 'justify' }}>
                <b>Gender</b>: {data.gender === 0 ? 'Male' : data.gender === 1 ? 'Female' : 'Other'}<br/>
                <b>Date of Birth</b>: {data.birth_day}/{data.birth_month}/{data.birth_year}<br/>
                <b>Exp</b>: {data.exp}<br/>
                <b>Money</b>: {data.money}<br/>
                <b>Bank</b>: {data.bank}<br/>
                <b>Bank Saving</b>: {data.bank_saving}<br/>
                <b>Paycheck</b>: {data.paycheck}<br/>
                <b>Max Health</b>: {data.max_health}<br/>
                <b>Health</b>: {data.health}<br/>
                <b>Armour</b>: {data.armour}<br/>
                <b>Phone Number</b>: {data.phone_number}<br/>
                <Divider hidden />
                You have spent {data.play_second} seconds, {data.play_minute} minutes, and {data.play_hour} hours in the server!
            </p>
        </Grid.Column>
    </Grid>
);

const Characters = ({ getUserCharacters , character: { character, setLoading } }) => {

    useEffect(() => {
        getUserCharacters();
        // eslint-disable-next-line
    }, []);

    const { count, rows } = character;

    const actions = (
        <div>
            <Button
                content="Create A New Character"
                color="green"
                size="small"
                as={Link}
                to="/characters/create"
            /><br/>
            <small>You have created {count} characters.</small>
        </div>
    );

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
            name: 'Last Login',
            selector: 'lastlogin',
            sortable: true,
            cell: row => <div>{row.lastlogin !== 0 ? (<Moment unix fromNow>{row.lastlogin}</Moment>) : 'Not logged in yet.'}</div>
        },
        {
            name: 'Level',
            selector: 'level',
            sortable: true,
            cell: row => <div>{row.level}</div>
        }
        // eslint-disable-next-line
    ], []);

    return (
        <>
            <section id="characters">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            {rows !== null && !setLoading ? (
                                <DataTable
                                    title="Characters"
                                    columns={columns}
                                    data={rows}
                                    expandableRows
                                    expandableRowsComponent={<ExpandedData />}
                                    highlightOnHover
                                    defaultSortField="lastlogin"
                                />
                            ) : (
                                <Loader isLoading={setLoading} />
                            )}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

Characters.propTypes = {
    getUserCharacters: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    character: state.character
});

export default connect(mapStateToProps, { getUserCharacters })(Characters);
