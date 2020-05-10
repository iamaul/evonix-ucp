import React from 'react';
import {
    Header,
    Grid
} from 'semantic-ui-react';

import MultipleChoiceAnswer from './MultipleChoiceAnswer';

const MultipleChoiceQuestion = (props) => {
    let headerColor = 'black';
    
    if (props.hasOwnProperty('isCorrect')) {
        headerColor = `${props.isCorrect ? 'green' : 'red'}`;
    }

    return (
        <>
            <Header as="h5" color={headerColor}>
                {props.index + 1}. {props.question}
            </Header>
            <Grid columns={2}>
                <MultipleChoiceAnswer {...props} />
            </Grid>
        </>
    )
}

export default MultipleChoiceQuestion;
