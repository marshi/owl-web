import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux";
import App from './App';
import './index.css';
import "./normalize.min.css";
import check  from "./reducer/check"

let initial={
  mark: false,
  tickets: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({check}),
  initial,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


