import React from 'react';

// import Test from './img/test.png';
import Up from './img/up.jpg';
import Down from './img/down.webp';
import './css/r_home.css';

// import Menubar from './menubar.js';
// import L_Login from './m_login.js';
import { Link } from 'react-router-dom';
// import Board from './board.js';
import Test from './test.js';
import Home_postList from './component/home_postlist.js';





function Home() {
  
    return (
      <>
    
    <div id="page">
  
      <main id="container">
     
        <section className="review_content">
          <h1>운동 부위</h1>
          <div className="review">
            <div className="review1">
              <Link to="/chest">
                <h3>상체</h3>
                <img className='review_icon1' alt="상체" src={Up} />
              </Link>

              
            </div>
            <div className="review2">
              <Link to="/leg">
                  <h3>하체</h3> 
                  <img className="review_icon2" alt="하체" src={Down} />
              </Link>
            </div>
          </div>
        </section>
        <Home_postList/>
      </main>
    </div>
    <div className='footer'></div>


    <div>
      
    </div>
    
  </>
    );
  }
  export default Home;
  