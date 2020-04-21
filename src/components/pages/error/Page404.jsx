import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Grid, Button, Icon } from 'semantic-ui-react';

import page404 from '../../../assets/images/404.png';

const Page404 = () => (
    <Grid textAlign="center" style={{ height: '80vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 600 }}>
            <Header as="h1" textAlign="center">
                Oops ...
            </Header>
            <Image src={page404} centered rounded />
            <br/>
            <Button as={Link} to="/" color="red"><Icon name="arrow alternate circle left"/>Back</Button>
        </Grid.Column>
    </Grid>
)

export default Page404;
