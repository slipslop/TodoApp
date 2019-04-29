import React from 'react';
import { Link } from 'react-router-dom';
import About from '../pages/About';

function Header () {

    return (

        <header style={headerStyle}>

        <h1>Todo list</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>

    )


}

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'sans-serif',
    borderRadius: '2%'
}


export default Header;


const linkStyle = {
    padding: '20px',
    fontSize:'20px',
    textDecoration: 'none',
    color:'white',
    
}

