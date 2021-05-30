import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reportWebVitals from './reportWebVitals';
import { routerMiddleware, ConnectedRouter  } from 'connected-react-router'
import reducer from "./reducer";
import { createBrowserHistory } from 'history'
import saga from "./saga";

const history = createBrowserHistory({ basename: '/' })
const sagaMiddleware = createSagaMiddleware();
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  reducer(history),
  composeSetup(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)
sagaMiddleware.run(saga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />

    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
