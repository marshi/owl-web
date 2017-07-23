import React from 'react'
import {Form} from "../module/Form/Form";

export default class TicketCreate extends React.Component {

  render() {
    return (
      <Form post={this.props.post}/>
    );
  }

}

