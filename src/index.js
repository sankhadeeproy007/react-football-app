import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

// import App from './containers/AppContainer';
import Home from './components/Home';
import Next from './components/Next';

import './styles/css/index.css';

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/next" component={Next} />
      </Router>
    </Provider>,
  document.getElementById('root')
);
