import { combineReducers } from 'redux';

import tweets from './tweetsReducer';
import user from './userReducer';
import competitions from './competitionsReducer';

export default combineReducers({
    tweets,
    user,
    competitions
});
