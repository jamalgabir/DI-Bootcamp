import logo from './logo.svg';
import './App.css';
import Header from './Component/Headr';
import { Home } from './Component/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {React,useState,useEffect} from 'react';
import { Search } from './Component/Search';
import { Favorit } from './Component/Favorit';
function App() {


  // const [count,setCount] = useState(0);
  // const [data,setData]= useState([]);
  // const key='http://dataservice.accuweather.com/locations/v1/countries?apikey=Eso2qMqQ4F7Vhg5GmaGX7U1cf8AJ2H2Y';

  // useEffect(()=>{
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //   .then(res=>res.json())
  //   .then(data=>{setData(data)})
    

  // },[])
  // console.log(data);
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/favorit' element={<Favorit/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
