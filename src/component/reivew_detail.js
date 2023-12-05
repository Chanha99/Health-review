// src/components/ExerciseDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentForm from './commentform';

const ExerciseDetail = () => {
    const { id } = useParams();
    const [exercise, setExercise] = useState(null);
    const [comments, setComments] = useState([]);
    const [averageRate, setAverageRate] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/review/${id}`);
          setExercise(response.data.exercise);
          setComments(response.data.comments);

          // 초기에 평균 점수 설정
          setAverageRate(response.data.averageRate.toFixed(2));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      if (id) {
        fetchData();
      }
    }, [id]);
  
    const handleCommentSubmit = async (commentData) => {
        try {
          const response = await axios.post(`http://localhost:3001/review/${id}/comments`, commentData);
    
          // 댓글 업데이트
          setComments([...comments, response.data]);
    
          // 평균 점수 업데이트
          setAverageRate(calculateAverageRate([...comments, response.data]));
        } catch (error) {
          console.error('Error adding comment:', error);
        }
      };
    
      const calculateAverageRate = (comments) => {
        const totalRate = comments.reduce((sum, comment) => sum + comment.rate, 0);
        const averageRate = totalRate / comments.length || 0;
        return averageRate.toFixed(2); // 소수점 두 자리까지 출력
      };
    
  
    return (
      <div>
        {exercise ? (
          <div>
            <h2>{exercise.name}</h2>
            <p>Description: {exercise.description}</p>
  
            {/* 댓글 목록 표시 */}
            <h3>Comments</h3>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  {comment.username} :{comment.content}  - 점수: {comment.rate}
                </li>
              ))}
            </ul>

            {/* 평균 점수 표시 */}
          <p>Average Rate: {averageRate}</p>
  
            {/* 댓글 작성 폼 */}
            <CommentForm onCommentSubmit={handleCommentSubmit} />
          </div>
        ) : (
          <p>Loading exercise detail...</p>
        )}
      </div>
    );
  };
  
  export default ExerciseDetail;