import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import NumberFormat from 'react-number-format';
import { Label, Icon } from 'semantic-ui-react';

import { getCharacterBizz } from '../../../actions/character';

import Loader from '../../../layouts/loader/Loader';

const CharacterBizz = ({ getCharacterBizz, char_id, char_name, character: { bizz, setLoading } }) => {
    useEffect(() => {
        getCharacterBizz(char_id);
        // eslint-disable-next-line
    }, []);

    const columns = useMemo(() => [
        {
            name: 'Type',
            selector: 'type',
            sortable: true,
            cell: row => <div>{
                row.type === 0 ? 'Advertisement Center' : 
                row.type === 1 ? 'Bank' : 
                row.type === 2 ? 'Bar' : 
                row.type === 3 ? 'Clothes Shop' :
                row.type === 4 ? 'DMV' :
                row.type === 5 ? 'Electronic Shop' :
                row.type === 6 ? 'Gas Station' :
                row.type === 7 ? 'Market 24/7' :
                row.type === 8 ? 'Miscellaneous' :
                row.type === 9 ? 'Pay n Spray' :
                row.type === 10 ? 'Pawn Shop' :
                row.type === 11 ? 'Restaurant' : 'Unknown'}</div>
        },
        {
            name: 'Price',
            selector: 'price',
            sortable: true,
            cell: row => <NumberFormat value={row.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        },
        {
            name: 'Entrance Fee',
            selector: 'entrance_fee',
            sortable: true,
            cell: row => <NumberFormat value={row.entrance_fee} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        },
        {
            name: 'Stock',
            selector: 'stock',
            sortable: true,
            cell: row => <NumberFormat value={row.stock} displayType={'text'} thousandSeparator={true} />
        },
        {
            name: 'Cash',
            selector: 'money',
            sortable: true,
            cell: row => <NumberFormat value={row.money} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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
            {bizz !== null && !setLoading ? (<div>
                <DataTable
                    title={`${char_name}'s Bizz List`}
                    columns={columns}
                    data={bizz}
                    highlightOnHover
                    defaultSortField="price"
                />
            </div>) : (
                <Loader isLoading={setLoading} />
            )}
        </>
    )
}

CharacterBizz.propTypes = {
    getCharacterBizz: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.character
});

export default connect(mapStateToProps, { getCharacterBizz })(CharacterBizz);
