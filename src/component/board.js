import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [editPost, setEditPost] = useState({ id: null, title: '' });

  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleAddPost = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/posts', {
        title: newPost,
      });
      setPosts([...posts, response.data]);
      setNewPost('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const handleEditPost = async () => {
    try {
      await axios.put(`http://localhost:3001/api/posts/${editPost.id}`, {
        title: editPost.title,
      });
      // Update the posts array with the edited post
      setPosts(posts.map(post => (post.id === editPost.id ? editPost : post)));
      setEditPost({ id: null, title: '' });
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:3001/api/posts/${postId}`);
      // Remove the deleted post from the posts array
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h1>게시판</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {editPost.id === post.id ? (
              <div>
                <input
                  type="text"
                  value={editPost.title}
                  onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                />
                <button onClick={handleEditPost}>확인</button>
              </div>
            ) : (
              <div>
                {post.title}
                <button onClick={() => setEditPost({ id: post.id, title: post.title })}>
                  수정
                </button>
                <button onClick={() => handleDeletePost(post.id)}>삭제</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handleAddPost}>추가</button>
      </div>
    </div>
  );
};

export default Board;
