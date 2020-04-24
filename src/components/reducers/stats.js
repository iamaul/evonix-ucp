import {
    COUNT_SERVER_USERS,
    COUNT_SERVER_VEHICLES,
    COUNT_SERVER_PROPERTIES
} from '../actions/types';

const INITIAL_STATE = {
    total_users: null,
    player_vehicles: null,
    player_properties: null,
    setLoading: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case COUNT_SERVER_USERS:
            return {
                ...state,
                setLoading: false,
                total_users: payload
            }
        case COUNT_SERVER_VEHICLES:
            return {
                ...state,
                setLoading: false,
                player_vehicles: payload
            }
        case COUNT_SERVER_PROPERTIES:
            return {
                ...state,
                setLoading: false,
                player_properties: payload
            }
        default: return state;
    }
}