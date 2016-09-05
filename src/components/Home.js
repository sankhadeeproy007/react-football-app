import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

import { fetchCompetitions } from "../actions/competitionsActions";

import '../styles/css/App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            competitions: []
        };
        fetch('http://api.football-data.org/v1/competitions/?season=2016', {
        headers: {
            'X-Auth-Token' : 'fbaab43fd911448aaedd92e84d466d49'
        }})
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                competitions: responseJson
            });
        });
    }

    render() {
        return (
            <div className="center">
                <ul>
                    {this.state.competitions.slice(1).map((item, i) => {
                        return (<li key={i}>
                            <Link to={"/details/"+item.id}>{item.caption}</Link>
                        </li>);
                    })}
                </ul>
            </div>
        );
    }

}
