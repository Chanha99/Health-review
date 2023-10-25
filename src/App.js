import React from 'react';
import { useEffect  } from 'react';
import './css/App.css';
import './css/home.css';
import './css/menubar.css';
import { useNavigate, BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from './login.js';
import Signup from './signup.js';
import {useMediaQuery} from 'react-responsive';
import Home from './home';
import Modal from './login';
import Mobile_Home from './mobile_home';


function App() {
  const PC = ({children}) => {
    const isPc = useMediaQuery({
      query : "(min-width:769px)"
    });
    return <>{isPc && children}</>
  }
  const Mobile = ({children}) => {
    const isMobile = useMediaQuery({
      query : "(max-width:768px)"
    });
    
    return <>{isMobile && children}</>
  }

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  

  return (
    <>
      <div className='App'>
        
      <BrowserRouter>
      <Mobile><Mobile_Home/></Mobile>
      <PC><Home/></PC>
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
