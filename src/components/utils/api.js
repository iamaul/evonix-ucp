import axios from 'axios';
import store from '../store';
import { LOGOUT } from '../actions/types';

const api = axios.create({
    baseURL: 'https://server.evonix-rp.com/',
    headers: {
      'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    res => res,
    err => {
        if (err.response.data.msg === 'Token is invalid!') {
            store.dispatch({ type: LOGOUT });
        }
        return Promise.reject(err);
    }
);
  
export default api;