import React, { Component } from 'react'
import TodosItem from './Todositem'

export class Todos extends Component {

    // markCompleted = () => {
    //     console.log('hello')
    // }

    render() {
        return this.props.todos.map((todo) => 
        <TodosItem key={todo.id} todo = {todo} 
        markCompleted = { this.props.markCompleted } delTodo = {this.props.delTodo }/>)
    }
}

export default Todos
