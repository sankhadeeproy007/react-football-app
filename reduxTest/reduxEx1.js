import { createStore } from 'redux';

const reducer = ((state, action) => {
    if (action.type==='INC') {
        return state + action.payload;
    }
    else if (action.type==='DEC') {
        return state - action.payload;
    }
    return state;
})

const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log('Store changed', store.getState())
})

store.dispatch({type: 'INC', payload: 1})
store.dispatch({type: 'INC', payload: 22})
store.dispatch({type: 'DEC', payload: 78})
