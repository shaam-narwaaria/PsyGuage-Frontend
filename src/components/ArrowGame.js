import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ArrowGame.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArrowGame = ({ userName, userEmail }) => {
    const [round, setRound] = useState(0);
    const [sequence, setSequence] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [scoreSaved, setScoreSaved] = useState(false);
    const totalRounds = 15;
    const navigate = useNavigate();
    const inactivityTimer = useRef(null);

    const startGame = () => {
        setGameStarted(true);
        setRound(0);
        setScore(0);
        setGameOver(false);
        setScoreSaved(false);
        generateSequence();
    };

    const restartGame = () => {
        setGameStarted(true);
        setRound(0);
        setScore(0);
        setGameOver(false);
        setScoreSaved(false);
        generateSequence();
    };

    const generateSequence = () => {
        const arrows = ['←', '→'];
        const colors = ['red', 'blue'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const direction = arrows[Math.floor(Math.random() * arrows.length)];

        const seq = [];
        for (let i = 0; i < 5; i++) {
            const arrow = i === 2 ? (direction === '←' ? '→' : '←') : direction;
            seq.push({ arrow, color });
        }

        setSequence(seq);
    };

    const handleKeyPress = useCallback((event) => {
        if (!gameStarted || gameOver) return;

        const key = event.key;
        const correctArrow = sequence[round % 5];

        if (key === 'ArrowLeft' || key === 'ArrowRight') {
            let direction = key === 'ArrowLeft' ? '←' : '→';
            if (correctArrow.color === 'blue') {
                direction = direction === '←' ? '→' : '←';
            }

            if (correctArrow.arrow === direction) {
                setScore((prev) => prev + 10);
            } else {
                setScore((prev) => prev - 5);
            }

            setRound((prev) => prev + 1);
            clearTimeout(inactivityTimer.current);
        }
    }, [gameStarted, gameOver, sequence, round]);

    const simulateKeyPress = (key) => {
        const event = new KeyboardEvent('keydown', { key });
        window.dispatchEvent(event);
    };

    const saveScore = async (finalScore) => {
        try {
            if (!userEmail) return;

            await axios.post('https://psyguage-backend.onrender.com/api/scores', {
                gameName: 'ArrowGame',
                name: userName,
                email: userEmail,
                score: finalScore,
            });
        } catch (error) {
            console.error('Error saving score:', error.response?.data || error.message);
        }
    };

    useEffect(() => {
        if (gameStarted && round < totalRounds) {
            generateSequence();
        } else if (round >= totalRounds && !scoreSaved) {
            setGameOver(true);
            saveScore(score);
            setScoreSaved(true);
        }

        clearTimeout(inactivityTimer.current);
        inactivityTimer.current = setTimeout(() => {
            if (!gameOver && gameStarted) {
                setRound((prev) => prev + 1);
            }
        }, 1500);

        return () => clearTimeout(inactivityTimer.current);
    }, [round, gameStarted, gameOver, scoreSaved]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className="arrow-game container d-flex flex-column justify-content-center align-items-center text-center py-4">
            <h1 className="arrow-game-title mb-4">Arrow Game</h1>
            {!gameStarted ? (
                <button onClick={startGame} className="btn btn-success btn-lg mb-3">
                    Start Game
                </button>
            ) : (
                <>
                    <h2 className="arrow-game-round mb-2">Round {round + 1} / {totalRounds}</h2>
                    <p className="arrow-game-score fs-5 mb-4">Score: {score}</p>
                    {gameOver ? (
                        <div className="arrow-game-modal-overlay d-flex justify-content-center align-items-center">
                            <div className="arrow-game-modal-content bg-light rounded shadow p-4 text-center">
                                <p className="fs-4">Game over! Your final score is <strong>{score}</strong>.</p>
                                <div className="d-grid gap-2 mt-3">
                                    <button onClick={restartGame} className="btn btn-warning">Restart</button>
                                    <button onClick={() => navigate('/games')} className="btn btn-secondary">Go to Menu</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="arrow-game-sequence mb-3">
                                <div className="arrow-game-arrows fs-1">
                                    {sequence.map((item, index) => (
                                        <span
                                            key={index}
                                            style={{ color: item.color }}
                                            className="arrow-game-arrow mx-1"
                                        >
                                            {item.arrow}
                                        </span>
                                    ))}
                                </div>
                                <p className="arrow-game-instructions mt-2 text-muted">
                                    Press ← or → based on the middle arrow and color rule (blue = reverse).
                                </p>
                            </div>

                            {/* On-screen arrow buttons for mobile */}
                            <div className="d-md-none mt-4 text-center">
                                <p>Use buttons below if on mobile:</p>
                                <div className="d-flex justify-content-center gap-4">
                                    <button className="btn btn-primary arrow-mobile-btn px-4 py-2" onClick={() => simulateKeyPress('ArrowLeft')}>←</button>
                                    <button className="btn btn-primary arrow-mobile-btn px-4 py-2" onClick={() => simulateKeyPress('ArrowRight')}>→</button>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default ArrowGame;


