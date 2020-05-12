import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Grid,
    Header,
    Segment,
    Image
} from 'semantic-ui-react';

import { loadQuizScenario } from '../../../actions/quiz';

import Loader from '../../../layouts/loader/Loader';
import ScenarioItem from './ScenarioItem';

const Scenario = ({ loadQuizScenario, quiz: { scenarios, setLoading } }) => {
    useEffect(() => {
        loadQuizScenario();
    }, [loadQuizScenario])

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
                                <ScenarioItem item={scenarios} />
                            )
                        }
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}

Scenario.propTypes = {
    loadQuizScenario: PropTypes.func.isRequired,
    quiz: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    quiz: state.quiz
});

export default connect(mapStateToProps, { loadQuizScenario })(Scenario);
