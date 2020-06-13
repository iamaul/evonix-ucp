import Swal from 'sweetalert2';
import {
    GET_USER_CHARACTERS,
    GET_USER_CHARACTERS_FAIL,
    GET_CHARACTER_ADMIN_WARNS,
    GET_CHARACTER_ADMIN_WARNS_FAIL,
    GET_CHARACTER_INVENTORY,
    GET_CHARACTER_INVENTORY_FAIL,
    GET_CHARACTER_VEHICLES,
    GET_CHARACTER_VEHICLES_FAIL,
    GET_CHARACTER_PROPERTY,
    GET_CHARACTER_PROPERTY_FAIL,
    GET_CHARACTER_BIZZ,
    GET_CHARACTER_BIZZ_FAIL,
    REQUEST_CREATE_CHARACTER,
    CHARACTER_CREATED,
    CHARACTER_CREATED_FAIL,
    CHARACTER_DELETED,
    CHARACTER_DELETED_FAIL,
    GET_CHARACTER_DETAIL,
    GET_CHARACTER_DETAIL_FAIL,
    GET_CHARACTER_FACTION_MEMBERS,
    GET_CHARACTER_FACTION_MEMBERS_FAIL
} from './types';
import api from '../api/api';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end'
});

export const getUserCharacters = () => async dispatch => {
    try {
        const res = await api.get('characters');
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
        // REQUEST START
        dispatch({ type: REQUEST_CREATE_CHARACTER });

        const res = await api.post('characters/new', body, config);
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

export const getCharacter = (id) => async dispatch => {
    try {
        const res = await api.get(`characters/${id}`);
        dispatch({ type: GET_CHARACTER_DETAIL, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_DETAIL_FAIL });
    }
}

export const deleteCharacter = (id) => async dispatch => {
    try {
        const res = await api.delete(`characters/${id}`);
        dispatch({ type: CHARACTER_DELETED, payload: res.data });
        Toast.fire({
            icon: 'success',
            text: 'Deleted character successfully.'
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
        dispatch({ type: CHARACTER_DELETED_FAIL });
    }
}

export const getCharacterFactionMembers = (faction_sqlid) => async dispatch => {
    try {
        const res = await api.get(`characters/faction/${faction_sqlid}`);
        dispatch({ type: GET_CHARACTER_FACTION_MEMBERS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_FACTION_MEMBERS_FAIL });
    }
}

export const getCharacterAdminWarns = (char_id) => async dispatch => {
    try {
        const res = await api.get(`characters/${char_id}/admin_warn`);
        dispatch({ type: GET_CHARACTER_ADMIN_WARNS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_ADMIN_WARNS_FAIL });
    }
}

export const getCharacterInventory = (char_id) => async dispatch => {
    try {
        const res = await api.get(`characters/${char_id}/inventory`);
        dispatch({ type: GET_CHARACTER_INVENTORY, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_INVENTORY_FAIL });
    }
}

export const getCharacterVehicles = (owner_sqlid) => async dispatch => {
    try {
        const res = await api.get(`characters/${owner_sqlid}/vehicle`);
        dispatch({ type: GET_CHARACTER_VEHICLES, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_VEHICLES_FAIL });
    }
}

export const getCharacterProperty = (owner_sqlid) => async dispatch => {
    try {
        const res = await api.get(`characters/${owner_sqlid}/property`);
        dispatch({ type: GET_CHARACTER_PROPERTY, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_PROPERTY_FAIL });
    }
}

export const getCharacterBizz = (owner_sqlid) => async dispatch => {
    try {
        const res = await api.get(`characters/${owner_sqlid}/bizz`);
        dispatch({ type: GET_CHARACTER_BIZZ, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_BIZZ_FAIL });
    }
}