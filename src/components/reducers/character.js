import {
    GET_USER_CHARACTERS,
    GET_CHARACTER_ADMIN_WARNS,
    GET_CHARACTER_VEHICLES,
    GET_CHARACTER_PROPERTY,
    CHARACTER_CREATED
} from '../actions/types';

const INITIAL_STATE = {
    character: null,
    vehicle: null,
    property: null,
    admin_warns: null,
    setLoading: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_CHARACTERS:
        case CHARACTER_CREATED:
            return {
                ...state,
                character: payload,
                setLoading: false
            }
        case GET_CHARACTER_ADMIN_WARNS:
            return {
                ...state,
                admin_warns: payload,
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