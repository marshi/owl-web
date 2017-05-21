import {RECIEVE, FETCH, ERROR} from "../action/fetcher"

export default function check(state = {mark: false, tickets: []}, action) {

  switch (action.type) {
    case "CHECK":
      return Object.assign({}, state, {mark: !state.mark});
    case FETCH:
      return Object.assign({}, state, {
        mark: !state.mark,
        tickets: action.tickets
      });
    case ERROR:
      return Object.assign({}, state, {mark: !state.mark});
    default:
      return state;
  }
}
