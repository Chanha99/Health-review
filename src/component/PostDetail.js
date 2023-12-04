// src/components/PostDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); // useParams 훅을 사용하여 URL 파라미터를 가져옴
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/board/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post detail:', error);
      }
    };

    if (id) {
      fetchPostDetail();
    }
  }, [id]);

  // post 상태가 변경될 때 UI를 갱신
  useEffect(() => {
    console.log('Post updated:', post);
  }, [post]);

  return (
    <div>
      <h2>Post Detail</h2>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>Author: {post.author}</p>
          <p>Timestamp: {post.timestamp}</p>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>Loading post detail...</p>
      )}
    </div>
  );
};

export default PostDetail;
