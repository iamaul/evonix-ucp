import axios from 'axios';
import Swal from 'sweetalert2';
import {
    GET_API_SAMP_SERVER,
    USER_LOADED,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_SUCCESS,
    AUTH_ERROR,
    API_SAMP_SERVER_ERROR,
    LOGOUT
} from './types';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end'
});

export const getApiSampServer = () => async dispatch => {
    try {
        const res = await axios.get('https://api.samp-servers.net/v2/server/185.169.134.5:7777');
        dispatch({ type: GET_API_SAMP_SERVER, payload: res.data });
    } catch (error) {
        dispatch({ type: API_SAMP_SERVER_ERROR, payload: {
            msg: error.response.statusText,
            status: error.response.status
        } });
    }
}

export const userLoad = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/auth');
        dispatch({ type: USER_LOADED, payload: res.data });
        dispatch(getApiSampServer());
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

export const userForgotPassword = ({ email }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email });

    try {
        const res = await axios.post('/api/v1/auth/reset', body, config);
        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data });
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
        dispatch({ type: FORGOT_PASSWORD_FAIL, payload: {
            msg: error.response.statusText,
            status: error.response.status
        } });
    }
}

export const userLogout = () => dispatch => {
    dispatch({ type: LOGOUT });
}