import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
    

    render(){
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markCompleted = {this.props.markCompleted}
            deleteTodo = {this.props.deleteTodo} />
        ));
    }
  
}

//proptypes
Todos.propTypes = {

    todos: PropTypes.array.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,

}

export default Todos;
