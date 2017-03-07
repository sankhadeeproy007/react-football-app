import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

import { increment, decrement, reset } from "../actions/counterActions";

import '../styles/css/App.css';

class Home extends Component {

  render() {
    const { props: { count } } = this
    return (
      <div style={{padding: 30}}>
        Count is: {count}
        <br />
        <button onClick={()=> this.props.increment()} style={{margin: 10, padding: 10}}>Increment</button>
        <button onClick={()=> this.props.decrement()} style={{margin: 10, padding: 10}}>Decrement</button>
        <button onClick={()=> this.props.reset()} style={{margin: 10, padding: 10}}>Reset</button>
        <br />
        <Link to="next">next page</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

function bindActions(dispatch) {
  return {
    increment: ()=> dispatch(increment()),
    decrement: ()=> dispatch(decrement()),
    reset: ()=> dispatch(reset())
  };
}



export default connect(mapStateToProps, bindActions)(Home);
