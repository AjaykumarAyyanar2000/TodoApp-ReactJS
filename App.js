import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import {v4 as uuidv4} from'uuid';
import './App.css';
import About from './Components/pages/About';
import Header from './Components/layout/Header';
class App extends Component {
  state = {
    todos : [
      {
        id : uuidv4(),
         title: 'Take out the trash',
         completed: false
      },
      {
        id : uuidv4(),
         title: 'Dinner with Wife',
         completed: false
      },
      {
        id : uuidv4(),
         title: 'Meeting the boss',
         completed: false
      },
    ]
  }
markComplete =(id) => {
  //change the task to completed or not completed
  this.setState({ todos: this.state.todos.map(todo=> {
    if(todo.id === id)
    {
      todo.completed =!todo.completed
    }
    return todo;
  })})

}
delTodo= (id) => {
  this.setState({ todos:[...this.state.todos.filter(todos => todos.id!==id)]});
}
//Add Todo
addTodo=(title)=> {
  const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false
  }
  this.setState({todos: [...this.state.todos, newTodo]});
}
render() {
  
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props=> (
        <React.Fragment>
 <AddTodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
      )} />
   <Route path="/about" component = {About}/>

      </div>
    
    </div>
    </Router>
  );
}
};

export default App;
