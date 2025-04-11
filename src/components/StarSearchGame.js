// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './StarSearchGame.css';

// const symbols = [
//     { shape: "circle", color: "red", pattern: "solid", rotation: "none" },
//     { shape: "square", color: "blue", pattern: "solid", rotation: "none" },
//     { shape: "triangle", color: "green", pattern: "dotted", rotation: "none" },
//     { shape: "diamond", color: "orange", pattern: "solid", rotation: "none" },
//     { shape: "circle", color: "yellow", pattern: "striped", rotation: "none" },
//     { shape: "hexagon", color: "purple", pattern: "striped", rotation: "none" },
// ];

// const StarSearchGame = ({ userName, userEmail, setmovePages }) => {
//     const [symbolGrid, setSymbolGrid] = useState([]);
//     const [oddSymbol, setOddSymbol] = useState(null);
//     const [score, setScore] = useState(0);
//     const [startTime, setStartTime] = useState(null);
//     const [gameOver, setGameOver] = useState(false);
//     const [roundsPlayed, setRoundsPlayed] = useState(0);
//     const [isGameStarted, setIsGameStarted] = useState(false);

//     useEffect(() => {
//         if (isGameStarted) {
//             startNewRound();
//         }
//     }, [roundsPlayed, isGameStarted]);

//     const playSound = (soundPath) => {
//         const audio = new Audio(soundPath);
//         audio.play();
//     };

//     const startNewRound = () => {
//         const grid = generateSymbolGrid();
//         setSymbolGrid(grid);
//         setStartTime(Date.now());
//         playSound('/sounds/newRound.mp3');
//     };

//     const generateSymbolGrid = () => {
//         const [baseSymbol1, baseSymbol2, baseSymbol3, baseSymbol4] = getUniqueBaseSymbols();
//         const oddSymbol = generateUniqueOddSymbol(baseSymbol1, baseSymbol2, baseSymbol3, baseSymbol4);

//         const grid = [
//             ...Array(5).fill(baseSymbol1),
//             ...Array(5).fill(baseSymbol2),
//             ...Array(3).fill(baseSymbol3),
//             ...Array(2).fill(baseSymbol4),
//             oddSymbol,
//         ];

//         grid.sort(() => Math.random() - 0.5);
//         setOddSymbol(oddSymbol);
//         return grid;
//     };

//     const getUniqueBaseSymbols = () => {
//         let selectedSymbols = new Set();
//         while (selectedSymbols.size < 4) {
//             selectedSymbols.add(symbols[Math.floor(Math.random() * symbols.length)]);
//         }
//         return Array.from(selectedSymbols);
//     };

//     const generateUniqueOddSymbol = (baseSymbol1, baseSymbol2, baseSymbol3, baseSymbol4) => {
//         const oddSymbol = { ...baseSymbol1 };
//         const availableShapes = symbols.map(s => s.shape).filter(s => ![baseSymbol1.shape, baseSymbol2.shape, baseSymbol3.shape, baseSymbol4.shape].includes(s));
//         const availableColors = symbols.map(s => s.color).filter(c => ![baseSymbol1.color, baseSymbol2.color, baseSymbol3.color, baseSymbol4.color].includes(c));
//         const availablePatterns = symbols.map(s => s.pattern).filter(p => ![baseSymbol1.pattern, baseSymbol2.pattern, baseSymbol3.pattern, baseSymbol4.pattern].includes(p));

//         oddSymbol.shape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
//         oddSymbol.color = availableColors[Math.floor(Math.random() * availableColors.length)];
//         oddSymbol.pattern = availablePatterns[Math.floor(Math.random() * availablePatterns.length)];

//         return oddSymbol;
//     };

//     const handleSymbolClick = (symbol) => {
//         if (gameOver || !isGameStarted) return;

//         const responseTime = (Date.now() - startTime) / 1000;
//         const isCorrect = compareSymbols(symbol, oddSymbol);
//         const points = isCorrect ? calculateScore(responseTime) : -20;

//         setScore(prevScore => prevScore + points);
//         setRoundsPlayed(roundsPlayed + 1);

