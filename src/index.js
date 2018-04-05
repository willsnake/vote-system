// @flow
import React from 'react';
import { render } from 'react-dom';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

// Reducers
import appReducers from './redux/reducers';

// Router
import { routerMiddleware } from 'react-router-redux';
import { Router, Route, Switch } from 'react-router-dom';

// Sagas
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import throttle from 'lodash/throttle';

// Views
import { Home, TestView } from './views/';

// Utils
import { loadState, saveState } from './util/localStorage';

// Styles
import 'semantic-ui-css/semantic.min.css';

// Middlewares
import logger from 'redux-logger';

// Initial State
import { initialState } from './redux/initialState';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();

let middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);

const store = createStore(appReducers, initialState, compose(applyMiddleware(...middlewares)));

// Initi Sagas
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={TestView} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
