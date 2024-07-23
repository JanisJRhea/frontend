import React from 'react';
import { Link } from 'react-router-dom'; 
import'./Home.css';
const Home = () => (
    <div className="home">
      <div className="home-container"></div>
      <h1>Welcome to Rock, Paper, Scissors Game</h1>
      <img src="/image/front.png" alt="Rock Paper Scissors" className="home-image" />
      <p>LET'S PLAY AGAINST AI!</p>
      <ul>
        <li>Rock beats Scissors</li>
        <li>Scissors beats Paper</li>
        <li>Paper beats Rock</li>
      </ul>
      {/* <p>Click "Play Game" to start playing and test your luck!</p> */}
      <Link to="/game" className="play-button">Play Game</Link>
    </div>
);
 export default Home;