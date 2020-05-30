import {
    GET_CHARACTER_PROPERTY
} from '../actions/types';

const INITIAL_STATE = {
    property: null,
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
        default: return state;
    }
}