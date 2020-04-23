import axios from 'axios';

import { GET_API_SAMP_SERVER, API_SAMP_SERVER_ERROR } from './types';

export const getApiSampServer = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get('https://api.samp-servers.net/v2/server/101.50.3.61:7780', config);
        dispatch({ type: GET_API_SAMP_SERVER, payload: res.data });
    } catch (error) {
        dispatch({ type: API_SAMP_SERVER_ERROR, payload: {
            msg: error.response.statusText,
            status: error.response.status
        } });
    }
}