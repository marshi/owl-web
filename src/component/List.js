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
    return (
      <ul>
        {this.props.tasks.map (
          task => {
            return (
              <li key={task.name}>{task.name}
                <button onClick={this.props.click} value="aiueo"/>
                {a}
              </li>
            );
          })}
      </ul>
    );
  }

}

