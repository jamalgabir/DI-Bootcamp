import logo from './logo.svg';
import './App.css';
//import React,{Component} from 'react'
import { View } from './View';
import { Helper } from './Helper';
import React from 'react';


const App =()=> {
  
    return (
    <div className="App">
      <header className="App-header">
        <View />
       <Helper />
      </header>
    </div>
  );
  
  
}

export default App;
