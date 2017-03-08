export default function reducer(state={
  count: 6
}, action) {

  switch (action.type) {
    case "INCREMENT": {
      return {...state, count: state.count+1};
    }
    case "INCREMENT_CUSTOM": {
      return {...state, count: state.count+action.payload};
    }
    case "DECREMENT": {
      return {...state, count: state.count-1};
    }
    case "RESET": {
      return {...state, count: 0};
    }
    default:
      return state;
  }
}
