import React from 'react'

export default class App extends React.Component {
  constructor(){
    super();
    this.state ={
      list: ''
    }

  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
        <li>Walk The Dog</li>
        <li>Take out the Trash</li>
        <li>Workout</li>
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
