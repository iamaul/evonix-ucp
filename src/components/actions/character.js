import axios from 'axios';
import Swal from 'sweetalert2';
import {
    GET_USER_CHARACTERS,
    GET_USER_CHARACTERS_FAIL,
    CHARACTER_CREATED,
    CHARACTER_CREATED_FAIL,
    SHOW_CHARACTER_DETAIL,
    SHOW_CHARACTER_DETAIL_FAIL
} from './types';

const Toast = Swal.mixin({
    toast: true,
    position: 'center'
});

export const getUserCharacters = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/characters');
        dispatch({ type: GET_USER_CHARACTERS, payload: res.data });
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
        dispatch({ type: GET_USER_CHARACTERS_FAIL });
    }
}

export const createCharacter = ({ firstname, lastname, gender }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ firstname, lastname, gender });

    try {
        const res = await axios.post('/api/v1/characters/new', body, config);
        dispatch({ type: CHARACTER_CREATED, payload: res.data });
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
        dispatch({ type: CHARACTER_CREATED_FAIL });
    }
}

export const showCharacterDetail = charId => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/characters/${charId}`);
        dispatch({ type: SHOW_CHARACTER_DETAIL, payload: res.data });
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
        dispatch({ type: SHOW_CHARACTER_DETAIL_FAIL });
    }       
}