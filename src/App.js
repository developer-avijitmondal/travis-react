// import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import React, { Component } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'

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

  //todo complete
  markCompleted = (id) => {
    console.log(id)
    this.setState({
      todos : this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo 
      })
    })
  }

  delTodo = (id) => {
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id !== id )]
    })
  }

  render() {
    console.log(this.state.todos)
    return (

      <div className="App">
      <Header />
      <AddTodo />
        <h1>App</h1>
        <Todos todos = {this.state.todos} 
        markCompleted = { this.markCompleted } delTodo = { this.delTodo }/>
      </div>
    )
  }
}

export default App

