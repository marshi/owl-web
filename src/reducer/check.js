/**
 * Created by a13178 on 2017/05/04.
 */

export default function check(state = {mark: false}, action) {
  switch (action.type) {
    case "CHECK":
      return Object.assign({}, state, {mark: !state.mark});
    default:
      return state;
  }
}
