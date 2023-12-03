import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Title:</strong> {post.title} <br />
            <strong>Author:</strong> {post.author} <br />
            <strong>Timestamp:</strong> {post.timestamp} <br />
            <strong>Content:</strong> {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;