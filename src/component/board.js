import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/board.css';
import List from './PostList';


const Board = () => {
  
  return (
    <div>
      <h1>게시판</h1>
      <Link to="/write">작성</Link>
      <List/>
    </div>
  );
};

export default Board;