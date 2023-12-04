import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/write.css';

const PostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 현재 시간을 ISO 형식으로 가져오기
      const timestamp = new Date().toISOString();

      const response = await axios.post('http://localhost:3001/board', {
        title,
        author,
        content,
        timestamp,
      });

      if (onPostCreated) {
        onPostCreated(response.data);
      }

      // 폼 초기화
      setTitle('');
      setAuthor('');
      setContent('');

      // 새로 작성한 글로 이동
      navigate('/board');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className='main_write'>
      <h2>게시글 작성</h2>
      <div className='write_wrap'>
      <form onSubmit={handleSubmit}>
        <div className='nick_line_write'>
        <label className='nickname_write'>
          <input type="text" placeholder='닉네임' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        </div>
       
        <div className='title_line_write'>
        <label className='title_write'>
          <input type="text" placeholder='제목을 입력해주세요' value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        </div>
       
        <div className='line_write'>
        <label className='content_write'>
          <textarea placeholder='내용을 입력해주세요' value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
      
        </div>
        <button className='submit_write' type="submit">등록</button>
      </form>
      </div>
    </div>
  );
};

export default PostForm;
