import {
    GET_USER_CHARACTERS,
    CHARACTER_CREATED,
    SHOW_CHARACTER_DETAIL
} from '../actions/types';

const INITIAL_STATE = {
    character: null,
    setLoading: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_CHARACTERS:
        case CHARACTER_CREATED:
        case SHOW_CHARACTER_DETAIL:
            return {
                ...state,
                character: payload,
                setLoading: false
            }
        default: return state;
    }
}