import React from 'react';
import { useEffect  } from 'react';
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
  

  return (
    <>
      <div className='App'>
        
      <Mobile><Mobile_Home/></Mobile>
      <PC><Home/></PC>
        
      </div>
    </>
  );
}

export default App;
