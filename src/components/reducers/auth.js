import {
    USER_LOADED,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SENT,
    LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    requestForgotPassword: false,
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
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                requestForgotPassword: true
            }
        case FORGOT_PASSWORD_SENT:
            return {
                ...state,
                forgot_password_send: true,
                requestForgotPassword: false,
            }
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