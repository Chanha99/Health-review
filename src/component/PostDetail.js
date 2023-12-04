// src/components/PostDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); // useParams 훅을 사용하여 URL 파라미터를 가져옴
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ username: '', content: '' });


  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/board/${id}`);
        setPost(response.data);

        // 댓글 가져오기
        const commentsResponse = await axios.get(`http://localhost:3001/board/${id}/comments`);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching post detail:', error);
      }
    };

    if (id) {
      fetchPostDetail();
    }
  }, [id]);

  const addComment = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/board/${id}/comments`, newComment);
      setComments([...comments, response.data]);
      setNewComment({ username: '', content: '' });
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

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

<div>
        <h3>Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.username}: {comment.content}</p>
          </div>
        ))}
        <div>
          <input
            type="text"
            placeholder="Your username"
            value={newComment.username}
            onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
          />
          <textarea
            placeholder="Your comment"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          />
          <button onClick={addComment}>Add Comment</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
