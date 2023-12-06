// src/components/PostDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/postdetail.css';

const M_PostDetail = () => {
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

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    return formattedDateString;
  };

  // post 상태가 변경될 때 UI를 갱신
  useEffect(() => {
    console.log('Post updated:', post);
  }, [post]);

  return (
    <div className='m_pd_main'>
      <div className='pd_wrap'>
      <div className='pd_header'>
      <h2 className='m_pd_header'>게시글</h2>
      </div>
      {post ? (
        <div>
          <h3 className='m_pd_title'>{post.title}</h3>
          <p className='m_pd_info'>작성자: {post.author} | 작성 시간: {formatTimestamp(post.timestamp)}</p> 
          
          <p className='m_pd_content'>{post.content}</p>
        </div>
      ) : (
        <p>Loading post detail...</p>
      )}

      <div className='comment-section'>
        <div className='pd_comment'>
        <h3 className='m_pd_comment'>댓글</h3>
        </div>
        {comments.map((comment) => (
          <div key={comment.id} className='comment'>
            <p className='m_pd_comment_new'>{comment.username}: {comment.content}</p>
          </div>
        ))}
        <div className='pd_comment_box'>
          <div className='pd_input'>
          <input
            className='pd_comment_input'
            type="text"
            placeholder="닉네임"
            value={newComment.username}
            onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
          />
          </div>
          <textarea
            className='pd_comment_content'
            placeholder="댓글을 작성하세요"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
          />
          <br/>
          <button className='pd_submit' onClick={addComment}>등록</button>
        </div>
      </div>
      </div>
      <div className='m_footer'></div>
    </div>
  );
};

export default M_PostDetail;
