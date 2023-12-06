// PostList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../css/postlist.css';

const M_PostList = ({ onSelectPost }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/board?page=${currentPage}`);
        setPosts(response.data);

        // Get the total pages from the 'X-Total-Count' header
        const totalCountHeader = response.headers['x-total-count'];
        const calculatedTotalPages = Math.ceil(totalCountHeader / 10); // Assuming pageSize is 10
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    return formattedDateString;
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='m_board_main'>
      <h2>게시물 목록</h2>
      <div className='board_list_1'>
        <div className="top">
          <div className="title">제목</div>
          <div className="writer">글쓴이</div>
          <div className="date">작성일</div>
        </div>
        <ul>
          {posts.map((post) => (
            <li className='posts' key={post.id}>
              <div className="title">
                <Link to={`/board/${post.id}`}>{post.title}</Link>
              </div>
              <div className="writer">{post.author}</div>
              <div className="date">{formatTimestamp(post.timestamp)}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className='m_num'>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          size="large"
          onChange={handlePageChange}
        />
      </Stack>

      <div className='m_write'>
      <Stack direction="row" spacing={2}>
      <Link to="/write">
      <Button variant="contained" href="#contained-buttons">
        글 작성
      </Button>
      </Link>
    </Stack>
      </div>
      </div>
    </div>
  );
};

export default M_PostList;
