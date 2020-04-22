import axios from 'axios';
import Swal from 'sweetalert2';
import {
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_EMAIL_FAIL,
    CHANGE_EMAIL_SUCCESS
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

export const userChangeEmail = ({ email }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email });

    try {
        const res = await axios.put('/api/v1/users/change/email', body, config);
        dispatch({ type: CHANGE_EMAIL_SUCCESS, payload: res.data });
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
        dispatch({ type: CHANGE_EMAIL_FAIL, payload: {
            msg: error.response.statusText,
            status: error.response.status
        } });
    }
}