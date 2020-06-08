import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Label } from 'semantic-ui-react';

const MyActivity = ({ character }) => {
    return (
        <>
            <Grid columns={2} padded>
                <Grid.Column>
                    <Image src={`/assets/skins/${character.faction_skin}.png`} />
                </Grid.Column>
                <Grid.Column>
                    <p style={{ textAlign: 'justify' }}>
                        <b>Division</b>: {character.faction_divname}<br/>
                        <b>Status</b>: {character.faction_duty === 0 ? <Label color="red" size="small">Off Duty</Label> : <Label color="green" size="small">On Duty</Label>}<br/>
                        <b>Duty Time</b>: {character.faction_dutytime}<br/>
                        <b>Duty Paycheck</b>: {character.faction_dutypaycheck}
                    </p>
                </Grid.Column>
            </Grid>
        </>
    )
}

MyActivity.propTypes = {
    character: PropTypes.object.isRequired
}

export default MyActivity;
