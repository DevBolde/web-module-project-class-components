import React from 'react'
import Todo from './Todo'
export default class TodoList extends React.Component{
  render(){
    return(
        <ul>
          {
            this.props.todos.map(todos => {
              return (<Todo key={todos.id}todos={todos} handleToggle={this.props.handleToggle}/>)
            })
          }
        </ul>
    )
  }
}
