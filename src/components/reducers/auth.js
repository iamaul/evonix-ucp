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
    RESET_NEW_PASSWORD_REQUEST,
    RESET_NEW_PASSWORD,
    RESET_NEW_PASSWORD_FAIL,
    VERIFY_RESET_NEW_PASSWORD,
    LOGOUT,
} from '../actions/types';

const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    verify_reset_new_password: null,
    requestRegister: false,
    requestForgotPassword: false,
    requestResetNewPassword: false,
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
                requestRegister: false,
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
        case RESET_NEW_PASSWORD_REQUEST:
            return {
                ...state,
                requestResetNewPassword: true
            }
        case VERIFY_RESET_NEW_PASSWORD:
            return {
                ...state,
                verify_reset_new_password: payload
            }
        case RESET_NEW_PASSWORD:
            return {
                ...state,
                requestResetNewPassword: false
            }
        case RESET_NEW_PASSWORD_FAIL:
            return {
                ...state,
                requestResetNewPassword: false
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