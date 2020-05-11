import React from 'react';
import { Checkbox, Grid } from 'semantic-ui-react';

const ChoiceOptions = (props) => {
    const { letter } = props;
    const upper = letter.toUpperCase();
    const option = `${upper}. ${props.text}`;

    return (
        <>
            <Grid.Column>
                <Checkbox 
                    onChange={props.onSelectChange}
                    checked={props.checked}
                    value={props.letter}
                    label={option}
                    key={props.key}
                    id={props.id}
                />
            </Grid.Column>
        </>
    )
}

export default ChoiceOptions;
