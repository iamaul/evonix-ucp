import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import parse from 'html-react-parser';
import { Container, Image, Divider, Header, Button } from 'semantic-ui-react';

import Loader from '../../layouts/loader/Loader';

import { getNewsDetail } from '../../actions/news';

const NewsDetail = ({ getNewsDetail, news: { news_detail, setLoading }, match }) => {
    useEffect(() => {
        getNewsDetail(match.params.slug)
    }, [getNewsDetail, match.params.slug]);

    return (
        <>
            <section id="news-detail">
                {news_detail !== null && !setLoading ? (<div>
                    <h1 className="head">News</h1>
                    {/* <Button circular icon="linkify" label="Share" size="small" floated="right" /> */}
                    <Divider />
                    <Container textAlign="center">
                        <Image size="massive" src={news_detail.image} centered />
                        <Header as="h2">{news_detail.title}</Header>
                    </Container>
                    {news_detail.updated_at !== null && (
                        <Container textAlign="right">
                            Last updated on <Moment unix format="lll">{news_detail.updated_at}</Moment> by {news_detail.newsUpdatedBy && news_detail.newsUpdatedBy.name}
                        </Container>)
                    }
                    <Container textAlign="justified">
                        Posted by {news_detail.newsCreatedBy && news_detail.newsCreatedBy.name} on <Moment unix format="lll">{news_detail.created_at}</Moment>
                        <Divider hidden />
                        {parse(news_detail.content)}
                    </Container>
                </div>) : (<Loader isLoading={setLoading} />)}
            </section>
        </>
    )
}

NewsDetail.propTypes = {
    getNewsDetail: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps, { getNewsDetail })(NewsDetail);
