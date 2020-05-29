import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import { Item, Button, Icon } from 'semantic-ui-react';

const HeadlineNews = ({ headlineNews }) => {
    const { slug, title, created_at, newsCreatedBy, content, image } = headlineNews;

    return (
        <Item>
            {/* <Item.Image src="https://place-hold.it/800x800&text=Image&fontsize=32" /> */}
            <Item.Image src={image} />

            <Item.Content>
                <Item.Header as={Link} to={`/news/${slug}`}>{title}</Item.Header>
                <Item.Meta>
                    <span className="cinema"><Moment unix format="lll">{created_at}</Moment> by {newsCreatedBy && newsCreatedBy.name}</span>
                </Item.Meta>
                <Item.Description>
                    <Truncate lines={50} ellipsis={<span>...</span>}>
                        {content}
                    </Truncate> 
                </Item.Description>
                <Item.Extra>
                    <Button secondary size="mini" as={Link} to={`/news/${slug}`}>
                        Read more
                        <Icon name="right chevron" />
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

HeadlineNews.propTypes = {
    headlineNews: PropTypes.object.isRequired
}

export default HeadlineNews;
