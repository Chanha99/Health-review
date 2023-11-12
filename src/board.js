import React from 'react';
import Logo from './img/r_logo.png';
import Test from './img/test.png';
import Up from './img/up.jpg';
import Down from './img/down.webp';
import './css/r_home.css';
import Login from './login.js';
import Signup from './signup.js';
import Menubar from './menubar.js';
import L_Login from './m_login.js';
import { Link, useNavigate, BrowserRouter, Route, Routes, } from 'react-router-dom';

function Board(){
    <section className="down_content">
          <div className='board_hot'><h1>🔥인기글</h1></div>
          <div className="board_list_wrap">
            <div className="board_list">
              <div className="top">
                <div className="num">번호</div>
                <div className="title">제목</div>
                <div className="writer">글쓴이</div>
                <div className="date">작성일</div>
                <div className="count">조회</div>
              </div>
              <div>
                <div className="num">1</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">김이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">2</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">3</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">4</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">5</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">6</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">7</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">8</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">9</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
            </div>
          </div>

          <div className='board_new'><h1>🕒최신글</h1></div>
          <div className="board_list_wrap">
            <div className="board_list">
              <div className="top">
                <div className="num">번호</div>
                <div className="title">제목</div>
                <div className="writer">글쓴이</div>
                <div className="date">작성일</div>
                <div className="count">조회</div>
              </div>
              <div>
                <div className="num">1</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">김이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">2</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">3</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">4</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">5</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">6</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">7</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">8</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
              <div>
                <div className="num">9</div>
                <div className="title">
                  <a href="#">글 제목이 들어갑니다.</a>
                </div>
                <div className="writer">이름</div>
                <div className="date">2023.10.3</div>
                <div className="count">12</div>
              </div>
            </div>
          </div>
        </section>
}

export default Board;