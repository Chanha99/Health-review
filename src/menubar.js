import React from "react";
import './menubar.css';

function Menubar(){
    return(
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
    )
}
export default Menubar;