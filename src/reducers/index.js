import { combineReducers } from 'redux';

import competitions from './competitionsReducer';
import teams from './teamsReducer';
import table from './tablesReducer';
import fixtures from './fixtureReducer';

export default combineReducers({
    competitions,
    teams,
    table,
    fixtures
});
