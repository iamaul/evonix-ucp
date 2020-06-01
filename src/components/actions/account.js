import axios from 'axios';
import history from '../history';
import Swal from 'sweetalert2';
import {
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_EMAIL_FAIL,
    CHANGE_EMAIL_SUCCESS,
    EMAIL_VERIFICATION_SENT,
    EMAIL_VERIFICATION_FAIL,
    CONFIRM_EMAIL_VERIFICATION,
    CONFIRM_EMAIL_VERIFICATION_FAIL
} from './types';

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
        const res = await axios.put('/api/v1/users/change/password', body, config);
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
        dispatch({ type: CHANGE_PASSWORD_FAIL, payload: {
            msg: error.response.statusText,
            status: error.response.status
        } });
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
        const res = await axios.put('/api/v1/users/change/email', body, config);
        dispatch({ type: CHANGE_EMAIL_SUCCESS, payload: res.data });
        Toast.fire({
            icon: 'success',
            text: res.data.msg
        });
        setTimeout(function() {
            history.push('/settings');
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
        dispatch({ type: CHANGE_EMAIL_FAIL, payload: {
            msg: error.response.statusText,
            status: error.response.status
        } });
    }
}

export const userVerifyEmail = () => async dispatch => {
    try {
        const res = await axios.post('/api/v1/users/email/verification');
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
        const res = await axios.put(`/api/v1/users/email/verification/${code}`);
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