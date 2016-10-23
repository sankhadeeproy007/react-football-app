export default function reducer(state={
    table: [],
    fetching: false,
    fetched: false,
    error: null,
    matchday: null
}, action) {

    switch (action.type) {
        case "FETCH_TABLE": {
            return {...state, fetching: true};
        }
        case "FETCH_TABLE_REJECTED": {
            return {...state, fetching: false, error: action.payload};
        }
        case "FETCH_TABLE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                table: action.payload.standing,
                matchday: action.payload.matchday,
            };
        }
        case "FETCH_TABLE_RESET": {
            return {...state, fetched: false};
        }
        default:
            return state;
    }
}
