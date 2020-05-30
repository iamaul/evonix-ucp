import axios from 'axios';
import { GET_CHARACTER_VEHICLES, GET_CHARACTER_VEHICLES_FAIL } from './types';

export const getCharacterVehicles = (owner_sqlid) => async dispatch => {
    try {
        const res = await axios.get(`/api/v1/vehicle/${owner_sqlid}`);
        dispatch({ type: GET_CHARACTER_VEHICLES, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_CHARACTER_VEHICLES_FAIL, payload: {
            msg: error.response.statusText,
            status: error.response.status
        } });
    }
}