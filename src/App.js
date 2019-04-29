import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

//import uuid from 'uuid';
import './App.css';
import axios from 'axios';
import Footer from './components/layout/Footer';

class App extends Component {
  state = {
    todos : []
  }

componentDidMount(){
  axios.get('http://localhost:3001/todos')
  .then(res => this.setState({todos: res.data}))
}

  //Toggle Complete
  markCompleted = (id) => {
    console.log(id);
    
    if(this.state.completed === false){
      axios.patch(`http://localhost:3001/todos/${id}`, {
        completed:true
      })
      .then(res => this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id ){
          todo.completed = !todo.completed;
        }
        return todo;
      })}))

    }else{
      axios.patch(`http://localhost:3001/todos/${id}`, {
        completed:false
      })
      .then(res => this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id ){
          todo.completed = !todo.completed;
        }
        return todo;
      })}))
    }

  }

  //Delete todo
  deleteTodo = (id) => {

    axios.delete(`http://localhost:3001/todos/${id}`, {
      id
    })
    .then(res => this.setState({todos:
       this.state.todos.filter(todo => {
      return todo.id !== id;
    })}))

    console.log(id);
    
  }
//Post request
addTodo = (title) => {

if(!title){
  return;
}


 axios.post('http://localhost:3001/todos', {
   title,
   completed:false
 })
 .then(res => this.setState({ todos:
   [...this.state.todos, res.data]}))
  }
  


  render (){
    return(
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>

                <Todos todos={this.state.todos} markCompleted={this.markCompleted}
                deleteTodo={this.deleteTodo} />
    
                <AddTodo addTodo = {this.addTodo}/>

              </React.Fragment>
            )} />
            <Route path="/about" component={About}></Route>

            <Footer/>
          </div>
        </div>
        
      </Router>
      
  );

  }
    
    
}

export default App;

