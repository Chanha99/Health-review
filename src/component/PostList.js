import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './board';

const PostList = ({ onSelectPost }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 게시글 목록을 서버에서 가져와 설정
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onSelectPost(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // 선택한 게시글의 상세 정보를 서버에서 가져와 설정
    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post detail:', error);
      }
    };

    if (postId) {
      fetchPostDetail();
    }
  }, [postId]); // postId가 변경될 때마다 실행

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

const Boardlist = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <div>
      <PostList onSelectPost={(postId) => setSelectedPostId(postId)} />
      <hr />
      {selectedPostId && <PostDetail postId={selectedPostId} />}
    </div>
  );
};

export default Boardlist;