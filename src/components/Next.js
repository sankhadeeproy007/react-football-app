import React, { Component } from 'react';
import { connect } from "react-redux";

import '../styles/css/App.css';

class Home extends Component {

  render() {
    const { props: { count } } = this
    return (
      <div style={{padding: 30}}>
        2nd page Count is: {count}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

export default connect(mapStateToProps)(Home);
