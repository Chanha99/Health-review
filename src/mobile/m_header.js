import React from 'react';
import Logo from '../img/r_logo.png';
import Test from '../img/test.png';
import { useState } from 'react';
import '../css/mobile.css';
import { useNavigate, BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Menubar from './menubar.js';
import Health from './m_health.js';

function M_header(){
return(
<div className='m_header'>
        <div className="m_logo">
            <Link to='/'>
                <span className='m_logo'>
          <img className='m_r_logo' src={Logo} alt="Logo" />
                </span>
            </Link>
        </div>
        <div className="m_top_menu">
        <Menubar/>
        </div>
      </div>
)
}

export default M_header;