//         if (isCorrect) {
//             playSound('/sounds/correct.mp3');
//         } else {
//             // playSound('/sounds/incorrect.mp3');
//         }

//         if (roundsPlayed + 1 >= 5) {
//             setGameOver(true);
//             // playSound('/sounds/gameOver.mp3');
//             saveScores();
//         }
//     };

//     const compareSymbols = (symbol, oddSymbol) => {
//         return (
//             symbol.shape === oddSymbol.shape &&
//             symbol.color === oddSymbol.color &&
//             symbol.pattern === oddSymbol.pattern &&
//             symbol.rotation === oddSymbol.rotation
//         );
//     };

//     const calculateScore = (responseTime) => {
//         if (responseTime <= 0.5) return 100;
//         if (responseTime <= 1) return 90;
//         if (responseTime <= 1.5) return 50;
//         if (responseTime <= 2) return 40;
//         if (responseTime <= 4) return 30;
//         return 20;
//     };

//     const saveScores = async () => {
//         try {
//             await axios.post('https://psyguage-backend.onrender.com/api/scores', {  // Updated URL
//                 gameName: 'SearchStar',
//                 name: userName,
//                 email: userEmail,
//                 score: score,
//             });
//             console.log('Score saved successfully');
//         } catch (error) {
//             console.error('Error saving score:', error);
//         }
//     };
    

//     const handleStartGame = () => {
//         setIsGameStarted(true);
//         setScore(0);
//         setRoundsPlayed(0);
//         setGameOver(false);
//         playSound('/sounds/newRound.mp3');
//     };

//     return (
//         <div className="container-star">
//             <div className="star-search-game">
//                 {!isGameStarted ? (
//                     <div>
//                         <button onClick={handleStartGame} className="btn-star btn-primary">Start Game</button>
//                     </div>
//                 ) : gameOver ? (
//                     <div className="game-over-star">
//                         <h3>Your Total Score: {score}</h3>
//                         <button onClick={handleStartGame} className="btn-star btn-secondary">Restart</button>
//                         <button onClick={() => setmovePages(1)} className="btn-star btn-secondary">Go to Menu</button>
//                     </div>
//                 ) : (
//                     <div className="game-content-star">
//                         {/* <p className="game-instruction-star">Find the symbol that does not match the others!</p> */}
//                         <div className="symbol-grid-star">
//                             {symbolGrid.map((symbol, index) => (
//                                 <div
//                                     key={index}
//                                     className={`symbol-star ${symbol.shape} ${symbol.color} ${symbol.pattern} ${symbol.rotation}`}
//                                     onClick={() => handleSymbolClick(symbol)}
//                                 >
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="game-status-star">
//                             <p>Rounds Played: {roundsPlayed} / 5</p>
//                             <p>Score: {score}</p>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StarSearchGame;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './StarSearchGame.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const symbols = [
    { shape: "circle", color: "red", pattern: "solid", rotation: "none" },
    { shape: "square", color: "blue", pattern: "solid", rotation: "none" },
    { shape: "triangle", color: "green", pattern: "dotted", rotation: "none" },
    { shape: "diamond", color: "orange", pattern: "solid", rotation: "none" },
    { shape: "circle", color: "yellow", pattern: "striped", rotation: "none" },
    { shape: "hexagon", color: "purple", pattern: "striped", rotation: "none" },
];

