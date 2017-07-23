import React, {Component, Children} from "react";
import "./App.css";
import check from "./action/ckeck";
import get from "./action/fetcher";
import post from "./api/post";
import {connect} from "react-redux";

class App extends Component {

  render() {
    console.log("aiueo");
    console.log(this.props);
    return (
      <div>
        {this.props.children && React.cloneElement(
          this.props.children,
          {
            ...this.props
          }
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(get()),
    post: (path, body) => post(path, body)
  }
}

function mapStateToProps(state) {
  return {
    tickets: state.fetchState.tickets
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
