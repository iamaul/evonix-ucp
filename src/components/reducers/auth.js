import {
    GET_API_SAMP_SERVER,
    USER_LOADED,
    // REGISTER_FAIL,
    REGISTER_SUCCESS,
    // LOGIN_FAIL,
    LOGIN_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_SUCCESS,
    AUTH_ERROR,
    // API_SAMP_SERVER_ERROR,
    LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
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
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                setLoading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                setLoading: false,
                user: payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                setLoading: false,
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                ...payload,
                setLoading: false
            }
        case FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                error: payload,
                setLoading: false
            }
        // case API_SAMP_SERVER_ERROR:
        //     return {
        //         ...state,
        //         error: payload,
        //         setLoading: false
        //     }
        // case REGISTER_FAIL:
        // case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                setLoading: false,
                user: null
            }
        default: return state;
    }
}