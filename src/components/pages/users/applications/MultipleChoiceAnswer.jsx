import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import ChoiceOptions from './ChoiceOptions';

import { updateQuiz } from '../../../actions/quiz';

const MultipleChoiceAnswer = ({ choices, providedAnswer, id, updateQuiz }) => {
    const onSelectChoice = e => updateQuiz(id, e.target.value);

    const choiceNodes = Object.keys(choices).map((key) => {
        return <ChoiceOptions 
            letter={key} 
            text={choices[key]} 
            id={`question-${id}-choice-${key}`}
            onSelectChange={onSelectChoice}
            checked={providedAnswer === key}
        />
    });

    return (
        <>
            <Grid.Column key={id}>
                {choiceNodes}
            </Grid.Column>
        </>
    )
}

MultipleChoiceAnswer.propTypes = {
    choices: PropTypes.object.isRequired,
    providedAnswer: PropTypes.string,
    id: PropTypes.number.isRequired,
    updateQuiz: PropTypes.func.isRequired
}

export default connect(null, { updateQuiz })(MultipleChoiceAnswer);
