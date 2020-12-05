import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                Todo List
            </header>
        )
    }
}

const headerStyle = {
    background : '#333',
    color : '#fff',
    textAlign : 'center',
    padding : '10px'
}
