import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Scroll from './Scroll'
//import My from './component/ListCars';
import CardList from './component/CardList';
//import { render } from 'react-dom';
import SearchBox from './component/Box';


// const App = () =>{
//   return (
//     <>
//     <h1 className="tc">listCars</h1>
//     <My />
//     </>
//   )
// }
class App extends React.Component  {
  constructor(){
    super();
    this.state={
      arr:[],
      searchText:''
    }
   
  }
  handleChang = (e) => {
    this.setState({searchText:e.target.value});
  }
  render() {
      console.log('render')
      const {arr,searchText}= this.state;
      const filterarr = arr.filter(item=>{
        return item.name.toLowerCase().includes(searchText.toLowerCase())
      });
      //console.log('arr',arr);

      
      return (
        <div className="tc">
          <h2>in the listCars</h2>
          {/* <My /> */}
          <SearchBox onSearch={this.handleChange}/>
          <Scroll>
            <CardList  arr_robot={filterarr}/>
          </Scroll>
          
        </div>
      );
  }
  componentDidUpdate(){
    console.log('componenetDidUpdat');
  }
  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>{
      //console.log(users)
      this.setState({arr:users})
    })
    .catch(e=>{
      console.log(e)
    })

  }



}




export default App;
