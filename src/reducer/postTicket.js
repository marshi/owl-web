/**
 * Created by a13178 on 2017/07/22.
 */
import {POST_TICKET} from "../action/post"
import post from "../api/post"

export default function(state={}, action) {
  switch (action.type) {
    case POST_TICKET:
      post();
      return Object.assign(
        {},
        state,
        {tickets: action.tickets}
      );
    default:
      return state;
  }
}
