import { combineReducers } from 'redux';

import competitions from './competitionsReducer';
import teams from './teamsReducer';

export default combineReducers({
    competitions,
    teams
});
