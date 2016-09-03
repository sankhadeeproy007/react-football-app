import React, { Component } from 'react';
import logo from '../images/Football.png';
import '../styles/css/App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="header-overlay" >
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Football Hub</h2>
                    </div>
                </div>

                {this.props.children}

            </div>
        );
    }
}

export default App;
