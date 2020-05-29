import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import parse from 'html-react-parser';
import { Divider, Header, Item, Button, Icon } from 'semantic-ui-react';

import Loader from '../../layouts/loader/Loader';

import { getNews } from '../../actions/news';

const NewsFeed = ({ getNews, news: { news, setLoading } }) => {
    useEffect(() => {
        getNews();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <section id="news">
                <h1 className="head">News</h1>
                <Divider />
                {news === null && !setLoading && (
                    <Header size="medium" as="h3" textAlign="center"><Icon name="search" /><Header.Content>Oops... there is no news to display.</Header.Content></Header>
                )}
                {news !== null && !setLoading ? (
                    <Item.Group divided>
                        {news.map((item, index) => (
                            <Item key={index}>
                                {/* <Item.Image src="https://place-hold.it/800x800&text=Image&fontsize=32" /> */}
                                <Item.Image src={item.image} />

                                <Item.Content>
                                    <Item.Header as={Link} to={`/news/${item.slug}`}>{item.title}</Item.Header>
                                    <Item.Meta>
                                        <span className="cinema"><Moment unix format="lll">{item.created_at}</Moment> by {item.newsCreatedBy && item.newsCreatedBy.name}</span>
                                    </Item.Meta>
                                    <Item.Description>
                                        <Truncate lines={3} ellipsis={<span>...</span>}>
                                            {parse(item.content)}
                                        </Truncate> 
                                    </Item.Description>
                                    <Item.Extra>
                                        <Button secondary size="mini" as={Link} to={`/news/${item.slug}`}>
                                            Read more
                                            <Icon name="right chevron" />
                                        </Button>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        ))}
                    </Item.Group>
                ) : (<Loader isLoading={setLoading} />)}
            </section>
        </>
    )
}

NewsFeed.propTypes = {
    getNews: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps, { getNews })(NewsFeed);
