import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PostList = ({ onSelectPost }) => {
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

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h2>게시물 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/board/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          size="large"
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default PostList;
