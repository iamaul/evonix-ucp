import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import { Grid, Segment } from 'semantic-ui-react';

import { getCharacterInventory } from '../../../actions/character';

import Sidebar from '../../../layouts/sidebar/Sidebar';
import Loader from '../../../layouts/loader/Loader';

const CharacterInventory = ({ getCharacterInventory, character: { inventory, setLoading }, match }) => {
    useEffect(() => {
        getCharacterInventory(match.params.id);
    }, [getCharacterInventory, match.params.id]);

    const columns = useMemo(() => [
        {
            name: 'Item',
            selector: 'name',
            sortable: true
        },
        {
            name: 'Amount',
            selector: 'amount',
            sortable: true
        }
        // eslint-disable-next-line
    ], []);

    return (
        <>
            <section id={`characters-${match.params.id}-inventory`}>
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            {inventory !== null && !setLoading ? (<div>
                                <DataTable
                                    title={`${match.params.name}'s Inventory`}
                                    columns={columns}
                                    data={inventory}
                                    highlightOnHover
                                    defaultSortField="amount"
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

CharacterInventory.propTypes = {
    getCharacterInventory: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.character
});

export default connect(mapStateToProps, { getCharacterInventory })(CharacterInventory);
