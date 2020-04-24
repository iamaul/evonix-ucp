import { GET_API_SAMP_SERVER } from "../actions/types";

const INITIAL_STATE = {
    server: null,
    sampLoader: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_API_SAMP_SERVER:
            return {
                ...state,
                sampLoader: false,
                server: payload
            }
        default: return state;
    }
}