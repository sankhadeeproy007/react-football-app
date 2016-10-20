import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTeams } from "../actions/competitionsActions";

class Details extends Component {

    componentWillMount() {
        this.props.dispatch(fetchTeams(this.props.params.leagueID));
    }

    render() {
        const { props: { teams, name } } = this;
        return(
            <div className="center">
                {name} <br /><br />
                Teams:
                <ul>
                    {teams.map((item) => {
                    return (<li key={item.name+'id'}>
                        {item.name}
                    </li>);
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        teams: state.teams.teams,
        name: state.competitions.competitionName,
    };
}

export default connect(mapStateToProps)(Details);
