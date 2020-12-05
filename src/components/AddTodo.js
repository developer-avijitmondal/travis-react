import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title : ''
    }

    onChange = (e) => this.setState({ title : e.target.value })

    render() {
        return (
            <form style={{ display : "flex" }}>
                <input type="text" name="title" value={this.state.title}
                onChange = {this.onChange}
                placeholder="Add todo" style={{ flex : '10',padding :'5px' }}/>

                <input type="submit" name="submit" 
                value="submit" className="btn" style={{ flex : 1 }}/>
            </form>
        )
    }
}
