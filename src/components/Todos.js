import React, { Component } from 'react'
import TodosItem from './Todositem'

export class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => <TodosItem key={todo.id} todo = {todo}/> )
    }
}

export default Todos
