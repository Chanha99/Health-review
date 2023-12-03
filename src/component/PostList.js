import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/api';

const PostList = ({ onPostClick }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ cursor: 'pointer' }} onClick={() => onPostClick(post.id)}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;