import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./component/List";
import check from "./action/ckeck"
import get from "./action/fetcher"
import { connect } from "react-redux"

class App extends Component {

  render() {
    const tasks = [{"name": "aiueo"}];
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List tasks={tasks} click={this.props.click} fetch={this.props.fetch} mark={this.props.mark} tickets={this.props.tickets}/>
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
