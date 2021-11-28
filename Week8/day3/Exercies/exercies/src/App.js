import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      favoriteColor:'red'
    }
    this.shootRegular= this.shootRegular.bind(this)
  }
  handleChange=()=>{
    this.setState({favoriteColor:'blue'})
  }
  shootRegular(){
    alert('Keep Shooting!')
  }
  componentDidMount(){
    {setTimeout(()=>this.setState({favoriteColor:'yellow'}),5000)}
  }
  shoot(){
    alert('Great Shot!')
  }
  render(){
    return(
      <div style={{textAlign:'center'}}>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.handleChange}>Click Here to change the color</button><br/>
        Alert 1: 
        <button onClick={this.shoot}>Take the shoot!</button><br/>
        Alert 2: 
        <button onClick={this.shootRegular}>Keep Shooting!</button>
      
      </div>
    )
  }
}



export default App;
