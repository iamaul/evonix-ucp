import history from '../history';
import Swal from 'sweetalert2';
import {
    USER_LOADED,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_SENT,
    FORGOT_PASSWORD_REQUEST,
    RESET_NEW_PASSWORD,
    RESET_NEW_PASSWORD_FAIL,
    AUTH_ERROR,
    LOGOUT
} from './types';
import api from '../utils/api';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end'
});

export const userLoad = () => async dispatch => {
    try {
        const res = await api.get('/api/v1/auth');
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
        // REQUEST START
        dispatch({ type: REGISTER_REQUEST });

        const res = await api.post('/api/v1/auth/new', body, config);
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
        const res = await api.post('/api/v1/auth', body, config);
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

export const userForgotPassword = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const data = { email };

    try {
        // REQUEST START
        dispatch({ type: FORGOT_PASSWORD_REQUEST });

        const res = await api.post('/api/v1/auth/reset', data, config);
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

export const userResetPassword = (password, code) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const data = { password };

    try {
        const res = await api.put(`/api/v1/auth/reset/${code}`, data, config);
        dispatch({ type: RESET_NEW_PASSWORD });
        
        Toast.fire({
            icon: 'success',
            text: res.data.msg
        });

        setTimeout(function() {
            history.push('/login');
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
        dispatch({ type: RESET_NEW_PASSWORD_FAIL });
    }
}

export const userLogout = () => dispatch => {
    dispatch({ type: LOGOUT });
}