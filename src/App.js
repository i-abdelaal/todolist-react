import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import { v4 as uuidv4 } from 'uuid';
import './App.css';
import axios from 'axios';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}));
  }

  markComplete = (id) => {
   this.setState({todos: this.state.todos.map(i => {
    if (i.id === id){
      i.completed = !i.completed
    }
    console.log(i.completed)
    return i;
   })});
    
  }

  addingTodo = (title) => {
    // const newTodo = {
    //   id:uuidv4(), 
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}));
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(i =>
      i.id !== id)]}));
    
  }
  render() {
      return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addingTodo={this.addingTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      );
  }

}

export default App;
