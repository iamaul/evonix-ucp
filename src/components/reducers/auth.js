import {
    USER_LOADED,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SENT,
    FORGOT_PASSWORD_FAIL,
    LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    requestRegister: false,
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
        case REGISTER_REQUEST:
            return {
                ...state,
                requestRegister: true
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
        case FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                requestForgotPassword: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                token: null,
                requestRegister: false,
                isAuthenticated: false,
                setLoading: false,
                user: null
            }
        default: return state;
    }
}