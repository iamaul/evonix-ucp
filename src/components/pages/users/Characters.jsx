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
    const [formData, setFormData] = useState({ firstname: '', lastname: '', gender: null });

    const { firstname, lastname, gender } = formData;

    const onChange = c => {
        setFormData({ ...formData, [c.target.name]: c.target.value });
        console.log(c.target.name + " " + c.target.value);
        console.log(formData);
    }

    const options = [
        { key: 'm', text: 'Male', value: 0 },
        { key: 'f', text: 'Female', value: 1 }
    ]

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
                                    dimmer="inverted" 
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
                                            <Form.Select
                                                name="gender"
                                                value={gender}
                                                options={options}
                                                placeholder="Select Gender"
                                                onChange={c => onChange(c)}
                                                width={9}
                                            />
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
