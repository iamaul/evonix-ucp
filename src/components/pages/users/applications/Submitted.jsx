import React from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Header,
    Segment,
    Image,
    Button,
    Divider
} from 'semantic-ui-react';

const Submitted = () => {
    return (
        <>
            <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Header as="h2" textAlign="center">
                        <Image src="/assets/images/evonix-logo.png" size="massive" />
                    </Header>
                    <Segment color="red" stacked>
                        <Image src="https://media.giphy.com/media/h5Ct5uxV5RfwY/giphy.gif" centered bordered /><br/>
                        Finally, you have successfully submitted your application.
                        <Divider hidden />
                        <Button content="Continue" size="small" as={Link} to="/dashboard" />
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Submitted;
