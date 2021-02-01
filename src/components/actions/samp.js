import axios from 'axios';
import { GET_API_SAMP_SERVER, GET_API_SAMP_SERVER_ERROR } from './types';

export const getApiSampServer = () => async dispatch => {
    try {
        const res = await axios.get('https://api.open.mp/server/167.99.65.76:7777');
        dispatch({ type: GET_API_SAMP_SERVER, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_API_SAMP_SERVER_ERROR });
    }
}