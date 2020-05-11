import React from 'react';
import { Checkbox, Grid } from 'semantic-ui-react';

const ChoiceOptions = (props) => {
    const { letter } = props;
    const upper = letter.toUpperCase();
    const option = `${upper}. ${props.text}`;
    const keyUniq = `${props.key}-${props.id}`;

    return (
        <>
            <Grid.Column>
                <Checkbox 
                    onChange={props.onSelectChange}
                    checked={props.checked}
                    value={props.letter}
                    label={option}
                    key={keyUniq}
                    id={props.id}
                />
            </Grid.Column>
        </>
    )
}

export default ChoiceOptions;
