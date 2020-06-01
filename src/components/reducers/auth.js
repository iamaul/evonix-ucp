import {
    USER_LOADED,
    // REGISTER_FAIL,
    REGISTER_SUCCESS,
    // LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    FORGOT_PASSWORD_SENT,
    LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    forgot_password_send: false,
    setLoading: true,
    error: {}
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
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
        case FORGOT_PASSWORD_SENT:
            return {
                ...state,
                forgot_password_send: true,
                setLoading: false
            }
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