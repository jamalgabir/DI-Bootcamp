import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import movieList from './Component/movieList';
import movieDetails from './movieDetails';

class App extends Component{
  render(){
    return (
      <div className="App">
      <h1>Redux Movies</h1>
      <div className="container">
        <movieList />
        <movieDetails />
      </div>
    </div>
  );
  }
  
}

export default App;
