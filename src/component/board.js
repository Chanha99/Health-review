import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/board.css';


const Board = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData(); // 초기 데이터 가져오기
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts');
      const data = await response.json();

      // DATETIME 값을 ISO 형식으로 변환
      const postsWithISODate = data.map((post) => ({
        ...post,
        timestamp: new Date(post.timestamp).toISOString(),
      }));
      
      setPosts(postsWithISODate);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  
  return (
    <div>
      <h1>게시판</h1>
      <Link to="/write">작성</Link>
      <ul>
        {posts.map((post) => (
          <li className='one' key={post.id}>
            <p>Title: {post.title}</p>
            <p>Author: {post.author}</p>
            <p>Timestamp: {post.timestamp}</p>
            <p>Content: {post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;