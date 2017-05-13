import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux";
import App from './App';
import './index.css';
import check2  from "./reducer/check"
import logger from './middleware/logger'

let initial={
  mark: false
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({check2}),
  initial,
  composeEnhancers(applyMiddleware(logger)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


