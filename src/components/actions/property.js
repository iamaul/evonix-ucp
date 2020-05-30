import axios from 'axios';
import { GET_CHARACTER_PROPERTY, GET_CHARACTER_PROPERTY_FAIL } from './types';

export const getCharacterProperty = (owner_sqlid) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/property/${owner_sqlid}`);
        dispatch({ type: GET_CHARACTER_PROPERTY, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_PROPERTY_FAIL, payload: {
            msg: error.response.statusText,
            status: error.response.status
        } });
    }
}