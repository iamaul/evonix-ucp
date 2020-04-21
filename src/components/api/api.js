import axios from 'axios';

export default axios.create({ 
    baseURL: 'https://api.evonix-rp.com/v1',
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Authorization',
        'Content-Type': 'application/json'
    } 
});
