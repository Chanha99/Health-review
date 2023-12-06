import '../css/menubar.css';
import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../component/login.js';
import Signup from '../signup.js';




const NavTop = styled.div`
  display: flex;
  justify-content: flex;
  button {
    background: black;
    border: none;
  }
`;

function Menubar(){

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleBar, setToggleBar] = useState(true)

  const toggleChange = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu)
    setToggleBar(!toggleBar)
  }

    return(
      <>
      <BrowserView>
        <aside className="side-bar">
    <section className="side-bar__icon-box">
      <section className="side-bar__icon-1">
        <div />
        <div />
        <div />
      </section>
    </section>
    <ul>
      <li>
        <a href="#">
          <i className="fa-solid fa-cat" /> 게시판
        </a>
        <ul>
          <li>
            <a href="#">text1</a>
          </li>
          <li>
            <a href="#">text2</a>
          </li>
          <li>
            <a href="#">text3</a>
          </li>
          <li>
            <a href="#">text4</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">게시판</a>
        <ul>
          <li>
            <a href="#">text1</a>
          </li>
          <li>
            <a href="#">text2</a>
          </li>
          <li>
            <a href="#">text3</a>
          </li>
          <li>
            <a href="#">text4</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">게시판</a>
        <ul>
          <li>
            <a href="#">text1</a>
          </li>
          <li>
            <a href="#">text2</a>
          </li>
          <li>
            <a href="#">text3</a>
          </li>
          <li>
            <a href="#">text4</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">게시판</a>
        <ul>
          <li>
            <a href="#">text1</a>
          </li>
          <li>
            <a href="#">text2</a>
          </li>
          <li>
            <a href="#">text3</a>
          </li>
          <li>
            <a href="#">text4</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
  </BrowserView>
  
  <MobileView>
  <NavTop className='m_menu'>
          <Button type="primary" onClick={toggleChange} style={{ marginBottom: 16 }}>
            { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
          </Button>
        </NavTop>
        
        { toggleMenu &&
          <Menu
            className='m_menubar'
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
            inlineCollapsed={toggleBar}
            onClick={onMenuClick}
          >
            <Menu.Item key="subs">
            <Link to='/board'>게시판</Link>
            </Menu.Item>
            <Menu.Item key="cs">
            <Link to='/review'>리뷰</Link>
            </Menu.Item>
          </Menu>
        }
        
  </MobileView>
  
  </>
    )
}
export default Menubar;