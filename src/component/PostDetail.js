import React, { useEffect, useState } from 'react';
import { getPost } from '../api/api';

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (postId) {
      getPost(postId).then(data => setPost(data));
    }
  }, [postId]);

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;