import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './InstructionsPage.css';

const gamesData = [
    {
        name: "Track of Thought",
        description: "Strategically guide moving circles to their designated color-matching destinations by manipulating track switches.",
        howToPlay: [
            "Tap or click on the highlighted track sections to change their direction.",
            "Plan ahead to ensure the smoothest route for each moving circle.",
            "Avoid rapid consecutive clicks, as precise adjustments lead to better control."
        ],
        scoring: [
            "Base Points: Successfully directing a circle to the correct destination awards points.",
            "Level Multiplier: Higher levels grant additional score multipliers."
        ],
        tips: [
            "Pre-plan switch placements for upcoming paths.",
            "Fewer mistakes allow for faster movement and higher scores."
        ]
    },
    {
        name: "Pinball Recall",
        description: "Analyze and predict the trajectory of a bouncing ball as it interacts with obstacles.",
        howToPlay: [
            "Observe the arrangement of bumpers and predict the ball's path.",
            "Click on the correct endpoint where the ball will land after its final bounce.",
            "Levels become progressively harder with more obstacles."
        ],
        scoring: [
            "Accuracy Points: Correct predictions reward points.",
            "Bonus Points: Multiple correct predictions in a row grant score multipliers."
        ],
        tips: [
            "Visualize the bounces before selecting an endpoint.",
            "Start by tracking the ball's path from one obstacle to the next."
        ]
    },
    {
        name: "Symbol Speedster",
        description: "Quickly count and identify target symbols within a dynamic grid under time constraints.",
        howToPlay: [
            "Examine the grid and identify the target symbol.",
            "Count the occurrences of the symbol as quickly as possible.",
            "Submit your count before time runs out."
        ],
        scoring: [
            "Speed Bonus: Faster responses result in higher scores.",
            "Correctness: Incorrect submissions yield zero points."
        ],
        tips: [
            "Scan the grid in sections to count efficiently.",
            "Double-check your count before submitting."
        ]
    },
    {
        name: "Memory Match",
        description: "Flip and memorize card positions to uncover matching pairs efficiently.",
        howToPlay: [
            "Tap or click on a card to reveal its symbol.",
            "Find and match two identical cards before flipping new ones.",
            "Complete the grid using the fewest possible moves."
        ],
        scoring: [
            "Match Points: Each correct match earns points.",
            "Efficiency Bonus: Fewer moves result in a higher score."
        ],
        tips: [
            "Memorize card locations to make matches faster.",
            "Avoid flipping unnecessary cards to optimize your score."
        ]
    },
    {
        name: "Reaction Rush",
        description: "Test your reflexes by tapping instantly as soon as the signal appears.",
        howToPlay: [
            "Focus on the screen and wait for the 'GO' signal.",
            "Tap as quickly as possible when the signal appears.",
            "Avoid tapping before the signal to prevent penalties."
        ],
        scoring: [
            "Speed Bonus: Faster reactions grant higher scores.",
            "Accuracy: Premature taps lead to score deductions."
        ],
        tips: [
            "Maintain concentration and avoid distractions.",
            "Be ready, but don’t react impulsively before the signal."
        ]
    },
    {
        name: "Word Scramble",
        description: "Rearrange a set of scrambled letters to form the correct word before the timer expires.",
        howToPlay: [
            "Analyze the given jumbled letters.",
            "Rearrange the letters in the correct sequence to form a valid word.",
            "Submit your answer before the time limit runs out."
        ],
        scoring: [
            "Speed Bonus: Faster solutions yield higher points.",
            "Correctness: Incorrect answers result in no points."
        ],
        tips: [
            "Identify common prefixes and suffixes first.",
            "Rearrange the letters mentally before moving them physically."
        ]
    },
    {
        name: "Quick Math",
        description: "Solve simple but time-sensitive math problems as accurately as possible.",
        howToPlay: [
            "Read the displayed mathematical equation.",
            "Choose or type the correct answer before time expires.",
            "Progress through increasing levels of difficulty."
        ],
        scoring: [
            "Speed Bonus: Faster calculations yield more points.",
            "Correctness: Wrong answers deduct points from your score."
        ],
        tips: [
            "Practice mental arithmetic to increase response speed.",
            "Avoid rushing—accuracy is just as important as speed."
        ]
    },
    {
        name: "Pattern Recall",
        description: "Memorize and replicate a sequence of visual patterns within a limited time.",
        howToPlay: [
            "Watch the pattern that appears on the screen.",
            "Recreate the pattern by selecting elements in the correct order.",
            "Sequences become longer and more complex as levels progress."
        ],
        scoring: [
            "Accuracy Bonus: Exact replication earns maximum points.",
            "Level Progression: More complex patterns award higher points."
        ],
        tips: [
            "Break patterns into smaller sections for easier recall.",
            "Use rhythm or visual association techniques to aid memory."
        ]
    },
    {
        name: "Shape Sorter",
        description: "Sort falling geometric shapes into the correct categories before they reach the bottom.",
        howToPlay: [
            "Observe the falling shapes and determine their category.",
            "Swipe or drag them into the correct section before they fall.",
            "Speed and complexity increase with each level."
        ],
        scoring: [
            "Correct Sorting: Each accurate placement grants points.",
            "Speed Bonus: Faster sorting yields score multipliers."
        ],
        tips: [
            "Focus on color, edges, and size for quick recognition.",
            "Stay calm and methodical as the game speeds up."
        ]
    }
];

const InstructionsPage = ({ setmovePages }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleGame = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container py-5 min-vh-100 d-flex flex-column align-items-center bg-light">
            <h1 className="text-dark fw-bold mb-4">Game Instructions</h1>
            
            <div className="accordion w-100" id="gameInstructions" style={{ maxWidth: "700px" }}>
                {gamesData.map((game, index) => (
                    <div key={index} className="accordion-item border-0 shadow-sm mb-3 rounded">
                        <h2 className="accordion-header">
                            <button 
                                className={`accordion-button ${openIndex === index ? '' : 'collapsed'} fw-bold bg-primary text-white`} 
                                type="button" 
                                onClick={() => toggleGame(index)}
                            >
                                {game.name}
                            </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}>
                            <div className="accordion-body bg-white p-3">
                                <p className="fw-semibold text-dark">{game.description}</p>
                                
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
                                    className="btn btn-success btn-lg w-100"
                                    onClick={() => setmovePages(index + 1)}
                                >
                                    🎮 Play {game.name}
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
