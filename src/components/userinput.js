import React from 'react';
import './userinput.css';

const UserInput = ({ onUserMove }) => {
  return (
    <div className="user-input">
      <button onClick={() => onUserMove('Rock')}>Rock</button>
      <button onClick={() => onUserMove('Paper')}>Paper</button>
      <button onClick={() => onUserMove('Scissors')}>Scissors</button>
    </div>
  );
};

export default UserInput;