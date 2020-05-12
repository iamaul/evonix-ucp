import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Label,
    Image,
    Form
} from 'semantic-ui-react';

import { quizResult } from '../../../actions/quiz';

const ScenarioItem = ({ quizResult, auth: { user }, item, quiz: { score }, history }) => {
    const [answer, setAnswer] = useState('');

    const { id, title, image, question } = item;
    const userId = user.id;
    
    const data = { userId, id, score, answer };

    const onSubmit = e => {
        e.preventDefault();
        quizResult(data, history);
    }

    const onHandleChange = e => setAnswer(e.target.value);
    
    return (
        <>
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

ScenarioItem.propTypes = {
    quizResult: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    quiz: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { quizResult })(withRouter(ScenarioItem));
