import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCharacterFactionMembers } from '../../../actions/character';

import Loader from '../../../layouts/loader/Loader';

const Members = ({ faction_sqlid, getCharacterFactionMembers, character: { character, setLoading } }) => {
    useEffect(() => {
        getCharacterFactionMembers(faction_sqlid);
        // eslint-disable-next-line
    },[]);

    const columns = useMemo(() => [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            style: { fontWeight: 'bold' }
        },
        {
            name: 'Rank',
            selector: 'faction_rank',
            sortable: true,
            cell: row => <div>{row.faction_rankname}</div>
        },
        {
            name: 'Division',
            selector: 'faction_div',
            sortable: true,
            cell: row => <div>{row.faction_div === 0 ? 'None' : row.faction_divname}</div>
        },
        {
            name: 'Duty Time',
            selector: 'faction_dutytime',
            sortable: true
        }
        // eslint-disable-next-line
    ], []);

    return (
        <>
            {character !== null && !setLoading ? (
                <DataTable
                    title="Faction Members"
                    columns={columns}
                    data={character}
                    expandableRows
                    expandableRowsComponent={<ExpandedData />}
                    highlightOnHover
                    defaultSortField="faction_rank"
                />
            ) : (<Loader isLoading={setLoading} />)}
        </>
    )
}

Members.propTypes = {
    getCharacterFactionMembers: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.character
});

export default connect(mapStateToProps, { getCharacterFactionMembers })(Members);
