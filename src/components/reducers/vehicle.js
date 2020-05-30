import {
    GET_CHARACTER_VEHICLES,
    GET_CHARACTER_VEHICLES_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    vehicle: null,
    error: {},
    setLoading: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CHARACTER_VEHICLES:
            return {
                ...state,
                vehicle: payload,
                setLoading: false
            }
        case GET_CHARACTER_VEHICLES_FAIL:
            return {
                ...state,
                error: payload,
                setLoading: false
            }
        default: return state;
    }
}