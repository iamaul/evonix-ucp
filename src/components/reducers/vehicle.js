import {
    GET_CHARACTER_VEHICLES
} from '../actions/types';

const INITIAL_STATE = {
    vehicle: null,
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
        default: return state;
    }
}