import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./component/List";
import check from "./action/ckeck";
import get from "./action/fetcher";
import {connect} from "react-redux";
import TicketCreateForm from "./component/TicketCreateForm";

class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    click: () => dispatch(check()),
    fetch: () => dispatch(get())
  }
}

function mapStateToProps(state) {
  return {
    mark: state.check.mark,
    tickets: state.check.tickets
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
