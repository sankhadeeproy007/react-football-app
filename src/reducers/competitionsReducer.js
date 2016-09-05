export default function reducer(state={
    competitions: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_COMPETITIONS": {
            return {...state, fetching: true};
        }
        case "FETCH_COMPETITIONS_REJECTED": {
            return {...state, fetching: false, error: action.payload};
        }
        case "FETCH_COMPETITIONS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                competitions: action.payload,
            };
        }
        default:
            return state;
    }
}
