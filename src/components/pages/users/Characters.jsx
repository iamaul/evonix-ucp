import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import DataTable from 'react-data-table-component';
import { 
    Segment, 
    Grid, 
    Image,
    Divider,
    Form,
    Modal,
    Button,
    Header
} from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';
import Loader from '../../layouts/loader/Loader';

import { getUserCharacters, createCharacter } from '../../actions/character';

const ExpandedData = ({ data }) => (
    <Grid>
        <Grid.Column width={4}>
            <Image src={`/assets/images/skins/${data.skin_id}.png`} size="medium" />
        </Grid.Column>
        <Grid.Column width={9}>
            <p style={{ textAlign: 'justify' }}>
                <b>Gender</b>: {data.gender === 0 ? 'Male' : data.gender === 1 ? 'Female' : 'Other'}<br/>
                <b>Date of Birth</b>: {data.birth_day}/{data.birth_month}/{data.birth_year}<br/>
                <b>Exp</b>: {data.exp}<br/>
                <b>Money</b>: {data.money}<br/>
                <b>Bank</b>: {data.bank}<br/>
                <b>Bank Saving</b>: {data.bank_saving}<br/>
                <b>Paycheck</b>: {data.paycheck}<br/>
                <b>Max Health</b>: {data.max_health}<br/>
                <b>Health</b>: {data.health}<br/>
                <b>Armour</b>: {data.armour}<br/>
                <b>Phone Number</b>: {data.phone_number}<br/>
                <Divider hidden />
                You have spent {data.play_second} seconds, {data.play_minute} minutes, and {data.play_hour} hours in the server!
            </p>
        </Grid.Column>
    </Grid>
);

const Characters = ({ getUserCharacters, character: { character, setLoading }, createCharacter }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ firstname: '', lastname: '', gender: 0 });
    const { firstname, lastname, gender } = formData;

    useEffect(() => {
        getUserCharacters();
        // eslint-disable-next-line
    }, []);

    const actions = (
        <Modal 
            size="tiny" 
            trigger={<Button color="green" size="small" onClick={() => setOpen(true)}>New Character</Button>}
            open={open}
            closeOnEscape={false}
            closeOnDimmerClick={false} 
            closeIcon
            onClose={onModalClose}
        >
            <Header icon="user plus" content="Create A New Character" />
            <Modal.Content>
                <Form onSubmit={e => onSubmit(e)}>
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
                        <Form.Field>Gender:</Form.Field>
                        <Form.Radio
                            label="Male"
                            name="gender"
                            value={0}
                            checked={gender === 0}
                            onChange={c => onChange(c)}
                        />
                        <Form.Radio
                            label="Female"
                            name="gender"
                            value={1}
                            checked={gender === 1}
                            onChange={c => onChange(c)}
                        />
                        <Form.Radio
                            label="Other"
                            name="gender"
                            value={2}
                            checked={gender === 2}
                            onChange={c => onChange(c)}
                        />
                    </Form.Group>
                    <Form.Button color="red" content="Create" />
                </Form>
            </Modal.Content>
        </Modal>
    );

    const columns = useMemo(() => [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            style: {
                fontWeight: 'bold'
            }
        },
        {
            name: 'Last Login',
            selector: 'lastlogin',
            sortable: true,
            cell: row => <div>{row.lastlogin !== 0 ? (<Moment unix fromNow>{row.lastlogin}</Moment>) : 'Not logged in yet.'}</div>
        },
        {
            name: 'Level',
            selector: 'level',
            sortable: true,
            cell: row => <div>{row.level}</div>
        }
        // eslint-disable-next-line
    ], []);

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
                            {character !== null && !setLoading ? (<div>
                                {character.count > 0 && (
                                    <div><small>You have <b>{character.count}</b> characters in the list.</small><br/></div>
                                )}
                                <DataTable
                                    title="Characters"
                                    columns={columns}
                                    data={character.rows}
                                    actions={actions}
                                    expandableRows
                                    expandableRowsComponent={<ExpandedData />}
                                    highlightOnHover
                                    defaultSortField="lastlogin"
                                />
                            </div>) : (
                                <Loader isLoading={setLoading} />
                            )}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </>
    )
}

Characters.propTypes = {
    getUserCharacters: PropTypes.func.isRequired,
    createCharacter: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    character: state.character
});

export default connect(mapStateToProps, { getUserCharacters, createCharacter })(Characters);
