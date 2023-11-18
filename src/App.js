import React from 'react';
// import { useEffect  } from 'react';
import { Link, Route, Routes, } from 'react-router-dom';
import L_Login from './m_login.js';
import M_Signup from './m_signup.js';
import {useMediaQuery} from 'react-responsive';
import Home from './home';
// import Modal from './login';
import Mobile_Home from './mobile_home';
// import Menubar from './menubar.js';
import NotFound from './test.js';
import Login from './login.js';
import Signup from './signup.js';
import Logo from './img/r_logo.png';

import Leg from './component/leg.js'
import Chest from './component/chest.js'
import Shoulder from './component/shoulder.js'
import Chest1 from './component/chest1.js'



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
       
      <PC>
      <header className='main_header'>
        <div className="logo">
          <Link to="/">
          <img className='r_logo' src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="top_menu">
          
            <Login/> <span>|</span>
            <Signup/> 
        </div>
      </header>
        <div className='header_nav'>
          <div className='inner'>
            <nav>
              <Link to="./board">게시판</Link> |
              <Link to="./review">리뷰</Link> |
              <Link to="./board">게시판</Link> |
              <Link to="./review">리뷰</Link> 
            </nav>
          </div>
        </div>
      <Routes>
            <Route path="/" element={<Home></Home>}> </Route>
            <Route path="/chest" element={<Chest></Chest>}></Route>
            <Route path="/chest1" element={<Chest1></Chest1>}></Route>
            <Route path="/leg" element={<Leg></Leg>}></Route>
            <Route path="/shoulder" element={<Shoulder></Shoulder>}></Route>
            <Route path="*" element={<NotFound />}> </Route>
      </Routes>
      </PC>

      
      
        
        
      </div>
    </>
  );
}

export default App;
