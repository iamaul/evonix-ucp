import React from 'react';
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
                        <Image src="https://media.giphy.com/media/h5Ct5uxV5RfwY/giphy.gif" centered bordered size="medium" /><br/>
                        You have successfully submitted your application. 
                    </Segment>
                    <Divider hidden />
                    <Button content="Continue" size="small" onClick={() => window.location.reload(false)} />
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Submitted;
