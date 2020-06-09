import {
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_EMAIL_REQUEST,
    CHANGE_EMAIL_SUCCESS,
    VERIFY_EMAIL_REQUEST,
    CONFIRM_EMAIL_VERIFICATION,
    EMAIL_VERIFICATION_SENT
} from '../actions/types';

const INITIAL_STATE = {
    account_settings: null,
    confirm_email_verification: null,
    verify_email_success: false,
    requestChangePassword: false,
    requestChangeEmail: false,
    requestVerifyEmail: false,
    setLoading: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_PASSWORD_REQUEST:
            return {
                ...state,
                requestChangePassword: true
            }
        case CHANGE_EMAIL_REQUEST:
            return {
                ...state,
                requestChangeEmail: true
            }
        case CHANGE_PASSWORD_SUCCESS:
        case CHANGE_EMAIL_SUCCESS:
            return {
                ...state,
                account_settings: payload,
                setLoading: false,
                requestChangePassword: false,
                requestChangeEmail: false
            }
        case VERIFY_EMAIL_REQUEST:
            return {
                ...state,
                requestVerifyEmail: true
            }
        case EMAIL_VERIFICATION_SENT:
            return {
                ...state,
                verify_email_success: true,
                requestVerifyEmail: false
            }
        case CONFIRM_EMAIL_VERIFICATION:
            return {
                ...state,
                confirm_email_verification: payload,
                setLoading: false
            }
        default: return state;
    }
}