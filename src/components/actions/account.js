import Swal from 'sweetalert2';
import {
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_EMAIL_FAIL,
    CHANGE_EMAIL_SUCCESS,
    CHANGE_EMAIL_REQUEST,
    VERIFY_EMAIL_REQUEST,
    EMAIL_VERIFICATION_SENT,
    EMAIL_VERIFICATION_FAIL,
    CONFIRM_EMAIL_VERIFICATION,
    CONFIRM_EMAIL_VERIFICATION_FAIL,
} from './types';
import api from '../utils/api';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end'
});

export const userChangePassword = ({ old_password, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ old_password, password });

    try {
        // REQUEST START
        dispatch({ type: CHANGE_PASSWORD_REQUEST });

        const res = await api.put('/api/v1/users/change/password', body, config);
        dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: res.data });

        Toast.fire({
            icon: 'success',
            text: res.data.msg
        });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.map(err => {
                return Toast.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.msg
                });
            });
        }
        dispatch({ type: CHANGE_PASSWORD_FAIL });
    }
}

export const userChangeEmail = ({ new_email }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ new_email });

    try {
        // REQUEST START
        dispatch({ type: CHANGE_EMAIL_REQUEST });

        const res = await api.put('/api/v1/users/change/email', body, config);
        dispatch({ type: CHANGE_EMAIL_SUCCESS, payload: res.data });
        
        Toast.fire({
            icon: 'success',
            text: res.data.msg
        });
        
        setTimeout(function() {
            window.location.reload();
        }, 3000);
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.map(err => {
                return Toast.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.msg
                });
            });
        }
        dispatch({ type: CHANGE_EMAIL_FAIL });
    }
}

export const userVerifyEmail = () => async dispatch => {
    try {
        // REQUEST START
        dispatch({ type: VERIFY_EMAIL_REQUEST });

        const res = await api.post('/api/v1/users/email/verification');
        dispatch({ type: EMAIL_VERIFICATION_SENT });
        
        Toast.fire({
            icon: 'success',
            text: res.data.msg
        });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.map(err => {
                return Toast.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.msg
                });
            });
        }
        dispatch({ type: EMAIL_VERIFICATION_FAIL });
    }
}

export const userConfirmEmailVerification = (code) => async dispatch => {
    try {
        const res = await api.put(`/api/v1/users/email/verification/${code}`);
        dispatch({ type: CONFIRM_EMAIL_VERIFICATION, payload: res.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.map(err => {
                return Toast.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.msg
                });
            });
        }
        dispatch({ type: CONFIRM_EMAIL_VERIFICATION_FAIL });
    }
}