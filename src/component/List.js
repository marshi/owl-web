/**
 * Created by a13178 on 2017/05/04.
 */
import React from "react";

export default class List extends React.Component {

  componentWillMount() {
    this.props.fetch();
  }

  render() {
    let tickets = this.props.tickets === undefined ? [] : this.props.tickets;
    return (
      <ul>
        <button onClick={this.props.fetch} value="aiueo" />
        {tickets.map(
          ticket => {
            return (
              <li key={ticket.id}>{ticket.title}</li>
            );
          })}
      </ul>
    );
  }

}

