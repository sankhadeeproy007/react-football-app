import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const initialState = {
    fetching: false,
    fetched: false,
    teams: [],
    error: null
}

const reducer = ((state=initialState, action) => {
    if (action.type==='GET_TEAMS_PENDING') {
        return {...state, fetching: true}
    }
    else if (action.type==='GET_TEAMS_FULFILLED') {
        return {...state, fetching: false, fetched: true, teams: action.payload.data}
    }
    else if (action.type==='GET_TEAMS_ERROR') {
        return {...state, fetching: false, error: action.payload}
    }
    return state;
})

const middleware = applyMiddleware(promise(), thunk, logger())

const store = createStore(reducer, middleware)

store.dispatch({
    type: 'GET_TEAMS',
    payload: axios.get('http://api.football-data.org/v1/competitions/?season=2016', {
        headers: {
            'X-Auth-Token' : 'fbaab43fd911448aaedd92e84d466d49'
        }})
})
