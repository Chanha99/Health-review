// src/components/CommentForm.js
import React, { useState } from 'react';

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
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Comment:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <label>
        Rate:
        <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
