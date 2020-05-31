import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Grid,
    Header,
    Segment,
    Image,
    Icon,
    Button,
    Divider
} from 'semantic-ui-react';

import { userConfirmEmailVerification } from '../../actions/auth';

import Loader from '../../layouts/loader/Loader';

const ConfirmEmailVerification = ({ userConfirmEmailVerification, auth: { confirm_email_verification, setLoading }, match }) => {
    useEffect(() => {
        userConfirmEmailVerification(match.params.code);
    }, [userConfirmEmailVerification, match.params.code]);

    return (
        <>
            <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Header as="h2" textAlign="center">
                        <Image src="/assets/images/evonix-logo.png" size="massive" />
                    </Header>
                    <Segment color="red" stacked>
                        {confirm_email_verification !== null && !setLoading ? (<>
                            <Image src="https://media.giphy.com/media/U8f2H1xkfBvyxJhk0e/giphy.gif" centered size="medium" /><br/>
                            {confirm_email_verification.msg}
                            <Divider hidden />
                            <Button
                                info
                                as={Link}
                                to="/dashboard"
                            >
                                <Icon name="arrow alternate circle left"/>Back to Dashboard
                            </Button>
                        </>) : (<Loader isLoading={setLoading} />)}
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}

ConfirmEmailVerification.propTypes = {
    userConfirmEmailVerification: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { userConfirmEmailVerification })(ConfirmEmailVerification);
