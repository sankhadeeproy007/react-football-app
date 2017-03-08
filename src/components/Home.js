import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';

import { increment, increment5, decrement, reset } from "../actions/counterActions";

import '../styles/css/App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    const { props: { count } } = this
    return (
      <div style={{padding: 30}}>
        Count is: {count}
        <br />
        <button onClick={()=> this.props.increment()} style={{margin: 10, padding: 10}}>Increment</button>
        <button onClick={()=> this.props.decrement()} style={{margin: 10, padding: 10}}>Decrement</button>
        <button onClick={()=> this.props.reset()} style={{margin: 10, padding: 10}}>Reset</button>
        <input type="number" value={this.state.value} onChange={this.handleChange} />
        <button onClick={()=> this.props.increment5(this.state.value)} style={{margin: 10, padding: 10}}>Increment by {this.state.value}</button>
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
    increment5: (val)=> dispatch(increment5(val)),
    decrement: ()=> dispatch(decrement()),
    reset: ()=> dispatch(reset())
  };
}



export default connect(mapStateToProps, bindActions)(Home);
