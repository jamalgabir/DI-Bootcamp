import logo from './logo.svg';
import './App.css';
import Car from './Component/Car';
import { Component } from 'react';
import Phone from './Component/phone';


class App extends Component {
  constructor(){
    super();
    this.state={
          color:'blue'
          
    }
    const carinfo = {
      name: "Ford", 
      model: "Mustang"
    };
  }
  
  render(){
    return (
    <div className="App">
      <Car />
      <hr/>
      <Phone/>
    </div>
  );
  }
  
}

export default App;
