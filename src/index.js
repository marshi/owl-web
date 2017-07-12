import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import "./index.css";
import "./normalize.min.css";
import {routerMiddleware, syncHistoryWithStore} from "react-router-redux";
import {browserHistory, Router} from "react-router/lib";
import routes from "./routes";
import rootReducer from "./reducer";

const initial = { };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initial,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory))),
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);


