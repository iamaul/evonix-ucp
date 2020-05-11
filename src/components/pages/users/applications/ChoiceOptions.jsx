import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const ChoiceOptions = (props) => {
    const { letter } = props;
    const upper = letter.toUpperCase();

    return (
        <>
            <Checkbox 
                onChange={props.onSelectChange}
                checked={props.checked}
                value={props.letter}
                id={props.id} 
            >
                {upper}. {props.question}
            </Checkbox>
        </>
    )
}

export default ChoiceOptions;
