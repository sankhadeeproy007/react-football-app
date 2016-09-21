import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';
import {List, ListItem} from 'material-ui/List';

import { fetchCompetitions } from "../actions/competitionsActions";

import '../styles/css/App.css';

class Home extends Component {

    componentWillMount() {
        this.props.dispatch(fetchCompetitions());
    }

    render() {
        const { props: { competitions } } = this;
        return (
            <div>
                <List>
                    {competitions.slice(1).map((item, i) => {
                        return (<Link to={"/details/"+item.id}>
                        <ListItem key={i}>
                            {item.caption}
                        </ListItem>
                    </Link>);
                    })}
                </List>
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
