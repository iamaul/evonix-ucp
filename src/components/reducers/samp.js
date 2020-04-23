import { GET_API_SAMP_SERVER } from "../actions/types";

const INITIAL_STATE = {
    server: null,
    setLoading: true,
    error: {}
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_API_SAMP_SERVER:
            return {
                ...state,
                setLoading: false,
                server: payload
            }
        default: return state;
    }
}