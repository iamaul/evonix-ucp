import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import account from './account';
import samp from './samp';

export default combineReducers({
    alert,
    auth,
    account,
    samp
});