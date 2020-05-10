import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import ChoiceOptions from './ChoiceOptions';

import { updateQuiz } from '../../../actions/quiz';

const MultipleChoiceAnswer = ({ user_applications: { choices, providedAnswer, id }, updateQuiz }) => {
    const choiceNodes = Object.keys(choices).map((key) => {
        return <ChoiceOptions 
            letter={key} 
            question={choices[key]} 
            id={`question-${id}-choice-${key}`}
            onChange={onSelectChoice}
            checked={providedAnswer === key}
        />
    });

    const onSelectChoice = e => {
        const answer = e.target.value;
        updateQuiz(id, answer);
    }

    return (
        <>
            <Grid.Column>
                {choiceNodes}
            </Grid.Column>
        </>
    )
}

MultipleChoiceAnswer.propTypes = {
    user_applications: PropTypes.object.isRequired,
    updateQuiz: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user_applications: state.user_applications
});

export default connect(mapStateToProps, { updateQuiz })(MultipleChoiceAnswer);
