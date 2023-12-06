import React from 'react';
import Logo from '../img/logo.PNG';
import Test from '../img/test.png';
import { useState } from 'react';
import '../css/mobile.css';
import { useNavigate, BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Menubar from './menubar.js';
import Health from './m_health.js';
import M_Home_postList from './m_home_postlist.js';


function Mobile_Home() {
    return (
      <>
    
    <div id="mobile_page">
    
      
      <Health/>
      <section className="m_left_content">
          <M_Home_postList/>
        </section>
        <div className='m_footer'></div>
        
        
    </div>
  </>
    );
  }
  export default Mobile_Home;
  