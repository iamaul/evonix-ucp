import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Form,
    Image,
    Header,
    Divider
} from 'semantic-ui-react';

import { quizResult } from '../../../actions/quiz';

const ScenarioItem = ({ quizResult, requestResult, item, userId, score, nextStep }) => {
    const [answer, setAnswer] = useState('');    

    const { id, title, question, image } = item;

    const data = { userId, id, score, answer };

    const onSubmit = e => {
        e.preventDefault();
        quizResult(data);
        nextStep();
    }

    const onHandleChange = e => setAnswer(e.target.value);

    return (
        <>
            <Image src={image} bordered />
            <small>
                <i>
                    <p style={{ textAlign: "center" }}>
                        Gambar di atas merupakan ilustrasi dari scenario yang dibuat.
                    </p>
                </i>
            </small>
            <br />
            <Header as="h5">{title}</Header>
            <Divider />
            <p style={{ textAlign: "justify" }}>{question}</p>
            <Form size="small" onSubmit={onSubmit}>
                <Form.Field>
                    <textarea 
                        name="answer"
                        placeholder="Answer here ..."
                        value={answer}
                        onChange={onHandleChange} 
                        required
                        rows="5" 
                        col="5" 
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Button color="red" size="medium" content="Submit" loading={requestResult} />
                </Form.Field>
            </Form>
        </>
    )
}

ScenarioItem.propTypes = {
    quizResult: PropTypes.func.isRequired,
    requestResult: PropTypes.bool
}

const mapStateToProps = state => ({
    requestResult: state.quiz.requestResult
});

export default connect(mapStateToProps, { quizResult })(ScenarioItem);
