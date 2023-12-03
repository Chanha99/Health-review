import React, { useEffect, useState } from 'react';
import { getComments } from '../api/api';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(postId).then(data => setComments(data));
  }, [postId]);

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;