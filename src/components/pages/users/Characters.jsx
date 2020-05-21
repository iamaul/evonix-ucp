import React, { useState } from 'react';
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

const Characters = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ 
        firstname: '',
        lastname: '',
        gender: ''
    });

    const options = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' }
    ]

    const { firstname, lastname, gender } = formData;

    const onChange = c => setFormData({ ...formData, [c.target.name]: c.target.value });

    // const onModalClose = () => setOpen(false);

    const onSubmit = e => {
        e.preventDefault();
        
        createCharacter({ firstname, lastname, gender });
        // onModalClose();
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
                                    dimmer="blurring" 
                                    trigger={<Button primary onClick={() => setOpen(true)}>Add New</Button>}
                                    open={open}
                                    closeOnEscape={false}
                                    closeOnDimmerClick={false} 
                                    closeIcon
                                >
                                    <Header icon="user plus" content="Create a new character" />
                                    <Modal.Content>
                                        <Form size="small">
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
                                            <Form.Select
                                                name="gender"
                                                value={gender}
                                                options={options}
                                                placeholder="Select Gender"
                                                onChange={c => onChange(c)}
                                                width={7}
                                            />
                                        </Form>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color="red" content="Create" onClick={e => onSubmit(e)} />
                                    </Modal.Actions>
                                </Modal>
                            </Segment>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

export default Characters;
