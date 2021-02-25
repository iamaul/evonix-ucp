import axios from 'axios';
import { GET_API_SAMP_SERVER, GET_API_SAMP_SERVER_ERROR } from './types';

export const getApiSampServer = () => async dispatch => {
    try {
        const res = await axios.get('https://api.open.mp/server/13.212.169.37:7777', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        dispatch({ type: GET_API_SAMP_SERVER, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_API_SAMP_SERVER_ERROR });
    }
}