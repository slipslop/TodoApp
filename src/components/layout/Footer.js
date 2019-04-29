import React from 'react';
import { Link } from 'react-router-dom';
import About from '../pages/About';
import { directive } from '@babel/types';
import logoLinkedin from 'C:/Users/vilit/Desktop/reactCrashCourse/todoapp/src/components/layout/linkedin.png';
import logoGithub from 'C:/Users/vilit/Desktop/reactCrashCourse/todoapp/src/components/layout/github.png';

//import '../../App.css';

function Footer () {

    return (


        <div>
            <div style = {phantom} />
            <div style = {style}>
            To-do List App <br></br>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            <div style={{padding:'10px'}}> 
            Vili Taka-Anttila 2019
            
           
            
           
           


            </div>
          
            <a href="https://www.linkedin.com/in/vilitakaanttila/" target="_blank" >
            <img src={logoLinkedin}  style={imgLinkedin} alt="Logo"/>
            </a>
            <a href="https://github.com/slipslop" target="_blank">
            <img src={logoGithub} style={imgGithub} alt="Logo"/>
            </a>
            
            
            </div>
            
            
        </div>


        /*<header style={headerStyle}>

        <h1>Todo list</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>*/

    )


}

const style = {
    backgroundColor: '#f8f8f8',
    borderTop: '1px solid #e7e7e7',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '60px',
    width: '100%',
}


export default Footer;

//This is used to make a phantom div, that works as a space between
//main stuff and footer
const phantom = {
    backgroundColor:'',
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '95.6%',
    
}

const linkStyle = {
    padding: '20px',
    fontSize:'20px',
    textDecoration: 'none',
    color:'black',
    
}
const imgLinkedin = {
    position: 'absolute',
    backgroundColor:'',
    width: '85px',
    height: '85px',
    left: '0',
    top:'0',
    marginTop: '8px',
    
}
const imgGithub = {
    
    position:'absolute',
   backgroundColor:'',
   width: '65px',
   height: '65px',
   top:'0',
   marginTop:'20px',
    right:'2.8%',
    
   
}

/*
const testi = {
    position: 'absolute',

    zIndex:'-1',
    
    padding: '20px',
    
    left: '0',
    bottom: '0',
    height: '60px',
    width: '100%',
    
}*/