/**
 * Created by a13178 on 2017/07/12.
 */

import { combineReducers } from 'redux';
import {routerReducer} from "react-router-redux";
import fetch from './fetchList'
import check from './check'

export default combineReducers({
  fetchState: fetch,
  checkState: check,
  routing: routerReducer
});
