import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import account from './account';
import samp from './samp';
import stats from './stats';
import quiz from './quiz';
import character from './character';

export default combineReducers({
    alert,
    auth,
    account,
    samp,
    stats,
    quiz,
    character
});