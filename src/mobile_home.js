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
      <div className='m_header'>
        <div className="m_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="m_top_menu">
        <Menubar/>
        </div>
      </div>
      <section className="m_left_content">
          <h3>🕒최신글</h3>
          <div className="m_board_list_wrap">
            <div className="m_board_list">
              <div>
                <div className="m_num">1</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              <div>
                <div className="m_num">2</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              <div>
                <div className="m_num">3</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              <div>
                <div className="m_num">4</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              <div>
                <div className="m_num">5</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              
            </div>
          </div>

          <div className="m_Hotboard_list_wrap">
          <h3>🔥인기글</h3>
            <div className="m_board_list">
              <div>
                <div className="m_num">1</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              <div>
                <div className="m_num">2</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              <div>
                <div className="m_num">3</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              <div>
                <div className="m_num">4</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              <div>
                <div className="m_num">5</div>
                <div className="m_title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="m_writer">김이름</div>
                <div className="m_date">2023.10.3</div>
                <div className="m_count">12</div>
              </div>
              
            </div>
          </div>
        </section>
        
        <Link to="m_login">로그인</Link>
        
    </div>
  </>
    );
  }
  export default Mobile_Home;
  