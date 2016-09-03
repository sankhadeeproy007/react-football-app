import { combineReducers, createStore } from 'redux';

const userReducer = ((state={}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            state = {...state, name: action.payload}
            break;
        }
        case 'CHANGE_AGE': {
            state = {...state, age: action.payload}
            break;
        }
        default:
            return state;
    }
    return state;
})

const goalsReducer = ((state=[], action) => {
    return state;
})

const reducers = combineReducers({
    user: userReducer,
    goals: goalsReducer
})

const store = createStore(reducers)

store.subscribe(() => {
    console.log('Store changed', store.getState())
})

store.dispatch({type: 'CHANGE_NAME', payload: 'Rishi'})
store.dispatch({type: 'CHANGE_AGE', payload: 25})
store.dispatch({type: 'CHANGE_AGE', payload: 26})
