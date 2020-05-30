import axios from 'axios';
import Swal from 'sweetalert2';
import {
    GET_USER_CHARACTERS,
    GET_USER_CHARACTERS_FAIL,
    GET_CHARACTER_ADMIN_WARNS,
    GET_CHARACTER_ADMIN_WARNS_FAIL,
    GET_CHARACTER_VEHICLES,
    GET_CHARACTER_VEHICLES_FAIL,
    GET_CHARACTER_PROPERTY,
    GET_CHARACTER_PROPERTY_FAIL,
    CHARACTER_CREATED,
    CHARACTER_CREATED_FAIL
} from './types';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end'
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
        Toast.fire({
            icon: 'success',
            text: 'You have successfully created a character.'
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
        dispatch({ type: CHARACTER_CREATED_FAIL });
    }
}

export const getCharacterAdminWarns = (char_id) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/characters/${char_id}/admin_warn`);
        dispatch({ type: GET_CHARACTER_ADMIN_WARNS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_ADMIN_WARNS_FAIL });
    }
}

export const getCharacterVehicles = (owner_sqlid) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/characters/${owner_sqlid}/vehicle`);
        dispatch({ type: GET_CHARACTER_VEHICLES, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_VEHICLES_FAIL });
    }
}

export const getCharacterProperty = (owner_sqlid) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/characters/${owner_sqlid}/property`);
        dispatch({ type: GET_CHARACTER_PROPERTY, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_PROPERTY_FAIL });
    }
}