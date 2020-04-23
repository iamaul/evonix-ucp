import { GET_API_SAMP_SERVER, API_SAMP_SERVER_ERROR } from "../actions/types";

const INITIAL_STATE = {
    samp: null,
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
                samp: payload
            }
        case API_SAMP_SERVER_ERROR:
            return {
                ...state,
                error: payload,
                setLoading: false
            }
        default: return state;
    }
}