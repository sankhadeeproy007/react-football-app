import { combineReducers } from 'redux';

import competitions from './competitionsReducer';
import teams from './teamsReducer';
import table from './tablesReducer';

export default combineReducers({
    competitions,
    teams,
    table
});
