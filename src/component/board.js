import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Board = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData(); // 초기 데이터 가져오기
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // timestamp를 ISO 형식으로 변환하는 함수
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toISOString();
  };

  return (
    <div>
      <h1>Post List</h1>
      <Link to="/write">작성</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Title:</strong> {post.title} <br />
            <strong>Author:</strong> {post.author} <br />
            <p>Timestamp: {formatTimestamp(post.timestamp)}</p>
            <strong>Content:</strong> {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Board;