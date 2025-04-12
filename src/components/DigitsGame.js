import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DigitsGame.css";

const DigitsGame = ({ userName, userEmail }) => {
    const [digitSequence, setDigitSequence] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [isMemorizePhase, setIsMemorizePhase] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [level, setLevel] = useState(5);
    const [round, setRound] = useState(1);
    const [mistakes, setMistakes] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [currentDigitIndex, setCurrentDigitIndex] = useState(0);
    const [maxMemorizedDigits, setMaxMemorizedDigits] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const maxRounds = 5;
    const maxMistakes = 3;
    const navigate = useNavigate();

    const generateRandomDigits = (length) => {
        const digits = Array.from({ length }, () => Math.floor(Math.random() * 10));
        setDigitSequence(digits);
    };

    useEffect(() => {
        if (!gameStarted) return;

        generateRandomDigits(level);
        setUserInput("");
        setIsMemorizePhase(true);
        setCurrentDigitIndex(0);

        const interval = setInterval(() => {
            setCurrentDigitIndex((prevIndex) => {
                if (prevIndex < level - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(() => setIsMemorizePhase(false), 1000);
                    return prevIndex;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [level, round, gameStarted]);

    const handleInputChange = (e) => setUserInput(e.target.value);
    const startGame = () => setGameStarted(true);

    const checkUserInput = () => {
        if (userInput === digitSequence.join("")) {
            setFeedback("✅ Correct! Proceeding to next level.");
            setRound((prev) => prev + 1);
            setLevel((prev) => prev + 1);
            setUserInput("");
            setMaxMemorizedDigits((prev) => Math.max(prev, level));

            if (round >= maxRounds) {
                setIsGameOver(true);
                saveScore(level * 10);
            } else {
                setIsMemorizePhase(true);
            }
        } else {
            const newMistakes = mistakes + 1;
            setMistakes(newMistakes);
            setLevel((prev) => Math.max(prev - 1, 1));
            setFeedback(`❌ Incorrect! Mistake ${newMistakes} of ${maxMistakes}`);
            setRound((prev) => prev + 1);

            if (newMistakes >= maxMistakes) {
                setIsGameOver(true);
                setFeedback("Game Over! You made too many mistakes.");
                saveScore(maxMemorizedDigits * 10);
            } else {
                setUserInput("");
                setIsMemorizePhase(true);
                setCurrentDigitIndex(0);
            }
        }
    };

    const saveScore = async (score) => {
        try {
            await axios.post("https://psyguage-backend.onrender.com/api/scores", {
                gameName: "DigitGame",
                name: userName,
                email: userEmail,
                score,
                date: new Date(),
            });
        } catch (error) {
            console.error("Error saving score:", error);
        }
    };

    const resetGame = () => {
        setLevel(5);
        setRound(1);
        setMistakes(0);
        setUserInput("");
        setFeedback("");
        setIsMemorizePhase(false);
        setIsGameOver(false);
        setMaxMemorizedDigits(0);
        setGameStarted(false);
    };

    return (
        <div className="container py-5 digits-game-container text-center">
            {!gameStarted ? (
                <div className="start-screen bg-white p-4 rounded shadow-sm">
                    <h2 className="mb-3">🔢 Digits Memory Game</h2>
                    <p className="text-muted">Memorize the digits shown and type them in!</p>
                    <button className="btn btn-primary" onClick={startGame}>Start Game</button>
                </div>
            ) : (
                <>
                    {isMemorizePhase && !isGameOver && (
                        <div className="bg-warning-subtle p-4 rounded mb-4">
                            <h4>Memorize these digits</h4>
                            <div className="digit-sequence fs-3 fw-bold mb-2">
                                {digitSequence.slice(0, currentDigitIndex + 1).map((d, i) => (
                                    <span key={i} className="digit">{d}</span>
                                ))}
                            </div>
                            <small className="text-muted">Digits will disappear soon...</small>
                        </div>
                    )}

                    {!isMemorizePhase && !isGameOver && (
                        <div className="input-section bg-light p-4 rounded shadow-sm">
                            <h5>Round {round} - Enter the digits:</h5>
                            <input
                                type="text"
                                value={userInput}
                                onChange={handleInputChange}
                                className="form-control mb-2"
                                placeholder="Enter digits"
                            />
                            <button className="btn btn-success" onClick={checkUserInput}>Submit</button>
                            <div className="feedback mt-3">{feedback}</div>
                            <div className="text-muted">Mistakes: {mistakes} / {maxMistakes}</div>
                        </div>
                    )}

                    {isGameOver && (
                        <div className="game-over-screen bg-danger-subtle p-4 rounded shadow-sm">
                            <h3 className="mb-3">🎉 Game Over!</h3>
                            <p>Max digits memorized: <strong>{maxMemorizedDigits}</strong></p>
                            <p>Rounds completed: <strong>{round - 1}</strong></p>
                            <p>Total mistakes: <strong>{mistakes}</strong></p>
                            <p>{feedback}</p>
                            <div className="d-flex gap-2 justify-content-center mt-3">
                                <button className="btn btn-outline-primary" onClick={resetGame}>Try Again</button>
                                <button className="btn btn-outline-secondary" onClick={() => navigate("/games")}>Back to Menu</button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DigitsGame;
