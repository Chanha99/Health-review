import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/review_list.css';

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
    <div className='review_main'>
      <h2>운동 목록</h2>
      <div >
      <ul className='review_wrap'>
        {exercises.map((exercise) => (
            <div className='sun'>
          <li key={exercise.id}>
            <div className=''>
            <div className='review_list'>
            <Link to={`/review/${exercise.id}`}><h3>{exercise.name}</h3></Link>
            </div>
            </div>
            
          </li>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ExerciseList;