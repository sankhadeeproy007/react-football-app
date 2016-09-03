import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import App from './containers/AppContainer';
import Home from './components/Home';
import Details from './components/Details';

import './styles/css/index.css';

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/details/:leagueID" component={Details}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
