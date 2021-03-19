import { GET_API_SAMP_SERVER, GET_API_SAMP_SERVER_ERROR } from './types';
import api from '../utils/api';

export const getApiSampServer = () => async dispatch => {
    try {
        const res = await api.get('/api/v1/server');
        console.log(res);
        dispatch({ type: GET_API_SAMP_SERVER, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_API_SAMP_SERVER_ERROR });
    }
}