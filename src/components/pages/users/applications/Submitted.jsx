import React from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Header,
    Segment,
    Image,
    Button
} from 'semantic-ui-react';

const Submitted = () => {
    return (
        <>
            <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Header as="h2" textAlign="center">
                        <Image src="/assets/images/evonix-logo.png" size="massive" />
                    </Header>
                    <Segment color="red" stacked>
                        <Image src="https://media.giphy.com/media/h5Ct5uxV5RfwY/giphy.gif" size="medium" bordered /><br/>
                        Finally, you have successfully submitted your application.<br/>
                        <Button content="Back to UCP" size="small" as={Link} to="/applications" />
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Submitted;
