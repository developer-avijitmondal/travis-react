import React, { Component } from 'react'

export class TodosItem extends Component {
    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding : '10px',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
        // if(this.props.todo.completed){
        //    return{
        //     textDecoration : 'line-through'
        //    } 
        // }else{
        //     return {
        //         textDecoration : 'none'
        //     }
        // }
    }

    // markCompleted = (e) => {
    //     console.log(this.props)
    // }

    render() {
        const { id,title } = this.props.todo;
        return (
            <div style={ this.getStyle() } 
            onChange={ this.props.markCompleted.bind(this,id) }>
                <p><input type="checkbox" /> { title }</p>
                <button onClick= {this.props.delTodo.bind(this,id)} style={btnStyles}>x</button>
            </div>
        )
    }

}

const btnStyles = {
    background : 'red',
    float: 'right',
    borderRadius: '50%'
}

export default TodosItem
