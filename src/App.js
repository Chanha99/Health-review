import React from 'react';
import { useEffect  } from 'react';
import { Link, useNavigate, BrowserRouter, Route, Routes, } from 'react-router-dom';
import L_Login from './m_login.js';
import M_Signup from './m_signup.js';
import {useMediaQuery} from 'react-responsive';
import Home from './home';
import Modal from './login';
import Mobile_Home from './mobile_home';
import Menubar from './menubar.js';
import NotFound from './test.js';

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
        
      <Mobile>
        <Routes>
         <Route path="/" element={<Mobile_Home/>} />
         <Route path="/#/m_login" element={<L_Login/>} />
         <Route path="/m_signup" element={<M_Signup/>} />
         <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Link to="/m_login">로그인</Link>
       </Mobile>
       
      <PC><Home/></PC>
      
        
        
      </div>
    </>
  );
}

export default App;
