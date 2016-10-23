import axios from "axios";

export function fetchCompetitions() {
    return function(dispatch) {
        axios.get('http://api.football-data.org/v1/competitions/?season=2016', {
        headers: {
            'X-Auth-Token' : 'fbaab43fd911448aaedd92e84d466d49'
        }})
        .then((response) => {
            dispatch({type: "FETCH_COMPETITIONS_FULFILLED", payload: response.data});
            dispatch({type: "FETCH_TEAMS_RESET"});
            dispatch({type: "FETCH_TABLE_RESET"});
        })
        .catch((err) => {
            dispatch({type: "FETCH_COMPETITIONS_REJECTED", payload: err});
        });
    };
}

export function setCompetitionName(competitionName) {
    return function(dispatch) {
        dispatch({type: "SET_COMPETION_NAME", payload: competitionName});
    };
}

export function fetchTeams(leagueID) {
    return function(dispatch) {
        axios.get('http://api.football-data.org/v1/competitions/'+leagueID+'/teams', {
        headers: {
            'X-Auth-Token' : 'fbaab43fd911448aaedd92e84d466d49'
        }})
        .then((response) => {
            dispatch({type: "FETCH_TEAMS_FULFILLED", payload: response.data});
        })
        .catch((err) => {
            dispatch({type: "FETCH_TEAMS_REJECTED", payload: err});
        });
    };
}

export function fetchTable(leagueID) {
    return function(dispatch) {
        axios.get('http://api.football-data.org/v1/competitions/'+leagueID+'/leagueTable', {
        headers: {
            'X-Auth-Token' : 'fbaab43fd911448aaedd92e84d466d49'
        }})
        .then((response) => {
            dispatch({type: "FETCH_TABLE_FULFILLED", payload: response.data});
        })
        .catch((err) => {
            dispatch({type: "FETCH_TABLE_REJECTED", payload: err});
        });
    };
}
