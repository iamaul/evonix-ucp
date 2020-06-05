import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';

import { getCharacterInventory } from '../../../actions/character';

import Loader from '../../../layouts/loader/Loader';

const CharacterInventory = ({ getCharacterInventory, char_id, char_name, character: { inventory, setLoading }, match }) => {
    useEffect(() => {
        getCharacterInventory(char_id);
        // eslint-disable-next-line
    }, []);

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
            {inventory !== null && !setLoading ? (<div>
                <DataTable
                    title={`${char_name}'s Inventory`}
                    columns={columns}
                    data={inventory}
                    highlightOnHover
                    defaultSortField="amount"
                />
            </div>) : (
                <Loader isLoading={setLoading} />
            )}
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
