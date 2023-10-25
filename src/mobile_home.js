import React from 'react';
import Logo from './img/logo.PNG';
import Test from './img/test.png';
import { useState } from 'react';
import './css/mobile.css';
import { useNavigate, BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Menubar from './menubar.js';

function Mobile_Home() {
    return (
      <>
    
    <div id="mobile_page">
      <header className='m_header'>
        <div className="m_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="m_top_menu">
        <Menubar/>
        </div>
      </header>
    </div>
  </>
    );
  }
  export default Mobile_Home;
  