import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodo extends Component {

    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({title : e.target.value });
        
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

  render() {
    return (
      <form onSubmit={this.onSumbit} style={{ display: 'flex'}}>

        <input 
        type='text' name="title"
        style = {{ flex: '10', padding:'5px'}}
        placeholder="Add Todo..."
        value ={this.state.title}
        onChange={this.onChange}
        />

        
      <button className="btn" style={{flex:'1'}} onClick={
        
        
        this.onSubmit}>
      submit
      </button>
      </form>
      
    )
  }
}



//proptypes
AddTodo.propTypes = {

  addTodo: PropTypes.func.isRequired,


}



export default AddTodo
