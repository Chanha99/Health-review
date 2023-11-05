import React from 'react';
import Logo from './img/logo.PNG';
import Test from './img/test.png';
import './css/home.css';
import Login from './login.js';
import Signup from './signup.js';
import Menubar from './menubar.js';

function Home() {
    return (
      <>
    <Menubar/>
    <div id="page">
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="top_menu">
            <Login/> <span>|</span>
            <Signup/>
        </div>
      </header>
      <main id="container">
        <section className="right_content">
          <h3>운동 종류</h3>
          <div className="review">
            <div className="review1">
              <a href="#">
                가슴 <br />
                <img className="review_icon" src={Test} />
              </a>
              <br />
            </div>
            <div className="review2">
              <a href="#">
                어깨 <br />
                <img className="review_icon" src={Test} />
              </a>
              <br />
            </div>
            <div className="review3">
              <a href="#">
                등 <br />
                <img className="review_icon" src={Test} />
              </a>
              <br />
            </div>
            <div className="review4">
              <a href="#">
                배<br />
                <img className="review_icon" src={Test} />
              </a>
              <br />
            </div>
            <div className="review5">
              <a href="#">
                하체
                <br />
                <img className="review_icon" src={Test} />
              </a>
              <br />
            </div>
          </div>
        </section>
        <section className="left_content">
          <h3>게시판</h3>
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
      </main>
    </div>
  </>
    );
  }
  export default Home;
  