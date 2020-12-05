import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                Todo List
                <br/>
                <Link style={linkStyle} to="/">Home</Link> | 
                <Link style={linkStyle} to="/about">About</Link>
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

const linkStyle = {
    color : '#fff',
    textDecoration : 'none'
}
