import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import DataTable from 'react-data-table-component';
import NumberFormat from 'react-number-format';
import { 
    Segment, 
    Grid, 
    Image,
    Form,
    Modal,
    Button,
    Header,
    Icon
} from 'semantic-ui-react';

import Sidebar from '../../layouts/sidebar/Sidebar';
import Loader from '../../layouts/loader/Loader';

import { getUserCharacters, createCharacter } from '../../actions/character';

const ExpandedData = ({ data }) => (
    <Grid columns={2} padded>
        <Grid.Column>
            <Image src={`/assets/skins/${data.skin_id}.png`} />
        </Grid.Column>
        <Grid.Column>
            <p style={{ textAlign: 'justify' }}>
                <b>Gender</b>: {data.gender === 0 ? 'Male' : 'Female'}<br/>
                <b>Date of Birth</b>: {data.birth_day === 0 && data.birth_month === 0 && data.birth_year === 0 ? 'None' : `${data.birth_day}/${data.birth_month}/${data.birth_year}`}<br/>
                <b>Exp</b>: {data.exp}<br/>
                <b>Money</b>: <NumberFormat value={data.money} displayType={'text'} thousandSeparator={true} prefix={'$'} /><br/>
                <b>Bank</b>: <NumberFormat value={data.bank} displayType={'text'} thousandSeparator={true} prefix={'$'} /><br/>
                <b>Bank Saving</b>: <NumberFormat value={data.bank_saving} displayType={'text'} thousandSeparator={true} prefix={'$'} /><br/>
                <b>Paycheck</b>: <NumberFormat value={data.paycheck} displayType={'text'} thousandSeparator={true} prefix={'$'} /><br/>
                <b>Max Health</b>: {data.max_health}<br/>
                <b>Health</b>: {data.health}<br/>
                <b>Armour</b>: {data.armour}<br/>
                <b>Phone Number</b>: {data.phone_number}<br/>
                <b>Playtime</b>: {data.play_second === 0 && data.play_minute === 0 && data.play_hour === 0 ? 'Not played yet' : `${data.play_second} seconds, ${data.play_minute} minutes, ${data.play_hour} hours`}<br/>
                <Link to={`/characters/${data.id}/vehicle`} target="_blank">My Vehicle</Link><br/>
                <Link to={`/characters/${data.id}/property`} target="_blank">My Property</Link>
            </p>
        </Grid.Column>
    </Grid>
);

const Characters = ({ getUserCharacters, character: { character, setLoading }, createCharacter }) => {
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
                closeOnEscape={false}
                closeOnDimmerClick={false}
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
                        <Form.Button color="red" content="Create" />
                    </Form>
                </Modal.Content>
            </Modal>
        )
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
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.character
});

export default connect(mapStateToProps, { getUserCharacters, createCharacter })(Characters);
