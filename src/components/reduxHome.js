import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})
export default class ReduxHome extends Component {
    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets())
    }

    render() {

        const { props: { user, tweets } } = this;

        if (!tweets.length) {
            return <button onClick= {()=>this.fetchTweets()}>load tweets</button>
        }

        const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

        return <div>
        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>
        </div>
    }
}
