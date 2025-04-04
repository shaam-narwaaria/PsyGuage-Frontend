import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './InstructionsPage.css';


const gamesData = [
    {
        name: "Track of Thought",
        description: "Guide each circle to its matching color destination by adjusting the track switches.",
        howToPlay: [
            "Click/tap the circled part of the track to change its direction, guiding the circle to the correct destination.",
            "Plan switches in advance for smoother guidance and avoid rapid consecutive clicks."
        ],
        scoring: [
            "Base Points: Each correctly directed train is worth fixed points.",
            "Level Multiplier: Points increase as levels progress."
        ],
        tips: [
            "Prioritize clear paths for upcoming trains by setting switches ahead of time.",
            "Fewer mistakes mean faster trains and higher scores."
        ]
    },
    {
        name: "Pinball Recall",
        description: "Predict the ball's path as it bounces at 90-degree angles off bumpers.",
        howToPlay: [
            "Observe bumper orientation and predict where the ball will go after each bounce.",
            "Each level increases complexity with more bumpers."
        ],
        scoring: [
            "Correct Predictions: Points are awarded for each accurate prediction.",
            "Higher Levels, Higher Scores: Predicting longer paths earns more points."
        ],
        tips: [
            "Mentally trace each bounce carefully.",
            "Start with simpler levels to build path prediction skills."
        ]
    },
    {
        name: "Symbol Speedster",
        description: "Count the number of target symbols in a grid within a time limit.",
        howToPlay: [
            "Identify the target symbol and count its occurrences in the grid.",
            "Submit your count quickly to score points."
        ],
        scoring: [
            "Speed: Faster responses yield higher scores.",
            "Correctness: Incorrect answers result in zero points."
        ],
        tips: [
            "Focus on clusters of symbols to count faster.",
            "Double-check before submitting to avoid mistakes."
        ]
    },
    {
        name: "Memory Match",
        description: "Flip cards to find matching pairs while remembering their locations.",
        howToPlay: [
            "Click on a card to flip it over and reveal the symbol.",
            "Try to match two identical cards in as few moves as possible."
        ],
        scoring: [
            "Correct Matches: Earn points for each successful match.",
            "Efficiency Bonus: Fewer moves result in a higher score."
        ],
        tips: [
            "Memorize card positions after each flip.",
            "Match pairs quickly to earn bonus points."
        ]
    },
    {
        name: "Reaction Rush",
        description: "Test your reaction time by tapping the screen as soon as the signal appears.",
        howToPlay: [
            "Wait for the 'GO' signal to appear on the screen.",
            "Tap as quickly as possible once the signal shows up."
        ],
        scoring: [
            "Speed Bonus: Faster reactions earn more points.",
            "Accuracy: Premature taps result in a penalty."
        ],
        tips: [
            "Stay focused and avoid distractions.",
            "React quickly but avoid false starts."
        ]
    },
    {
        name: "Word Scramble",
        description: "Rearrange scrambled letters to form the correct word before time runs out.",
        howToPlay: [
            "Look at the jumbled letters displayed on the screen.",
            "Drag or type the letters to form the correct word."
        ],
        scoring: [
            "Speed: Faster answers give more points.",
            "Correctness: Incorrect words result in no points."
        ],
        tips: [
            "Look for common prefixes and suffixes.",
            "Start with short words to gain confidence."
        ]
    },
    {
        name: "Quick Math",
        description: "Solve simple math problems as quickly as possible.",
        howToPlay: [
            "Read the math question displayed on the screen.",
            "Choose the correct answer before time runs out."
        ],
        scoring: [
            "Speed Bonus: Faster responses yield more points.",
            "Correctness: Wrong answers deduct points."
        ],
        tips: [
            "Practice mental math to improve speed.",
            "Don't rush too much to avoid mistakes."
        ]
    }
];


// const InstructionsPage = ({ setmovePages }) => {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggleGame = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="container-fluid p-4 min-vh-100" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)" }}>
//             <h1 className="text-center mb-4 fw-bold text-uppercase text-warning display-3 shadow-lg">Game Instructions</h1>
//             <div className="accordion" id="instructionsAccordion">
//                 {gamesData.map((game, index) => (
//                     <div className="accordion-item bg-dark text-light mb-4 rounded shadow-lg border border-light" key={index}>
//                         <h2 className="accordion-header">
//                             <button
//                                 className={`accordion-button ${openIndex === index ? '' : 'collapsed'} bg-warning text-dark fw-bold border-0 shadow-lg`}
//                                 type="button"
//                                 onClick={() => toggleGame(index)}
//                             >
//                                 {game.name}
//                             </button>
//                         </h2>
//                         <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}>
//                             <div className="accordion-body p-4 bg-light text-dark rounded shadow-lg">
//                                 <p className="fw-bold text-danger lead fs-5">{game.description}</p>
//                                 <h4 className="text-primary border-bottom pb-2">How to Play</h4>
//                                 <ul className="list-unstyled">
//                                     {game.howToPlay.map((step, i) => <li key={i} className="py-2">✔ {step}</li>)}
//                                 </ul>
//                                 <h4 className="text-success border-bottom pb-2">Scoring Rules</h4>
//                                 <ul className="list-unstyled">
//                                     {game.scoring.map((rule, i) => <li key={i} className="py-2">🏆 {rule}</li>)}
//                                 </ul>
//                                 <h4 className="text-warning border-bottom pb-2">Tips for Success</h4>
//                                 <ul className="list-unstyled">
//                                     {game.tips.map((tip, i) => <li key={i} className="py-2">💡 {tip}</li>)}
//                                 </ul>
//                                 <button
//                                     className="btn btn-lg btn-danger w-100 mt-3 shadow-lg rounded-pill fw-bold text-uppercase"
//                                     onClick={() => setmovePages(index + 1)}
//                                 >
//                                     🎮 Play {game.name}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default InstructionsPage;

const InstructionsPage = ({ setmovePages }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleGame = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container py-5 min-vh-100 d-flex flex-column align-items-center bg-white">
            <h1 className="text-primary fw-bold text-uppercase mb-4">Game Instructions</h1>
            
            <div className="w-100" style={{ maxWidth: "600px" }}>
                {gamesData.map((game, index) => (
                    <div key={index} className="card mb-3 shadow-sm border-0 instruction-card">
                        <div className="card-header bg-primary text-white fw-bold" onClick={() => toggleGame(index)}>
                            {game.name}
                            <span className="float-end">{openIndex === index ? "▲" : "▼"}</span>
                        </div>
                        
                        {openIndex === index && (
                            <div className="card-body bg-light">
                                <p className="fw-semibold text-muted">{game.description}</p>
                                
                                <h5 className="text-primary">How to Play</h5>
                                <ul className="list-group mb-3">
                                    {game.howToPlay.map((step, i) => (
                                        <li key={i} className="list-group-item border-0">✔ {step}</li>
                                    ))}
                                </ul>

                                <h5 className="text-success">Scoring Rules</h5>
                                <ul className="list-group mb-3">
                                    {game.scoring.map((rule, i) => (
                                        <li key={i} className="list-group-item border-0">🏆 {rule}</li>
                                    ))}
                                </ul>

                                <h5 className="text-danger">Tips for Success</h5>
                                <ul className="list-group mb-3">
                                    {game.tips.map((tip, i) => (
                                        <li key={i} className="list-group-item border-0">💡 {tip}</li>
                                    ))}
                                </ul>

                                <button
                                    className="btn btn-lg btn-primary w-100 fw-bold"
                                    onClick={() => setmovePages(index + 1)}
                                >
                                    🎮 Play {game.name}
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructionsPage;