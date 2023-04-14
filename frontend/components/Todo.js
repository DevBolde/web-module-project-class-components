import React from 'react'

export default class Todo extends React.Component{
  handleClick =() => {
    console.log("handle Click")
  }
  render(){
    return (
    <li onclick={this.handleClick}>
      
      {this.props.todos.name} 
      { this.props.todos.completed ? <span>-completed</span>:<span></span>} 
    </li>)
  }
}
