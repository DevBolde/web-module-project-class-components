import React from 'react'

export default class Todo extends React.Component{
  handleClick =() => {
    this.props.handleToggle(this.props.todos.id);
  }
  render(){
    return (
    <li onClick={this.handleClick}>
      {this.props.todos.name} 
      { this.props.todos.completed ? <span>-completed</span>:<span></span>} 
    </li>)
  }
}
