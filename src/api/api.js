const BASE_URL = 'http://localhost:3001';

export const getPosts = () => fetch(`${BASE_URL}/posts`).then(response => response.json());
export const getPost = (postId) => fetch(`${BASE_URL}/posts/${postId}`).then(response => response.json());
export const addPost = (post) => fetch(`${BASE_URL}/posts`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
});

export const getComments = (postId) => fetch(`${BASE_URL}/comments/${postId}`).then(response => response.json());
export const addComment = (comment) => fetch(`${BASE_URL}/comments`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(comment),
});