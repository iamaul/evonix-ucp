import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Grid, Button, Icon } from 'semantic-ui-react';

const Page404 = () => (
    <Grid textAlign="center" style={{ height: '80vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 600 }}>
            <Header as="h1" textAlign="center">
                Oops ...
            </Header>
            <Image src="/assets/images/404.png" centered rounded />
            <br/>
            <Button as={Link} to="/" color="red"><Icon name="arrow alternate circle left"/>Back</Button>
        </Grid.Column>
    </Grid>
)

export default Page404;
