import React from 'react';
import './scoredisplay.css';

const ScoreDisplay = ({  userScore, computerScore }) => {
  return (
    
      <div className="score-box">
        <h3>Score</h3>
        <p>User: {userScore}</p>
        <p>Computer: {computerScore}</p>
      
    </div>
  );
};

export default ScoreDisplay;
