import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import Moment from 'react-moment';

import { getCharacterAdminWarns } from '../../../actions/character';

import Loader from '../../../layouts/loader/Loader';

const ExpandedData = ({ data }) => (
    <div>
        <p><b>Issuer</b>: {data.issuer}</p>
        <p><b>Date</b>: <Moment unix format="LLLL">{data.timestamp}</Moment></p>
        <p><b>Reason</b>: {data.reason}</p>
    </div>
);

const CharacterAdminWarn = ({ getCharacterAdminWarns, char_id, char_name, character: { admin_warns, setLoading } }) => {
    useEffect(() => {
        getCharacterAdminWarns(char_id);
        // eslint-disable-next-line
    }, []);

    const columns = useMemo(() => [
        {
            name: 'Type',
            selector: 'type',
            sortable: true,
            cell: row => <div>{row.type === 0 ? 'Kick' : row.type === 1 ? 'Fine' : row.type === 2 ? 'Jail' : row.type === 3 ? 'Ban' : 'None'}</div>
        },
        {
            name: 'Date',
            selector: 'timestamp',
            sortable: true,
            cell: row => <div><Moment unix format="lll">{row.timestamp}</Moment></div>
        },
        {
            name: 'Issuer',
            selector: 'issuer'
        },
        {
            name: 'Reason',
            selector: 'reason'
        }
        // eslint-disable-next-line
    ], []);

    return (
        <>
            {admin_warns !== null && !setLoading ? (<div>
                <DataTable
                    title={`${char_name}'s Admin Records`}
                    columns={columns}
                    data={admin_warns}
                    expandableRows
                    expandableRowsComponent={<ExpandedData />}
                    highlightOnHover
                    defaultSortField="timestamp"
                />
            </div>) : (
                <Loader isLoading={setLoading} />
            )}
        </>
    )
}

CharacterAdminWarn.propTypes = {
    getCharacterAdminWarns: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.character
});

export default connect(mapStateToProps, { getCharacterAdminWarns })(CharacterAdminWarn);
