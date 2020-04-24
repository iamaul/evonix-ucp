import axios from 'axios';
import {
    GET_USER_CHARACTERS,
    GET_USER_CHARACTERS_FAIL
} from './types';

export const getCountUserCharacters = () => async dispatch => {
    try {
        const res = await axios.get('/api/v1/characters');
        dispatch({ type: GET_USER_CHARACTERS, payload: res.data });
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            errors.map(err => {
                dispatch({ type: GET_USER_CHARACTERS_FAIL, payload: err.msg })
            });
        }
    }
}
