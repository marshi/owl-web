import fetch from "isomorphic-fetch";

export const FETCH = "FETCH";
function request(json) {
  return {
    type: FETCH,
    tickets: json
  };
}

export const RECIEVE = "RECEIVE";
function receive() {
  return {
    type: RECIEVE
  };
}

export const ERROR = "ERROR";
function error() {
  return {
    type: ERROR
  };
}

export default function get() {
  return function(dispatch) {
    fetch("http://localhost:8080/tickets")
      .then(res => res.json())
      .then(json => {console.log(json); dispatch(request(json))})
      .catch(e => dispatch(error()));
  }
}


