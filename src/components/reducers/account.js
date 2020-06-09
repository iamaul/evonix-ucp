import {
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_EMAIL_SUCCESS,
    CONFIRM_EMAIL_VERIFICATION,
    EMAIL_VERIFICATION_SENT
} from '../actions/types';

const INITIAL_STATE = {
    account_settings: null,
    confirm_email_verification: null,
    verify_email_success: false,
    setLoading: true
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_PASSWORD_SUCCESS:
        case CHANGE_EMAIL_SUCCESS:
            return {
                ...state,
                account_settings: payload,
                setLoading: false
            }
        case EMAIL_VERIFICATION_SENT:
            return {
                ...state,
                verify_email_success: true
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