import {
    GET_USER_CHARACTERS,
    GET_USER_CHARACTERS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    chars: null,
    count: null,
    setLoading: true,
    error: {}
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_CHARACTERS:
            return {
                ...state,
                setLoading: false,
                chars: payload.result.rows,
                count: payload.result.count
            }
        case GET_USER_CHARACTERS_FAIL:
            return {
                ...state,
                chars: null,
                count: null,
                setLoading: false,
                error: payload
            }
        default: return state;
    }
}