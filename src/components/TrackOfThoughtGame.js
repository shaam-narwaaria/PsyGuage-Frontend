import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TrackOfThoughtGame.css";

const TrackOfThoughtGame = ({ userName, userEmail, setmovePages }) => {
  const [balls, setBalls] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [ballTracks, setBallTracks] = useState({});
  const [gameInProgress, setGameInProgress] = useState(false);
  const [ballCount, setBallCount] = useState(0);
  const BALLS_PER_GAME = 10;

  const colors = ["red", "blue", "green", "yellow"];
  const sources = [50, 150, 250, 350];
  const destinations = {
    red: 50,
    blue: 150,
    green: 250,
    yellow: 350
  };

  const generateBall = () => {
    const id = Math.random().toString(36).substr(2, 9);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = sources[Math.floor(Math.random() * sources.length)];
    const ball = {
      id,
      color,
      top: 70,
      left,
      moving: true
    };
    setBalls((prev) => [...prev, ball]);
    setBallTracks((prev) => ({
      ...prev,
      [id]: { track: color, left }
    }));
    setBallCount((prev) => prev + 1);
  };

  const moveBall = (id, dir) => {
    if (!gameInProgress) return;
    setBallTracks((prev) => {
      const currentLeft = prev[id].left;
      const newLeft = dir === "left"
        ? Math.max(currentLeft - 100, 50)
        : Math.min(currentLeft + 100, 350);
      const newTrack = colors[(newLeft - 50) / 100];
      return {
        ...prev,
        [id]: { track: newTrack, left: newLeft }
      };
    });
  };

  const updateBallPositions = () => {
    setBalls((prevBalls) =>
      prevBalls
        .map((ball) => {
          const newTop = ball.top + 1;
          if (newTop >= 400) {
            const correctTrack = destinations[ball.color];
            const userTrack = ballTracks[ball.id]?.left;
            if (userTrack === correctTrack) {
              setScore((s) => s + 10);
              setMessage("✔ Correct!");
            } else {
              setMessage("✘ Incorrect!");
            }
            return null; // remove ball
          }
          return { ...ball, top: newTop };
        })
        .filter(Boolean)
    );
  };

  const startGame = () => {
    setBalls([]);
    setScore(0);
    setMessage("");
    setBallCount(0);
    setGameOver(false);
    setGameInProgress(true);
  };

  const endGame = () => {
    setGameInProgress(false);
    setGameOver(true);
    saveScore(score);
    setMessage(`🎉 Game Over! Final Score: ${score}`);
  };

  const saveScore = async (finalScore) => {
    try {
      await axios.post("https://psyguage-backend.onrender.com/api/scores", {
        gameName: "Track of Thought",
        name: userName,
        email: userEmail,
        score: finalScore
      });
    } catch (error) {
      console.error("Error saving score", error);
    }
  };

  useEffect(() => {
    let genInterval, moveInterval;
    if (gameInProgress) {
      genInterval = setInterval(() => {
        if (ballCount < BALLS_PER_GAME) generateBall();
      }, 1200);
      moveInterval = setInterval(updateBallPositions, 50);
    }

    return () => {
      clearInterval(genInterval);
      clearInterval(moveInterval);
    };
  }, [gameInProgress, ballCount]);

  useEffect(() => {
    if (ballCount === BALLS_PER_GAME && balls.length === 0 && gameInProgress) {
      endGame();
    }
  }, [balls, ballCount, gameInProgress]);

  return (
    <div className="game-container container-fluid p-3">
      <div className="text-center mb-3">
        <h4 className="fw-bold">Track of Thought</h4>
        <p className="text-primary">{message}</p>
        <h5>Score: {score}</h5>
      </div>

      <div className="game-board position-relative mx-auto">
        {sources.map((left, i) => (
          <div key={i} className="track-start" style={{ left }}>Start</div>
        ))}

        {Object.entries(destinations).map(([color, left]) => (
          <div key={color} className="track-end" style={{ left, backgroundColor: color }}>
            {color}
          </div>
        ))}

        {balls.map((ball) => (
          <div
            key={ball.id}
            className="ball"
            style={{
              top: ball.top,
              left: ballTracks[ball.id]?.left || ball.left,
              backgroundColor: ball.color
            }}
          >
            <div className="controls">
              <button onClick={() => moveBall(ball.id, "left")}>&larr;</button>
              <button onClick={() => moveBall(ball.id, "right")}>&rarr;</button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        {!gameInProgress && !gameOver && (
          <button className="btn btn-success" onClick={startGame}>Start Game</button>
        )}
        {gameOver && (
          <button className="btn btn-warning" onClick={startGame}>Play Again</button>
        )}
        <button className="btn btn-outline-dark ms-3" onClick={() => setmovePages(1)}>Back</button>
      </div>
    </div>
  );
};

export default TrackOfThoughtGame;
