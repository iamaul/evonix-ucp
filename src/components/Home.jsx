import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    Grid, 
    Image,
    Item, 
    Divider,
    Header
} from 'semantic-ui-react';

import HeadlineNews from './pages/news/HeadlineNews';
import Loader from './layouts/loader/Loader';

import { getHeadlineNews } from './actions/news';

const Home = ({ getHeadlineNews, news: { headline_news, setLoading } }) => {
    useEffect(() => {
        getHeadlineNews();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <section id="latest-news">
                <h1 className="head">Latest News</h1>
                <Link to="/news"><Header as="h5" floated="right" >View All</Header></Link>
                <Divider />
                {headline_news === null && !setLoading && (
                    <Header icon="search" size="medium" as="h3" textAlign="center">There is no latest news to display.</Header>
                )}
                {headline_news !== null && !setLoading ? (
                    <Item.Group divided>
                        {headline_news.map(news => (
                            <HeadlineNews key={news.id} headlineNews={news} />
                        ))}
                    </Item.Group>
                ) : (<Loader isLoading={setLoading} />)}
            </section>
            <section id="quick-links">
                <h1 className="head">Quick Links</h1>
                <Divider />
                <Grid container columns={3} relaxed stackable>
                    <Grid.Column>
                        <Image src="/assets/images/forum_link.png" as="a" href="http://forum.evonix-rp.com" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="/assets/images/support_link.png" as="a" href="http://support.evonix-rp.com" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="/assets/images/discord_link.png" as="a" href="https://discord.gg/CgPcnZZ" />
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

Home.propTypes = {
    getHeadlineNews: PropTypes.func.isRequired,
    news: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps, { getHeadlineNews })(Home);
