import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Grid,
    Header,
    Segment,
    Image
} from 'semantic-ui-react';

import ScenarioItem from './ScenarioItem';

import Loader from '../../../layouts/loader/Loader';

const Scenario = ({ auth: { user }, quiz: { scenarios, score, setLoading } }) => {
    return (
        <>
            <Grid textAlign="center" style={{ height: "60vh" }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 700 }}>
                    <Header as="h2" textAlign="center">
                        <Image src="/assets/images/evonix-logo.png" size="massive" to="/" />
                    </Header>
                    <Segment color="red" stacked>
                        <Header as="h3" textAlign="center">
                            Step 2: Scenario
                        </Header>
                        { setLoading ? (<Loader isLoading={setLoading} />) : (
                            scenarios.map((scenario) => (
                                <ScenarioItem key={scenario.id} item={scenario} userId={user.id} score={score} />
                            )
                        ))}
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}

Scenario.propTypes = {
    auth: PropTypes.object.isRequired,
    quiz: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    quiz: state.quiz
});

export default connect(mapStateToProps)(Scenario);
