import thunk from 'redux-thunk'

function fetchTicketList(order) {
  return dispatch => {
    dispatch(requestTicketList(order))
    return
  }
}

function requestTicketList(order) {
  return {
    type: "TICKETS"
  }
}