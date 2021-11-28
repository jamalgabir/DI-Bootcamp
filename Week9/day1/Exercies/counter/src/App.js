import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addone,minosone,rest} from './action';
class App extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     count:6
  //   }
  // }

  // add = ()=>{
  //   this.setState({count:this.state.count+1})
  // }
  // minos = () =>{
  //   this.setState({count:this.state.count-1})
  // }




  render(){
    const {count,addone,minosone,rest}=this.props
    return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <div><button onClick={addone}><h2>plus</h2></button>
        <button onClick={minosone}><h2>minus</h2></button></div>
        <button onClick={rest}><h2>rest</h2></button>
        
      </header>
    </div>
  );
  }
  
}
const ma=(state)=>{
  return {
    count:state.count
  }

}
const map=(dispatch)=>{
  return{
    addone:()=>dispatch(addone()),
    minosone:()=>dispatch(minosone()),
    rest:()=>dispatch(rest())
  }
}




export default connect(ma,map)(App);
