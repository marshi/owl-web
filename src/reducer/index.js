/**
 * Created by a13178 on 2017/07/12.
 */

import { combineReducers } from 'redux';
import {routerReducer} from "react-router-redux";
import fetch from './fetchList'
import check from './check'
import post from './postTicket'

export default combineReducers({
  fetchState: fetch,
  checkState: check,
  postState: post,
  routing: routerReducer
});
