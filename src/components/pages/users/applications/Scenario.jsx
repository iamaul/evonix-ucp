import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Grid,
    Header,
    Segment,
    Image,
    Label,
    Form
} from 'semantic-ui-react';

import { loadQuizScenario, quizResult } from '../../../actions/quiz';

import Loader from '../../../layouts/loader/Loader';

const Scenario = ({ 
    loadQuizScenario, 
    quizResult, 
    auth: { user }, 
    quiz: { scenarios, score, setLoading }, 
    history 
}) => {
    useEffect(() => {
        loadQuizScenario();
    }, [loadQuizScenario])

    const [answer, setAnswer] = useState('');

    const { id, title, image, question } = scenarios;
    const userId = user.id;
    const data = { userId, id, score, answer };

    const onSubmit = e => {
        e.preventDefault();
        quizResult(data, history);
    }

    const onHandleChange = e => setAnswer(e.target.value);

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
                        { setLoading ? (<Loader isLoading={setLoading} />) : (<>
                                <Label ribbon size="small">{title}</Label>
                                <Image src={image} bordered />
                                <small>
                                    <i>
                                        <p style={{ textAlign: "center" }}>
                                            Gambar di atas merupakan ilustrasi dari scenario yang dibuat.
                                        </p>
                                    </i>
                                </small>
                                <br />
                                <p style={{ textAlign: "justify" }}>{question}</p>
                                <Form size="small" onSubmit={onSubmit}>
                                    <Form.Field>
                                        <textarea 
                                            name="answer"
                                            placeholder="Answer here ..."
                                            value={answer}
                                            onChange={onHandleChange} 
                                            rows="5" 
                                            col="5" 
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Form.Button color="red" size="tiny" content="Submit" />
                                    </Form.Field>
                                </Form>
                            </>
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
    quizResult: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    quiz: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loadQuizScenario, quizResult })(withRouter(Scenario));
