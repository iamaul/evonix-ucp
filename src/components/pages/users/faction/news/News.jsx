import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import Moment from 'react-moment';
import parse from 'html-react-parser';
import { Label, Image, Button, Divider } from 'semantic-ui-react';

import { getFactionNews } from '../../../../actions/news';

import Loader from '../../../../layouts/loader/Loader';

const ExpandedData = ({ data }) => (
    <div>
        <Image src={data.image} size="medium" />
        <p><b>{data.title}</b><br/>Created at <Moment unix format="LLLL">{data.created_at}</Moment>{data.updated_at !== null && (<><br/>
                Last updated on <Moment unix format="LLLL">{data.updated_at}</Moment>
            </>)}</p>
        <Divider hidden />
        {parse(data.content)}
    </div>
);

const News = ({ faction_sqlid, faction_rank, char_id, getFactionNews, news: { faction_news, setLoading } }) => {
    useEffect(() => {
        getFactionNews(faction_sqlid);
        // eslint-disable-next-line
    },[]);

    const actions = (
        <Button
            content="Post News"
            color="green"
            size="small"
        />
    );

    const columns = useMemo(() => [
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
            style: {
                fontWeight: 'bold'
            }
        },
        {
            name: 'Slug',
            selector: 'slug',
            sortable: true
        },
        {
            name: 'Image',
            cell: row => <div><Image src={row.image} size="small" /></div>
        },
        {
            name: 'Created by',
            cell: row => <div>{row.newsCreatedBy && row.newsCreatedBy.name}</div>
        },
        {
            name: 'Updated by',
            cell: row => <div>{row.updated_by ? row.newsUpdatedBy && row.newsUpdatedBy.name : 'None'}</div>
        },
        {
            name: 'Created at',
            selector: 'created_at',
            sortable: true,
            cell: row => <div><Moment unix format="lll">{row.created_at}</Moment></div>
        },
        {
            name: 'Updated at',
            selector: 'updated_at',
            sortable: true,
            cell: row => <div>{row.updated_at !== null ? (<Moment unix format="lll">{row.updated_at}</Moment>) : 'No update'}</div>
        },
        {
            name: 'Status',
            selector: 'published',
            sortable: true,
            cell: row => <div>{row.published === 0 ? <Label color="yellow">Pending</Label> : row.published === 1 ? <Label color="green">Approved</Label> : <Label color="red">Denied</Label>}</div>
        }
        // eslint-disable-next-line
    ], []);

    return (
        <>
            {faction_news !== null && !setLoading ? (
                <DataTable
                    title="Faction News"
                    columns={columns}
                    actions={actions}
                    data={faction_news}
                    pagination
                    expandableRows
                    expandableRowsComponent={<ExpandedData />}
                    highlightOnHover
                    defaultSortField="created_at"
                    actions={actions}
                />
            ) : (
                <Loader isLoading={setLoading} />
            )}
        </>
    )
}

News.propTypes = {
    getFactionNews: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps, { getFactionNews })(News);
