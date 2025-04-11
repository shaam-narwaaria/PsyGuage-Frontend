import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MissingNumberGame.css'; // Custom styles

const MissingNumberGame = ({ userName, userEmail }) => {
  const [round, setRound] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [missingNumber, setMissingNumber] = useState(null);
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const roundsPlayed = 5;
  const navigate = useNavigate();

  useEffect(() => {
    if (round < roundsPlayed) {
      generateSequence();
    } else {
      setGameOver(true);
      saveScore(score);
    }
  }, [round]);

  const generateSequence = () => {
    const length = 5 + round;
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const fullSequence = Array.from({ length }, (_, i) => start + i * step);

    const missingIndex = Math.floor(Math.random() * length);
    const newSequence = [...fullSequence];
    setMissingNumber(newSequence[missingIndex]);
    newSequence[missingIndex] = '?';
    setSequence(newSequence);
  };

  const handleGuess = () => {
    const guess = parseInt(userGuess);
    if (isNaN(guess)) {
      alert('Please enter a valid number!');
      return;
    }
    if (guess === missingNumber) {
      setScore((prevScore) => prevScore + 10);
    }
    setUserGuess('');
    setRound((prevRound) => prevRound + 1);
  };

  const saveScore = async (finalScore) => {
    try {
      await axios.post("https://psyguage-backend.onrender.com/api/scores", {
        gameName: "MissingNumber",
        name: userName,
        email: userEmail,
        score: finalScore,
      });
      console.log("Score saved successfully");
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  const resetGame = () => {
    setRound(0);
    setScore(0);
    setGameOver(false);
  };

  const goToMenu = () => {
    navigate("/games");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 missing-bg">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center text-primary mb-4">Missing Number Game</h2>
        
        {!gameOver ? (
          <>
            <div className="mb-3 text-center">
              <h5>Round {round + 1} of {roundsPlayed}</h5>
              <p className="fs-5">Sequence:</p>
              <div className="sequence-box mb-3">{sequence.join("  ")}</div>
            </div>

            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Enter missing number"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
              />
              <button onClick={handleGuess} className="btn btn-success">
                Submit
              </button>
            </div>

            <div className="text-end">
              <strong>Score: {score}</strong>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h4 className="text-success">🎉 Game Over!</h4>
            <p>Your Final Score: <strong>{score}</strong></p>
            <button className="btn btn-outline-primary m-2" onClick={resetGame}>
              Restart Game
            </button>
            <button className="btn btn-outline-secondary m-2" onClick={goToMenu}>
              Back to Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissingNumberGame;
