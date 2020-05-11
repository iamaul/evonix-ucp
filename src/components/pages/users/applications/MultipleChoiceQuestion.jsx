import React from 'react';
import {
    Grid,
    Label
} from 'semantic-ui-react';

import MultipleChoiceAnswer from './MultipleChoiceAnswer';

const MultipleChoiceQuestion = (props) => {
    let ribbon = '';
    
    if (props.hasOwnProperty('isCorrect')) {
        ribbon = (props.isCorrect ? (<Label ribbon size="tiny">
            <span role="img" aria-label="check-mark">✔️</span>
        </Label>) : (<Label ribbon size="tiny">
            <span role="img" aria-label="cross-mark">❌</span>
        </Label>));
    }

    return (
        <>
            <p style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                {ribbon}{props.index + 1}. {props.question}
            </p>
            <Grid columns={2} textAlign="justified">
                <MultipleChoiceAnswer {...props} />
            </Grid>
        </>
    )
}

export default MultipleChoiceQuestion;
