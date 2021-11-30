import logo from './logo.svg';
import './App.css';
import React from 'react'
import UsersList from './Component/usersList';
import SearchBox from './Component/SearchBox';

const App=()=> {
    return (
        <>
        <SearchBox/>
          <UsersList/>
        </>
    );
}

export default App;
