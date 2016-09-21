import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import '../styles/css/App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <AppBar
                    title="React Football App"
                    />
                {this.props.children}

            </div>
        );
    }
}

export default App;
