import React, { useEffect, useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Moment from 'react-moment';
import DataTable from 'react-data-table-component';
import NumberFormat from 'react-number-format';
import Swal from 'sweetalert2';
import { 
    Segment, 
    Grid, 
    Image,
    Form,
    Modal,
    Button,
    Header,
    Icon,
    Divider
} from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';
import Loader from '../../layouts/loader/Loader';

import CharacterAdminWarn from './admin_warn/CharacterAdminWarn';
import CharacterInventory from './inventory/CharacterInventory';
import CharacterVehicle from './vehicle/CharacterVehicle';
import CharacterProperty from './property/CharacterProperty';
// import CharacterFaction from './faction/CharacterFaction';
import CharacterBizz from './bizz/CharacterBizz';

import { getUserCharacters, createCharacter, deleteCharacter } from '../../actions/character';

const ExpandedData = ({ data }) => (
    <Grid columns={2} padded>
        <Grid.Column>
            <Image src={`/assets/skins/${data.skin_id}.png`} />
        </Grid.Column>
        <Grid.Column>
            <p style={{ textAlign: 'justify' }}>
                <b>Gender</b>: {data.gender === 0 ? 'Male' : 'Female'}<br/>
                <b>Date of Birth</b>: {data.birth_day === 0 && data.birth_month === 0 && data.birth_year === 0 ? 'Not logged in yet.' : `${data.birth_day}/${data.birth_month}/${data.birth_year}`}<br/>
                <b>Faction</b>: {data.faction_sqlid === 0 ? 'Civilian' : `${data.charFaction && data.charFaction.name} - ${data.faction_rankname} (${data.faction_rank})`}<br/>
                <b>Exp</b>: {data.exp}<br/>
                <b>Money</b>: <NumberFormat value={data.money} displayType={'text'} thousandSeparator={true} prefix={'$'} /><br/>
                <b>Bank</b>: <NumberFormat value={data.bank} displayType={'text'} thousandSeparator={true} prefix={'$'} /><br/>
                <b>Bank Saving</b>: <NumberFormat value={data.bank_saving} displayType={'text'} thousandSeparator={true} prefix={'$'} /><br/>
                <b>Paycheck</b>: <NumberFormat value={data.paycheck} displayType={'text'} thousandSeparator={true} prefix={'$'} /><br/>
                <b>Max Health</b>: {data.max_health}<br/>
                <b>Health</b>: {data.health}<br/>
                <b>Armour</b>: {data.armour}<br/>
                <b>Phone Number</b>: {data.phone_number}<br/>
                <b>Playtime</b>: {data.play_second === 0 && data.play_minute === 0 && data.play_hour === 0 ? 'Not played yet' : `${data.play_second} seconds, ${data.play_minute} minutes, ${data.play_hour} hours`}
            </p>
            <Divider />
            <Button.Group size="small">
                <Modal trigger={<Button size="small">Admin Records</Button>} closeIcon>
                    <Modal.Content>
                        <CharacterAdminWarn char_id={data.id} char_name={data.name} />
                    </Modal.Content>
                </Modal>
                {/* {data.faction_sqlid !== 0 && (
                    <Modal trigger={<Button size="small">Faction</Button>} closeIcon>
                        <Modal.Header>{data.name}</Modal.Header>
                        <Modal.Content>
                            <CharacterFaction char_id={data.id} leader_sqlid={data.charFaction && data.charFaction.leader_sqlid} faction_rank={data.faction_rank} />
                        </Modal.Content>
                    </Modal>
                )} */}
                <Modal trigger={<Button size="small">Inventory</Button>} closeIcon>
                    <Modal.Content>
                        <CharacterInventory char_id={data.id} char_name={data.name} />
                    </Modal.Content>
                </Modal>
                <Modal trigger={<Button size="small">Vehicle</Button>} closeIcon>
                    <Modal.Content>
                        <CharacterVehicle char_id={data.id} char_name={data.name} />
                    </Modal.Content>
                </Modal>
                <Modal trigger={<Button size="small">Business</Button>} closeIcon>
                    <Modal.Content>
                        <CharacterBizz char_id={data.id} char_name={data.name} />
                    </Modal.Content>
                </Modal>
                <Modal trigger={<Button size="small">Property</Button>} closeIcon>
                    <Modal.Content>
                        <CharacterProperty char_id={data.id} char_name={data.name} />
                    </Modal.Content>
                </Modal>
            </Button.Group>
        </Grid.Column>
    </Grid>
);

const Characters = ({ 
    getUserCharacters, 
    createCharacter, 
    deleteCharacter,
    auth: { user },
    character: { character, requestCreateChar, setLoading }
}) => {
    const [formData, setFormData] = useState({ firstname: '', lastname: '', gender: '' });
    const { firstname, lastname, gender } = formData;

    useEffect(() => {
        getUserCharacters();
        // eslint-disable-next-line
    }, []);

    const onChange = (e, target) => setFormData({ ...formData, [target.name]: target.value });

    const onSubmit = e => {
        e.preventDefault();
        
        createCharacter({ firstname, lastname, gender });
        setFormData({ firstname: '', lastname: '', gender: '' });
    }

    const actions = (
        character && character.count !== 5 && (
            <Modal 
                size="tiny" 
                trigger={<Button 
                    color="green" 
                    size="small" 
                    icon labelPosition="left"
                >
                    <Icon name="add user"/>New Character
                </Button>}
                closeIcon
            >
                <Header icon="user plus" content="Create A New Character" />
                <Modal.Content>
                    <Form onSubmit={onSubmit}>
                        <Form.Input
                            type="text"
                            name="firstname"
                            value={firstname}
                            placeholder="First Name"
                            onChange={onChange}
                        />
                        <Form.Input
                            type="text"
                            name="lastname"
                            value={lastname}
                            placeholder="Last Name"
                            onChange={onChange}
                        />
                        <Form.Group inline>
                            <Form.Field>Gender:</Form.Field>
                            <Form.Radio
                                label="Male"
                                name="gender"
                                value={0}
                                checked={gender === 0}
                                onChange={onChange}
                            />
                            <Form.Radio
                                label="Female"
                                name="gender"
                                value={1}
                                checked={gender === 1}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Button color="red" content="Create" loading={requestCreateChar} />
                    </Form>
                </Modal.Content>
            </Modal>
        )
    );

    const onCharacterDelete = useCallback((id) => {
        Swal.fire({
            title: 'Are you sure?',
            html: `<small>Your character with id <b>${id}</b> will be deleted, you won't be able to revert this.</small>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.value) {
                deleteCharacter(id);
            }
        });
        // eslint-disable-next-line
    }, []);

    const columns = useMemo(() => [
        {
            name: 'Id',
            selector: 'id'
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            style: { fontWeight: 'bold' }
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
            cell: row => <div>{row.level === 0 ? 'Not logged in yet.' : row.level}</div>
        },
        {
            name: 'Action',
            cell: (row) => (<Button color="red" onClick={() => onCharacterDelete(row.id)} icon size="small"><Icon name="delete"/></Button>)
        }
        // eslint-disable-next-line
    ], []);

    if (user !== null) {
        if (user.status === 0 || user.status === 1 || user.status === 2) {
            return <Redirect to="/applications" />;
        }
    }

    return (
        <>
            <section id="characters">
                <Grid stackable>
                    <Sidebar />
                    <Grid.Column stretched width={12}>
                        <Segment>
                            {character !== null && !setLoading ? (
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
                            ) : (
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
    createCharacter: PropTypes.func.isRequired,
    deleteCharacter: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.character,
    auth: state.auth
});

export default connect(mapStateToProps, { getUserCharacters, createCharacter, deleteCharacter })(Characters);
