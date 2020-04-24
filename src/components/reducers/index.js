import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import account from './account';
import samp from './samp';
import serverstats from './serverstats';
import character from './character';

export default combineReducers({
    alert,
    auth,
    account,
    samp,
    serverstats,
    character
});