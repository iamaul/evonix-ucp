import axios from 'axios';
import Swal from 'sweetalert2';
import {
    USER_LOADED,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_SENT,
    RESET_NEW_PASSWORD,
    RESET_NEW_PASSWORD_FAIL,
    EMAIL_VERIFICATION_SENT,
    EMAIL_VERIFICATION_FAIL,
    CONFIRM_EMAIL_VERIFICATION,
    CONFIRM_EMAIL_VERIFICATION_FAIL,
    AUTH_ERROR,
    LOGOUT
} from './types';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: true
});

export const userLoad = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/auth');
        dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
        dispatch({ type: AUTH_ERROR });
    }
}

export const userRegister = ({ username, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, email, password });

    try {
        const res = await axios.post('/api/v1/auth/new', body, config);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        dispatch(userLoad());
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
        dispatch({ type: REGISTER_FAIL });
    }
}

export const userLogin = ({ usermail, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ usermail, password });

    try {
        const res = await axios.post('/api/v1/auth', body, config);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        dispatch(userLoad());
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
        dispatch({ type: LOGIN_FAIL });
    }
}

export const userVerifyEmail = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/auth/email/verification');
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
        const res = await axios.get(`/api/v1/auth/email/verification/${code}`);
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

export const userForgotPassword = ({ email }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email });

    try {
        const res = await axios.post('/api/v1/auth/reset', body, config);
        dispatch({ type: FORGOT_PASSWORD_SENT });
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
        dispatch({ type: FORGOT_PASSWORD_FAIL });
    }
}

export const userResetPassword = ({ password, code }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ password });

    try {
        const res = await axios.post(`/api/v1/auth/reset/${code}`, body, config);
        dispatch({ type: RESET_NEW_PASSWORD });
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
        dispatch({ type: RESET_NEW_PASSWORD_FAIL });
    }
}

export const userLogout = () => dispatch => {
    dispatch({ type: LOGOUT });
}