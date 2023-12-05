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
import Login from './component/login.js';
import Signup from './signup.js';
import Logo from './img/r_logo.png';

import L_header from './component/login_home.js'
import Leg from './component/leg.js'
import Chest from './component/chest.js'
import Shoulder from './component/shoulder.js'
import Chest1 from './component/chest1.js'
import Back from './component/back.js'
import Header from './component/home_header.js'
import { HeartFilled } from '@ant-design/icons';
import Home1 from './component/home1.js';
import Home2 from './component/home2.js';
import Board from './component/board.js';
import Write from './component/write.js';
import PostList from './component/PostList.js';
import PostDetail from './component/PostDetail.js';
import Review from './component/review_list.js';
import Review_detail from './component/reivew_detail.js'





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
      
            <Header/>
      <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/chest" element={<Chest></Chest>}></Route>
            <Route path="/chest1" element={<Chest1></Chest1>}></Route>
            <Route path="/back" element={<Back></Back>}></Route>
            <Route path="/leg" element={<Leg></Leg>}></Route>
            <Route path="/shoulder" element={<Shoulder></Shoulder>}></Route>
            <Route path="/board" element={<Board></Board>}></Route>
            <Route path="/write" element={<Write></Write>}></Route>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/board/:id" element={<PostDetail/>}> </Route>
            <Route path="/review" element={<Review/>}> </Route>
            <Route path="/review/:id" element={<Review_detail/>} />
            <Route path="*" element={<NotFound />}> </Route>
      </Routes>
      </PC>

      
      
        
        
      </div>
    </>
  );
}

export default App;
