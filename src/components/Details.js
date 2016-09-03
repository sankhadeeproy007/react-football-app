import React, { Component } from 'react';
import '../styles/css/App.css';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            competition : [],
            teams: []
        };
        fetch('http://api.football-data.org/v1/competitions/'+this.props.params.leagueID, {
        headers: {
            'X-Auth-Token' : 'fbaab43fd911448aaedd92e84d466d49'
        }})
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                competition: responseJson
            });
        });
        fetch('http://api.football-data.org/v1/competitions/'+this.props.params.leagueID+'/teams', {
        headers: {
            'X-Auth-Token' : 'fbaab43fd911448aaedd92e84d466d49'
        }})
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                teams: responseJson.teams
            });
        });
    }
    render() {
        return(
            <div className="center">
                {this.state.competition.caption} <br /><br />
                Teams:
                <ul>
                    {this.state.teams.map((item) => {
                    return (<li key={item.name+'id'}>
                        {item.name}
                    </li>);
                    })}
                </ul>
            </div>
        );
    }

}
