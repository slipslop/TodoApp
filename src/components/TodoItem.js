import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {


  //Function that sets the style
  getStyle = () => {

    
      return {
        fontFamily: 'sans-serif',
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 
        'line-through' : 'none'

    }
  }
 
  
  render() {
    //destructuring
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
      <p>                     
                              
      <input type="checkbox" onChange=/*climbing the ladder to Todos.js*/{this.props.markCompleted.bind(this,
        id)} /> {' '}
      
        {title}
        <button style={btnStyle}
         onClick={this.props.deleteTodo.bind(this,id)}>x</button>
        
        </p>
      </div>
    )
  }
}

//proptypes
TodoItem.propTypes = {

  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired


}


const btnStyle = {

  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'

}



export default TodoItem
