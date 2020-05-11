import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const ChoiceOptions = (props) => {
    const { letter } = props;
    const upper = letter.toUpperCase();
    const option = `${upper}. ${props.text}`;

    return (
        <>
            <Checkbox 
                key={props.keyId}
                onChange={props.onSelectChange}
                checked={props.checked}
                value={props.letter}
                label={option}
                id={props.id}
            />
        </>
    )
}

export default ChoiceOptions;
