import React from 'react';
import './App.css';
import './home.css';
import './menubar.css';
import { useNavigate, BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from './login.js';
import Signup from './signup.js';

import Home from './home';

function App() {

  return (
    <>
      <div className='App'>
        
      <BrowserRouter>
      <Home/>
          <Routes>
            <Route path={"/home"} element= {<Home/>}></Route>
            <Route path={"/login"} element= {<Login/>}></Route>
            <Route path={"/signup"} element= {<Signup/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
