import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './game.css'; // Import the CSS file

const Game = () => {
  const [userMove, setUserMove] = useState('');
  const [computerMove, setComputerMove] = useState('');
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const moves = ['rock', 'paper', 'scissors'];

  const sendGameResult = async (userMove, computerMove, result) => {
    try {
      await axios.post('http://localhost:5000/user-input', {
        userId: 1, // Replace with actual user ID if needed
        userMove,
        computerMove,
        result,
      });
    } catch (error) {
      console.error('Error sending game result:', error);
    }
  };

  const handleUserMove = (move) => {
    setUserMove(move);
    const computerMove = moves[Math.floor(Math.random() * moves.length)];
    setComputerMove(computerMove);
    const result = determineWinner(move, computerMove);
    sendGameResult(move, computerMove, result);
  };

  const determineWinner = (userMove, computerMove) => {
    let resultMessage;
    if (userMove === computerMove) {
      resultMessage = 'It\'s a tie!';
    } else if (
      (userMove === 'rock' && computerMove === 'scissors') ||
      (userMove === 'paper' && computerMove === 'rock') ||
      (userMove === 'scissors' && computerMove === 'paper')
    ) {
      resultMessage = 'You win!';
      setUserScore(userScore + 1);
    } else {
      resultMessage = 'You lose!';
      setComputerScore(computerScore + 1);
    }
    setResult(resultMessage);
    return resultMessage;
  };

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      <div>
        <button className="game-button" onClick={() => handleUserMove('rock')}>Rock</button>
        <button className="game-button" onClick={() => handleUserMove('paper')}>Paper</button>
        <button className="game-button" onClick={() => handleUserMove('scissors')}>Scissors</button>
      </div>
      <div>
        <h2>Your Move: {userMove}</h2>
        <h2>Computer's Move: {computerMove}</h2>
        <h2>{result}</h2>
      </div>
      <div className="game-score">
        <div>
          <h2>Score</h2>
          <p>You: {userScore}</p>
          <p>Computer: {computerScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
