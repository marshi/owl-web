import * as React from "react";
import logo from "../logo.svg";
import {Link} from "react-router";

export default class Index extends React.Component{

  render() {
    return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Link to="/tickets/create">作成</Link>
    </div>
    );
  }


}