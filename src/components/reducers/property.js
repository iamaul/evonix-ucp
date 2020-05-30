import {
    GET_CHARACTER_PROPERTY,
    GET_CHARACTER_PROPERTY_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    property: null,
    error: {},
    setLoading: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CHARACTER_PROPERTY:
            return {
                ...state,
                property: payload,
                setLoading: false
            }
        case GET_CHARACTER_PROPERTY_FAIL:
            return {
                ...state,
                error: payload,
                setLoading: false
            }
        default: return state;
    }
}