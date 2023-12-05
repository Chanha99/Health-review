// src/components/CommentForm.js
import React, { useState } from 'react';
import '../css/review_detail.css';

const CommentForm = ({ onCommentSubmit }) => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');
  const [rate, setRate] = useState(0); // 별점을 0으로 초기화

  const handleSubmit = (e) => {
    e.preventDefault();

    // 댓글 데이터와 별점을 부모 컴포넌트로 전달
    onCommentSubmit({ username, content, rate });

    // 폼 초기화
    setUsername('');
    setContent('');
    setRate(0);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='rd_comment_box'>
        <div className='rd_input'>
      <label>
        <input type="text" className='rd_comment_input' placeholder="닉네임" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
        </div>
      <label>
        <textarea value={content} className='rd_comment_content' placeholder="내용을 입력하세요" onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        <span className='rd_rate'>
        점수:
        </span>
        <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
          <option value={1}>1점</option>
          <option value={2}>2점</option>
          <option value={3}>3점</option>
          <option value={4}>4점</option>
          <option value={5}>5점</option>
        </select>
      </label>
      <br />
      <button className='rd_submit' type="submit">등록</button>
      </div>
      <div className='footer'></div>
    </form>
  );
};

export default CommentForm;