const StarSearchGame = ({ userName, userEmail }) => {
    const [symbolGrid, setSymbolGrid] = useState([]);
    const [oddSymbol, setOddSymbol] = useState(null);
    const [score, setScore] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [roundsPlayed, setRoundsPlayed] = useState(0);
    const [isGameStarted, setIsGameStarted] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (isGameStarted) {
            startNewRound();
        }
    }, [roundsPlayed, isGameStarted]);

    const playSound = (soundPath) => {
        const audio = new Audio(soundPath);
        audio.play();
    };

    const startNewRound = () => {
        const grid = generateSymbolGrid();
        setSymbolGrid(grid);
        setStartTime(Date.now());
        playSound('/sounds/newRound.mp3');
    };

    const generateSymbolGrid = () => {
        const [base1, base2, base3, base4] = getUniqueBaseSymbols();
        const odd = generateUniqueOddSymbol(base1, base2, base3, base4);

        const grid = [
            ...Array(5).fill(base1),
            ...Array(5).fill(base2),
            ...Array(3).fill(base3),
            ...Array(2).fill(base4),
            odd,
        ];

        grid.sort(() => Math.random() - 0.5);
        setOddSymbol(odd);
        return grid;
    };

    const getUniqueBaseSymbols = () => {
        let selected = new Set();
        while (selected.size < 4) {
            selected.add(symbols[Math.floor(Math.random() * symbols.length)]);
        }
        return Array.from(selected);
    };

    const generateUniqueOddSymbol = (s1, s2, s3, s4) => {
        const odd = { ...s1 };
        const availableShapes = symbols.map(s => s.shape).filter(s => ![s1.shape, s2.shape, s3.shape, s4.shape].includes(s));
        const availableColors = symbols.map(s => s.color).filter(c => ![s1.color, s2.color, s3.color, s4.color].includes(c));
        const availablePatterns = symbols.map(s => s.pattern).filter(p => ![s1.pattern, s2.pattern, s3.pattern, s4.pattern].includes(p));

        odd.shape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
        odd.color = availableColors[Math.floor(Math.random() * availableColors.length)];
        odd.pattern = availablePatterns[Math.floor(Math.random() * availablePatterns.length)];

        return odd;
    };

    const handleSymbolClick = (symbol) => {
        if (gameOver || !isGameStarted) return;

        const responseTime = (Date.now() - startTime) / 1000;
        const isCorrect = compareSymbols(symbol, oddSymbol);
        const points = isCorrect ? calculateScore(responseTime) : -20;

        setScore(prev => prev + points);
        setRoundsPlayed(prev => prev + 1);

        if (isCorrect) playSound('/sounds/correct.mp3');

        if (roundsPlayed + 1 >= 5) {
            setGameOver(true);
            saveScores();
        }
    };

    const compareSymbols = (s1, s2) =>
        s1.shape === s2.shape && s1.color === s2.color && s1.pattern === s2.pattern && s1.rotation === s2.rotation;

    const calculateScore = (time) => {
        if (time <= 0.5) return 100;
        if (time <= 1) return 90;
        if (time <= 1.5) return 50;
        if (time <= 2) return 40;
        if (time <= 4) return 30;
        return 20;
    };

    const saveScores = async () => {
        try {
            await axios.post('https://psyguage-backend.onrender.com/api/scores', {
                gameName: 'SearchStar',
                name: userName,
                email: userEmail,
                score: score,
            });
        } catch (err) {
            console.error("Error saving score", err);
        }
    };

    const handleStartGame = () => {
        setIsGameStarted(true);
        setScore(0);
        setRoundsPlayed(0);
        setGameOver(false);
        playSound('/sounds/newRound.mp3');
    };

    return (
        <div className="container text-center py-4 star-game-wrapper">
            <h2 className="mb-3">🌟 Star Search Game</h2>

            {!isGameStarted ? (
                <button onClick={handleStartGame} className="btn btn-lg btn-primary">Start Game</button>
            ) : gameOver ? (
                <div>
                    <h4 className="text-success">🎉 Total Score: {score}</h4>
                    <button onClick={handleStartGame} className="btn btn-outline-success m-2">Restart</button>
                    <button onClick={() => navigate("/games")} className="btn btn-outline-secondary m-2">Go to Menu</button>
                </div>
            ) : (
                <>
                    <div className="symbol-grid d-flex flex-wrap justify-content-center my-3">
                        {symbolGrid.map((symbol, i) => (
                            <div
                                key={i}
                                className={`symbol-box ${symbol.shape} ${symbol.color} ${symbol.pattern}`}
                                onClick={() => handleSymbolClick(symbol)}
                            />
                        ))}
                    </div>
                    <div className="mt-3">
                        <p className="lead mb-1">Round: {roundsPlayed + 1} / 5</p>
                        <p className="h5">Score: {score}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default StarSearchGame;
