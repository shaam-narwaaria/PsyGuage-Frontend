// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './InstructionsPage.css';

// const gamesData = [
//     {
//         name: "Track of Thought",
//         description: "Guide each circle to its matching color destination by adjusting the track switches.",
//         howToPlay: [
//             "Click/tap the circled part of the track to change its direction, guiding the circle to the correct destination.",
//             "Plan switches in advance for smoother guidance and avoid rapid consecutive clicks."
//         ],
//         scoring: [
//             "Base Points: Each correctly directed train is worth fixed points.",
//             "Level Multiplier: Points increase as levels progress."
//         ],
//         tips: [
//             "Prioritize clear paths for upcoming trains by setting switches ahead of time.",
//             "Fewer mistakes mean faster trains and higher scores."
//         ]
//     },
//     {
//         name: "Pinball Recall",
//         description: "Predict the ball's path as it bounces at 90-degree angles off bumpers.",
//         howToPlay: [
//             "Observe bumper orientation and predict where the ball will go after each bounce.",
//             "Each level increases complexity with more bumpers."
//         ],
//         scoring: [
//             "Correct Predictions: Points are awarded for each accurate prediction.",
//             "Higher Levels, Higher Scores: Predicting longer paths earns more points."
//         ],
//         tips: [
//             "Mentally trace each bounce carefully.",
//             "Start with simpler levels to build path prediction skills."
//         ]
//     },
//     {
//         name: "Symbol Speedster",
//         description: "Count the number of target symbols in a grid within a time limit.",
//         howToPlay: [
//             "Identify the target symbol and count its occurrences in the grid.",
//             "Submit your count quickly to score points."
//         ],
//         scoring: [
//             "Speed: Faster responses yield higher scores.",
//             "Correctness: Incorrect answers result in zero points."
//         ],
//         tips: [
//             "Focus on clusters of symbols to count faster.",
//             "Double-check before submitting to avoid mistakes."
//         ]
//     },
//     {
//         name: "Memory Match",
//         description: "Flip cards to find matching pairs while remembering their locations.",
//         howToPlay: [
//             "Click on a card to flip it over and reveal the symbol.",
//             "Try to match two identical cards in as few moves as possible."
//         ],
//         scoring: [
//             "Correct Matches: Earn points for each successful match.",
//             "Efficiency Bonus: Fewer moves result in a higher score."
//         ],
//         tips: [
//             "Memorize card positions after each flip.",
//             "Match pairs quickly to earn bonus points."
//         ]
//     },
//     {
//         name: "Reaction Rush",
//         description: "Test your reaction time by tapping the screen as soon as the signal appears.",
//         howToPlay: [
//             "Wait for the 'GO' signal to appear on the screen.",
//             "Tap as quickly as possible once the signal shows up."
//         ],
//         scoring: [
//             "Speed Bonus: Faster reactions earn more points.",
//             "Accuracy: Premature taps result in a penalty."
//         ],
//         tips: [
//             "Stay focused and avoid distractions.",
//             "React quickly but avoid false starts."
//         ]
//     },
//     {
//         name: "Word Scramble",
//         description: "Rearrange scrambled letters to form the correct word before time runs out.",
//         howToPlay: [
//             "Look at the jumbled letters displayed on the screen.",
//             "Drag or type the letters to form the correct word."
//         ],
//         scoring: [
//             "Speed: Faster answers give more points.",
//             "Correctness: Incorrect words result in no points."
//         ],
//         tips: [
//             "Look for common prefixes and suffixes.",
//             "Start with short words to gain confidence."
//         ]
//     },
//     {
//         name: "Quick Math",
//         description: "Solve simple math problems as quickly as possible.",
//         howToPlay: [
//             "Read the math question displayed on the screen.",
//             "Choose the correct answer before time runs out."
//         ],
//         scoring: [
//             "Speed Bonus: Faster responses yield more points.",
//             "Correctness: Wrong answers deduct points."
//         ],
//         tips: [
//             "Practice mental math to improve speed.",
//             "Don't rush too much to avoid mistakes."
//         ]
//     }
// ];

// const InstructionsPage = ({ setmovePages }) => {
//     return (
//         <div className="container mt-4">
//             <h1 className="text-center mb-4">Game Instructions</h1>
//             <div className="accordion" id="instructionsAccordion">
//                 {gamesData.map((game, index) => (
//                     <div className="accordion-item" key={index}>
//                         <h2 className="accordion-header" id={`heading${index}`}>
//                             <button
//                                 className="accordion-button collapsed"
//                                 type="button"
//                                 data-bs-toggle="collapse"
//                                 data-bs-target={`#collapse${index}`}
//                                 aria-expanded="false"
//                                 aria-controls={`collapse${index}`}
//                             >
//                                 {game.name}
//                             </button>
//                         </h2>
//                         <div
//                             id={`collapse${index}`}
//                             className="accordion-collapse collapse"
//                             aria-labelledby={`heading${index}`}
//                             data-bs-parent="#instructionsAccordion"
//                         >
//                             <div className="accordion-body">
//                                 <p><strong>Description:</strong> {game.description}</p>
//                                 <h5>How to Play</h5>
//                                 <ul>
//                                     {game.howToPlay.map((step, i) => <li key={i}>{step}</li>)}
//                                 </ul>
//                                 <h5>Scoring Rules</h5>
//                                 <ul>
//                                     {game.scoring.map((rule, i) => <li key={i}>{rule}</li>)}
//                                 </ul>
//                                 <h5>Tips for Success</h5>
//                                 <ul>
//                                     {game.tips.map((tip, i) => <li key={i}>{tip}</li>)}
//                                 </ul>
//                                 <button
//                                     className="btn btn-primary w-100 mt-3"
//                                     onClick={() => setmovePages(index + 1)}
//                                 >
//                                     Play {game.name}
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

const InstructionsPage = ({ setmovePages }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleGame = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Game Instructions</h1>
            <div className="accordion" id="instructionsAccordion">
                {gamesData.map((game, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => toggleGame(index)}
                            >
                                {game.name}
                            </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}>
                            <div className="accordion-body">
                                <p><strong>Description:</strong> {game.description}</p>
                                <h5>How to Play</h5>
                                <ul>
                                    {game.howToPlay.map((step, i) => <li key={i}>{step}</li>)}
                                </ul>
                                <h5>Scoring Rules</h5>
                                <ul>
                                    {game.scoring.map((rule, i) => <li key={i}>{rule}</li>)}
                                </ul>
                                <h5>Tips for Success</h5>
                                <ul>
                                    {game.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                                </ul>
                                <button
                                    className="btn btn-primary w-100 mt-3"
                                    onClick={() => setmovePages(index + 1)}
                                >
                                    Play {game.name}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructionsPage;
