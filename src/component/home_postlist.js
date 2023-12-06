// PostList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../css/r_home.css';

const Home_postList = ({ onSelectPost }) => {
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
    <section className="down_content">
          <div className="new_board_list_wrap">
          <div className='board_hot'><h1>🕒최신글</h1></div>
            <div className="board_list">
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
      <div className='h_num'>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          size="large"
          onChange={handlePageChange}
        />
      </Stack>
      </div>
    </div>
    </section>
  );
};

export default Home_postList;