import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
    } else {
        // axios.defaults.headers.common['x-auth-token'] = null;
        delete axios.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    }
}

export default setAuthToken;