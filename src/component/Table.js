import React from 'react'

export default class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: [{name: "name", class: "class"}, {name: "name2"}]}
  }

  render() {
    return (
        <table>
          <tbody>
          {
            this.state.items.map((item, index) => {
              return <Row index={index} item={item}/>
            })
          }
          </tbody>
        </table>
    )
  }

}

class Row extends React.Component {
  render() {
    return (
        <tr key={this.props.index}>
          {
            Object.keys(this.props.item).map((key, index) => {
              return <td key={index}>{this.props.item[key]}</td>
            })
          }
        </tr>
    )
  }
}
