import {
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_EMAIL_FAIL,
    CHANGE_EMAIL_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    account_settings: null,
    setLoading: true,
    error: {}
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
        case CHANGE_PASSWORD_FAIL:
        case CHANGE_EMAIL_FAIL:
            return {
                ...state,
                error: payload,
                setLoading: false
            }
        default: return state;
    }
}