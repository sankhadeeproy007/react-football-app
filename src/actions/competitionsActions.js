import axios from "axios";

export function fetchCompetitions() {
    return function(dispatch) {
        axios.get('http://api.football-data.org/v1/competitions/?season=2016', {
        headers: {
            'X-Auth-Token' : 'fbaab43fd911448aaedd92e84d466d49'
        }})
        .then((response) => {
            dispatch({type: "FETCH_COMPETITIONS_FULFILLED", payload: response.data});
        })
        .catch((err) => {
            dispatch({type: "FETCH_COMPETITIONS_REJECTED", payload: err});
        });
    };
}
