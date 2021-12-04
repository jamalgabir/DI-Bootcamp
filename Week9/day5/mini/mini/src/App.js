import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Post from './Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Post/> */}
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/:post_id' element={<Post/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

