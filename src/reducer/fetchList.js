import {FETCH} from '../action/fetcher'

export default function (state = {}, action) {
  console.log("reducer");
  console.log(state);
  switch (action.type) {
    case FETCH:
      return Object.assign({}, state, {tickets: action.tickets});
    default:
      return state;
  }
}