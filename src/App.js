import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./component/List";
import check from "./action/ckeck"
import { connect } from "react-redux"

class App extends Component {

  render() {
    const tasks = [{"name": "aiueo"}];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List tasks={tasks} click={this.props.click} mark={this.props.mark}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    click: () => dispatch(check())
  };
}

function mapStateToProps(state) {
  return {
    mark: state.check2.mark
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
