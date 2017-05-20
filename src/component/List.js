/**
 * Created by a13178 on 2017/05/04.
 */
import React from "react";

export default class List extends React.Component {

  componentDidMount() {
    this.props.fetch()
  }

  render() {
    return (
      <ul>
        <button onClick={this.props.fetch} value="aiueo"/>
        {this.props.tickets.map (
          ticket => {
            return (
              <li key={ticket.id}>{ticket.title}</li>
            );
          })}
      </ul>
    );
  }

}

