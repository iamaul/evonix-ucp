import {
    GET_USER_CHARACTERS,
    GET_CHARACTER_ADMIN_WARNS,
    GET_CHARACTER_VEHICLES,
    GET_CHARACTER_PROPERTY,
    GET_CHARACTER_INVENTORY,
    CHARACTER_CREATED,
    CHARACTER_DELETED,
    GET_CHARACTER_DETAIL,
    GET_CHARACTER_FACTION_MEMBERS
} from '../actions/types';

const INITIAL_STATE = {
    character: null,
    vehicle: null,
    property: null,
    admin_warns: null,
    inventory: null,
    setLoading: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_CHARACTERS:
        case CHARACTER_CREATED:
        case GET_CHARACTER_DETAIL:
        case GET_CHARACTER_FACTION_MEMBERS:
            return {
                ...state,
                character: payload,
                setLoading: false
            }
        case CHARACTER_DELETED:
            return {
                ...state,
                character: state.character.filter(char => char.id !== payload),
                setLoading: false
            }
        case GET_CHARACTER_ADMIN_WARNS:
            return {
                ...state,
                admin_warns: payload,
                setLoading: false
            }
        case GET_CHARACTER_INVENTORY:
            return {
                ...state,
                inventory: payload,
                setLoading: false
            }
        case GET_CHARACTER_VEHICLES:
            return {
                ...state,
                vehicle: payload,
                setLoading: false
            }
        case GET_CHARACTER_PROPERTY:
            return {
                ...state,
                property: payload,
                setLoading: false
            }
        default: return state;
    }
}