import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' //for routing we need this package

// import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
// import  uuid from 'uuid'
// import {v4 as uuid} from "uuid"; 
import axios from 'axios'


export class App extends Component {

  state = {
    // todos : [
    //   {
    //     id : uuid(),
    //     title : 'Take out the trash',
    //     completed : false
    //   },
    //   {
    //     id : uuid(),
    //     title : 'dinner with wife',
    //     completed : true
    //   },
    //   {
    //     id : uuid(),
    //     title : 'meeting with boss',
    //     completed : false
    //   }
    // ]
    todos : []
  }

  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      .then(res => {
        this.setState({ todos : res.data })
      })
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
    // this.setState({
    //   todos : [...this.state.todos.filter(todo => todo.id !== id )]
    // })
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({
          todos : [...this.state.todos.filter(todo => todo.id !== id )]
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  addTodo = (title) => {
    console.log(title)
    // const newTodo = {
    //   id : uuid(),
    //   title,
    //   completed : false
    // }
    const payLoad = { 
      title,
      completed : false
    };
    axios.post('https://jsonplaceholder.typicode.com/todos', payLoad)
        .then(res => 
          this.setState({
            todos : [...this.state.todos,res.data]
          })
    );
    // this.setState({
    //   todos : [...this.state.todos,newTodo]
    // })
  }

  render() {
    console.log(this.state.todos)
    return (
      <Router>
      <div className="App">
      <Header />
        <Route exact path="/" render ={ props => (
          <React.Fragment>
          <AddTodo addTodo = {this.addTodo}/>
          <h1>App</h1>
          <Todos todos = {this.state.todos} 
          markCompleted = { this.markCompleted } delTodo = { this.delTodo }/>
          </React.Fragment>
        )}>
        </Route>
        <Route path="/about" component={About}></Route>
      </div>
      </Router>
    )
  }
}

export default App

