import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/board.css';
import List from './PostList';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Board = () => {
  
  return (
    <div>
      <List/>
      
    </div>
  );
};

export default Board;