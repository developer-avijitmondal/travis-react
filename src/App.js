import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import React, { Component } from 'react'

export class App extends Component {

  state = {
    todos : [
      {
        id : 1,
        title : 'Take out the trash',
        completed : false
      },
      {
        id : 2,
        title : 'dinner with wife',
        completed : true
      },
      {
        id : 3,
        title : 'meeting with boss',
        completed : false
      }
    ]
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos = {this.state.todos}/>
      </div>
    )
  }
}

export default App

