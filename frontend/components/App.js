import React from 'react'

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todos: [
          {
            name: 'Organize Garage',
            id: 1528817077286, // could look different, you could use a timestamp to generate it
            completed: false
          },
          {
            name: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          },
          {
            name: 'Monkey around',
            id: 1528817084359,
            completed: false,
          },
          {
            name: 'Build Project',
            id: 1528817084360,
            completed: false
          }
        ]
    }

  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {
            todos.map(ele => {
              return (<li>{ele.name} { todos.completed?<span>-completed-</span>:<span></span> }</li>)
            })
          }
        </ul>

        <form>
          <input />
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
