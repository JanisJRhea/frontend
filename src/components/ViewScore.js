/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewScore.css';

const ViewScore = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get('/api/scores');
        setScores(response.data);
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className="view-score">
      <h2>Scores</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>User Score</th>
            <th>Computer Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) => (
            <tr key={score.email}>
              <td>{score.email}</td>
              <td>{score.userScore}</td>
              <td>{score.computerScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewScore;*/
