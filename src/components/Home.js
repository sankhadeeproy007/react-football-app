import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchCompetitions } from "../actions/competitionsActions";

import '../styles/css/App.css';

class Home extends Component {

    componentWillMount() {
        this.props.dispatch(fetchCompetitions());
    }

    render() {
        const { props: { competitions } } = this;
        return (
            <div className="center">
            <RaisedButton label="Default" />
                <ul>
                    {competitions.slice(1).map((item, i) => {
                        return (<li key={i}>
                            <Link to={"/details/"+item.id}>{item.caption}</Link>
                        </li>);
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        competitions: state.competitions.competitions,
    };
}

export default connect(mapStateToProps)(Home);
