import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { getCharacter } from '../../../actions/character';

import MyActivity from './MyActivity';
import Information from './Information';
import Members from './Members';
import News from './news/News';

import Loader from '../../../layouts/loader/Loader';

const CharacterFaction = ({ char_id, leader_sqlid, faction_rank, getCharacter, character: { character, setLoading } }) => {
    const [activeItem, setActiveItem] = useState('my-activity');

    useEffect(() => {
        getCharacter(char_id);
        // eslint-disable-next-line
    },[]);

    const onHandleActiveItem = (e, { name }) => setActiveItem(name);

    const menuItems = (data) => {
        switch (activeItem) {
            case 'my-activity': return <MyActivity character={data} />;
            case 'information': return <Information character={data} />;
            case 'members': return <Members faction_sqlid={data.faction_sqlid} />;
            case 'news': return <News faction_sqlid={data.faction_sqlid} char_id={data.id} />;
            default: return <MyActivity character={data} />;
        }
    }

    return (
        <>
            <Menu pointing secondary>
                <Menu.Item
                    name='my activity'
                    active={activeItem === 'my-activity'}
                    onClick={onHandleActiveItem}
                />
                {leader_sqlid === char_id && (
                    <div>
                        <Menu.Item
                            name='information'
                            active={activeItem === 'information'}
                            onClick={onHandleActiveItem}
                        />
                        <Menu.Item
                            name='members'
                            active={activeItem === 'members'}
                            onClick={onHandleActiveItem}
                        />
                    </div>
                )}
                {faction_rank >= 8 && (
                    <Menu.Item
                        name='news'
                        active={activeItem === 'news'}
                        onClick={onHandleActiveItem}
                    />
                )}
            </Menu>
            {character !== null && !setLoading ? (
                menuItems(character)
            ) : (<Loader isLoading={setLoading} />)}
        </>
    )
}

CharacterFaction.propTypes = {
    getCharacter: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.character
});

export default connect(mapStateToProps, { getCharacter })(CharacterFaction);
