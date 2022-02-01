import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import Todos from './Todos';
import 'tachyons';

import React,{Component} from 'react';

class App extends Component {
  state={
    todos:[
      {id:1,content:'buy Some Watter from store'},
      {id:2,content:'buy shocolat '}
    ]
  }

  componentDidMount() {
    
    //localStorage.getItem('todos');
   }
  deletlist=(id)=>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !==id
    });
    this.setState({
      todos
    });

  }
  addTodo=(todo)=>{
    todo.id = Math.random();
    let todos =  [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deletlist={this.deletlist}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }











}

export default App;
