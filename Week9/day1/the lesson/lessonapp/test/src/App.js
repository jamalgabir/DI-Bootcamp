import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import React,{ Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
      props_one:'text one',
      props_two:'text two'
    }
  }
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h3>hello</h3>
      </header>
    </div>
  );
  }
  
}

export default App;
