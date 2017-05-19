/**
 * Created by a13178 on 2017/05/04.
 */
import React from "react";

export default class List extends React.Component {
  render() {
    let a = <p>false</p>;
    if (this.props.mark) {
      a = <p>true</p>
    }
    console.log(this.props);
    return (
      <ul>
        <button onClick={this.props.fetch} value="aiueo"/>
        {a}
        {this.props.tickets.map (
          ticket => {
            return (
              <li key={ticket.id}>{ticket.title}
              </li>
            );
          })}
      </ul>
    );
  }

}

