import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

const ExpandedData = ({ data }) => (
    <p>{data.name}</p>
)

const Information = ({ character }) => {
    const columns = useMemo(() => [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            style: { fontWeight: 'bold' }
        },
        {
            name: 'Abbreviation',
            selector: 'alias',
            sortable: true
        },
        {
            name: 'Leader',
            selector: 'leader_sqlid',
            sortable: true,
            cell: row => <div>{row.name}</div>
        },
        {
            name: 'Rank Members',
            selector: 'rank_member',
            sortable: true
        },
        {
            name: 'Rank Managers',
            selector: 'rank_manager',
            sortable: true
        },
        {
            name: 'Rank Leaders',
            selector: 'rank_leader',
            sortable: true
        },
        {
            name: 'Rank Executives',
            selector: 'rank_executive',
            sortable: true
        }
        // eslint-disable-next-line
    ], []);

    return (
        <>
            <DataTable
                title="Faction Information"
                columns={columns}
                data={character}
                expandableRows
                expandableRowsComponent={<ExpandedData />}
                highlightOnHover
                defaultSortField="rank_member"
            />
        </>
    )
}

Information.propTypes = {
    character: PropTypes.object.isRequired
}

export default Information;
