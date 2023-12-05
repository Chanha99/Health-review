import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // 서버에서 운동 목록을 가져오는 코드
    axios.get('http://localhost:3001/review')
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.error('운동 목록을 불러오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <div>
      <h2>운동 목록</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {/* 운동 상세 페이지로 이동하는 링크 추가 */}
            <Link to={`/review/${exercise.id}`}>{exercise.name}</Link>
          </li>
        ))}
        <p>test</p>
      </ul>
    </div>
  );
};

export default ExerciseList;