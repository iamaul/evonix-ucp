import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    Button, 
    Header, 
    Icon, 
    Segment, 
    Grid, 
    Form, 
    Modal 
} from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';

import { createCharacter } from '../../actions/character';

const Characters = ({ createCharacter }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ firstname: '', lastname: '', gender: 0 });

    const { firstname, lastname, gender } = formData;

    const onChange = c => setFormData({ ...formData, [c.target.name]: c.target.value });

    const onModalClose = () => setOpen(false);

    const onSubmit = e => {
        e.preventDefault();
        
        createCharacter({ firstname, lastname, gender });
    }

    return (
        <>
            <section id="characters">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            <Segment placeholder textAlign="center">
                                <Header icon>
                                    <Icon name="search" />
                                    No characters are listed for this account.
                                </Header>
                                <Modal 
                                    size="tiny" 
                                    trigger={<Button primary onClick={() => setOpen(true)}>Add New</Button>}
                                    open={open}
                                    closeOnEscape={false}
                                    closeOnDimmerClick={false} 
                                    closeIcon
                                    onClose={onModalClose}
                                >
                                    <Header icon="user plus" content="Create a new character" />
                                    <Modal.Content>
                                        <Form size="small" onSubmit={e => onSubmit(e)}>
                                            <Form.Input
                                                type="text"
                                                name="firstname"
                                                value={firstname}
                                                placeholder="First Name"
                                                onChange={c => onChange(c)}
                                            />
                                            <Form.Input
                                                type="text"
                                                name="lastname"
                                                value={lastname}
                                                placeholder="Last Name"
                                                onChange={c => onChange(c)}
                                            />
                                            <Form.Group inline>
                                                <label>Gender</label>
                                                <Form.Radio
                                                    label="Male"
                                                    name="gender"
                                                    value='0'
                                                    checked={gender === 0}
                                                    onChange={c => onChange(c)}
                                                />
                                                <Form.Radio
                                                    label="Female"
                                                    name="gender"
                                                    value='1'
                                                    checked={gender === 1}
                                                    onChange={c => onChange(c)}
                                                />
                                            </Form.Group>
                                            <Form.Button color="red" content="Create" />
                                        </Form>
                                    </Modal.Content>
                                </Modal>
                            </Segment>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

Characters.propTypes = {
    createCharacter: PropTypes.func.isRequired
}

export default connect(null, { createCharacter })(Characters);
