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
        gender: null
    });

    const genderOptions = [
        { key: 0, text: 'Male', value: 0 },
        { key: 1, text: 'Female', value: 1 }
    ]

    const { firstname, lastname, gender } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onModalClose = () => setOpen(false);

    const onSubmit = e => {
        e.preventDefault();

        setFormData({ 
            firstname: firstname.charAt(0).toUpperCase + firstname.slice(1),
            lastname: lastname.charAt(0).toUpperCase + lastname.slice(1)
        });
        console.log(firstname + lastname);
        
        createCharacter({ firstname, lastname, gender });
        onModalClose();
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
                                    closeOnEscape
                                    closeOnDimmerClick 
                                    closeIcon
                                    onClose={onModalClose}
                                >
                                    <Header icon="user plus" content="Create a new character" />
                                    <Modal.Content>
                                        <Form size="small">
                                            <Form.Input
                                                type="text"
                                                name="fistname"
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
                                                width={7}
                                                name="gender"
                                                options={genderOptions}
                                                value={gender}
                                                onChange={c => onChange(c)}
                                                placeholder="Select Gender"
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
