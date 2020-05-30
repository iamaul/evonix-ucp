import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import NumberFormat from 'react-number-format';
import { Grid, Label, Icon, Segment, Header } from 'semantic-ui-react';

import { getCharacterProperty } from '../../../actions/property';

import Sidebar from '../../../layouts/sidebar/Sidebar';
import Loader from '../../../layouts/loader/Loader';

const CharacterProperty = ({ getCharacterProperty, property: { property, setLoading }, match }) => {
    useEffect(() => {
        getCharacterProperty(match.params.id);
    }, [getCharacterProperty, match.params.id]);

    const columns = useMemo(() => [
        {
            name: 'Address',
            cell: row => <div>{row.address_name}, {row.address_number}</div>
        },
        {
            name: 'Price',
            selector: 'price',
            sortable: true,
            cell: row => <NumberFormat value={row.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        },
        {
            name: 'Level',
            selector: 'level',
            sortable: true
        },
        {
            name: 'Interior',
            selector: 'enter_interior',
            sortable: true
        },
        {
            name: 'World',
            selector: 'enter_world',
            sortable: true
        },
        {
            name: 'Status',
            selector: 'lock_status',
            sortable: true,
            cell: row => <div>{row.lock_status ? (<Label color="red"><Icon name="lock" />Locked</Label>) : (<Label color="green"><Icon name="lock open" />Unlocked</Label>)}</div>
        }
        // eslint-disable-next-line
    ], []);

    return (
        <>
            <section id={`characters-${match.params.id}-property`}>
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            {property !== null && !setLoading ? (<div>
                                <DataTable
                                    title={`${match.params.name}'s Property List`}
                                    columns={columns}
                                    data={property}
                                    highlightOnHover
                                    defaultSortField="price"
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

CharacterProperty.propTypes = {
    getCharacterProperty: PropTypes.func.isRequired,
    property: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    property: state.property
});

export default connect(mapStateToProps, { getCharacterProperty })(CharacterProperty);
