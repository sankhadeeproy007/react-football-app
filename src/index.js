import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();


import store from './store';

import App from './containers/AppContainer';
import Home from './components/Home';
import Details from './components/Details';

import './styles/css/index.css';

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/details/:leagueID" component={Details}/>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
