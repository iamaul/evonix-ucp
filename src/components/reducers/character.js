import {
    GET_USER_CHARACTERS,
    CHARACTER_CREATED
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
            return {
                ...state,
                character: payload,
                setLoading: false
            }
        default: return state;
    }
}