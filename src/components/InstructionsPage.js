// import React from 'react';
// import './InstructionsPage.css';

// const InstructionsPage = ({ setmovePages }) => {
//     const handlePlayButtonClick = (gameName) => {
//         // Assuming setmovePages function handles navigation to respective game page
//         setmovePages(gameName);
//     };

//     return (
//         <div className="instruction-page">
//             <h1 className="instruction-title">Game Instructions</h1>
//             <div className="instruction-content">

//                 {/* Track of Thought */}
//                 <section className="instruction-section">
//                     <h2 className="instruction-title">Track of Thought</h2>
//                     <p>Guide each circle to its matching color destination by adjusting the track switches. Ensure each circle follows the correct path to reach its station.</p>
//                     <h3>How to Play</h3>
//                     <ul>
//                         <li>Click/tap the circled part of the track to change its direction, guiding the circle to the correct destination.</li>
//                         <li>Plan switches in advance for smoother guidance and avoid rapid consecutive clicks.</li>
//                     </ul>
//                     <h3>Scoring Rules</h3>
//                     <ul><li><strong>Base Points</strong>: Each correctly directed train is worth <strong>fixed</strong> points.</li>
//                     <li><strong>Level Multiplier</strong>: Points are multiplied by the current level number, so higher levels yield higher scores per circle.</li>
//                     </ul>

//                     <h3>Tips for Success</h3>
//                     <ul>
//                         <li>Prioritize clear paths for upcoming trains by setting switches ahead of time.</li>
//                         <li> Mistakes slow down train release, affecting gameplay pace. </li>
//                         <li>Fewer mistakes mean trains appear faster, allowing more trains (and points) per session.</li>
//                         <li>Efficiently toggling switches with minimal errors will keep trains on track and boost your score.</li>
//                     </ul>

//                     <button className="instruction-play-button" onClick={() => handlePlayButtonClick("Track of Thought")}>Play Track of Thought</button>
//                 </section>

//                 {/* Pinball Recall */}
//                 <section className="instruction-section">
//                     <h2 className="instruction-title">Pinball Recall</h2>
//                     <p>Predict the ball's path as it bounces at 90-degree angles off bumpers positioned on the board.</p>
//                     <h3>How to Play</h3>
//                     <ul>
//                         <li>Observe bumper orientation and predict where the ball will go after each bounce.</li>
//                         <li>Each level increases complexity with more bumpers.</li>
//                     </ul>
//                     <h3>Scoring Rules</h3>
//                     <ul>
//                         <li><strong>Correct Predictions</strong>: Points are awarded for each accurate prediction of the ball’s path.</li>
//                         <li><strong>Higher Levels, Higher Scores</strong>: As levels progress, predicting longer and more complex paths awards higher points, so accuracy is crucial.</li>
//                     </ul>

//                     <h3>Tips for Success</h3>
//                     <ul>
//                         <li>Mentally trace each bounce carefully, considering the orientation of each bumper along the way.</li>
//                         <li>Start with simpler levels to build path prediction skills.</li>
//                     </ul>

//                     <button className="instruction-play-button" onClick={() => handlePlayButtonClick("Pinball Recall")}>Play Pinball Recall</button>
//                 </section>

//                 {/* Symbol Speedster */}
//                 <section className="instruction-section">
//                     <h2 className="instruction-title">Symbol Speedster</h2>
//                     <p>Accurately count the number of target symbols that appear within a grid of various symbols. Each round, a specific symbol is chosen, and your task is to quickly and correctly identify how many of that symbol are present.</p>
//                     <h3>How to Play</h3>
//                     <ul>
//                         <li>Identify the target symbol and count its occurrences in the grid.</li>
//                         <li>Submit your count within the time limit to earn points.</li>
//                     </ul>
//                     <h3>Scoring Rules</h3>
//                     <ul>
//                         <li><strong>Response Time</strong>:Identify the target symbol and count its occurrences in the grid as scoring depends on how quickly you submit your count after starting the round.</li>
//                         <li><strong>Correctness</strong>: ou only score points if your count is correct. If incorrect, you earn 0 points for that round.</li>
//                     </ul>

//                     <h3>Tips for Success</h3>
//                     <ul>
//                         <li>Quickly locate clusters of the target symbol without getting distracted by other symbols.</li>
//                         <li>Make sure your count is correct before submitting to avoid scoring zero points.</li>
//                     </ul>

//                     <button className="instruction-play-button" onClick={() => handlePlayButtonClick("Symbol Speedster")}>Play Symbol Speedster</button>
//                 </section>

//                 {/* Quick Click Game */}
//                 <section className="instruction-section">
//                     <h2 className="instruction-title">Quick Click Game</h2>
//                     <p>Test your reaction speed by clicking on a target that randomly appears on the screen. You need to wait for the target to appear and then click on it as quickly as possible.</p>
//                     <h3>How to Play</h3>
//                     <ul>
//                         <li>Wait for the target to appear and click it quickly to record your reaction time.</li>
//                         <li>Complete all 5 rounds for your average reaction time score.</li>
//                     </ul>
//                     <h3>Scoring Rules</h3>
//                     <ul>
//                         <li><strong>Reaction Time</strong>: Each round, your reaction time (in seconds) is recorded when you successfully click on the target. If you click too early, that round’s time isn’t counted.</li>
//                         <li><strong>Final Score</strong>: After completing all 5 rounds, the game calculates your average reaction time. This average is displayed as your final performance score.</li>
//                     </ul>

//                     <h3>Tips for Success</h3>
//                     <ul>
//                         <li>The target appears after a random delay, so be ready but don't anticipate it too early.</li>
//                         <li>Aim to click immediately once you see the target to achieve the best possible reaction time.</li>
//                     </ul>

//                     <button className="instruction-play-button" onClick={() => handlePlayButtonClick("Quick Click")}>Play Quick Click</button>
//                 </section>

//                 {/* Balloon Game */}
//                 <section className="instruction-section">
//                     <h2 className="instruction-title">Balloon Game</h2>
//                     <p>Earn as much in-game currency as possible by pumping up a balloon without it bursting. Each round, players decide when to "Collect" their earnings or risk more pumps for a higher reward.</p>
//                     <h3>How to Play</h3>
//                     <ul>
//                         <li>Each pump increases potential earnings but also the risk of bursting.</li>
//                         <li>Choose to collect earnings before the balloon bursts to bank points.</li>
//                     </ul>
//                     <h3>Scoring Rules</h3>
//                     <ul>
//                         <li><strong>Pump Earnings</strong>: Each successful pump adds to the potential earnings for that round.</li>
//                         <li><strong>Exploded Balloon</strong>: If the balloon bursts, you earn zero for that round.</li>
//                         <li><strong>Collect Earnings</strong>: Bank your earnings by pressing "Collect Money" before the balloon bursts.</li>
//                     </ul>

//                     <h3>Tips for Success</h3>
//                     <ul>
//                         <li> Each round has a unique burst limit. Pump the balloon carefully and assess the risk based on your current round.</li>
//                         <li>Keep an eye on the earnings to decide when to collect. Collecting early can secure smaller but certain rewards.</li>
                        
//                     </ul>

//                     <button className="instruction-play-button" onClick={() => setmovePages(10)}>Play Balloon Game</button>
//                 </section>

//                 {/* Missing Number Game */}
//                 <section className="instruction-section">
//                     <h2 className="instruction-title">Missing Number Game</h2>
//                     <p>Identify the missing number in a sequence of numbers that follows a specific pattern. Each correct answer earns points, with the challenge increasing as you progress through rounds.</p>
//                     <h3>How to Play</h3>
//                     <ul>
//                         <li>View the sequence, note the pattern, and determine the missing number.</li>
//                         <li>Submit your answer to complete each round.</li>
//                     </ul>
//                     <h3>Scoring Rules</h3>
//                     <ul>
//                         <li><strong>Correct Guess</strong>: Every correct guess earns you points.</li>
                        
//                         <li><strong>Final Score</strong>: Your total score is the sum of points earned across the 5 rounds.</li>
//                     </ul>

//                     <h3>Tips for Success</h3>
//                     <ul>
//                         <li>Identify the sequence's arithmetic pattern to quickly find the missing number.</li>
//                         <li>Later rounds may have more challenging patterns, so take your time and double-check your answers before submitting.</li>
//                     </ul>

//                     <button className="instruction-play-button" onClick={() => handlePlayButtonClick("Missing Number")}>Play Missing Number Game</button>
//                 </section>

//                 {/* Arrow Game */}
//                 <section className="instruction-section">
//                     <h2 className="instruction-title">Arrow Game</h2>
//                     <p>Correctly responding to a series of arrows, which appear with different colors and directions. Each round challenges players to interpret and respond to these arrows quickly.</p>
//                     <h3>How to Play</h3>
//                     <ul>
//                         <li>A sequence of arrows is generated, with each arrow displaying a specific direction (left or right) and color (red or blue).</li>
//                         <li>Red arrows: press the same direction.</li> 
//                         <li>Blue arrows: press the opposite direction.</li>
                        
//                     </ul>

//                     <h3>Scoring Rules</h3>
//                     <ul>
//                         <li><strong>Direction Red</strong>: If the arrow is red, press the corresponding arrow key.</li>
//                         <li><strong>Direction Blue</strong>: If the arrow is blue, press the opposite arrow key (left for right arrows, right for left arrows).</li>
//                         <li><strong>Quick Respond</strong>: A time limit encourages quick responses, moving to the next round if the player is inactive for 3 seconds.</li>
//                     </ul>

//                     <h3>Tips for Success</h3>
//                     <ul>
//                         <li>Pay attention to both the arrow direction and color.</li>
//                         <li>Remember that blue arrows require an opposite response to their direction.</li>
//                     </ul>

//                     <button className="instruction-play-button" onClick={() => handlePlayButtonClick("Arrow Game")}>Play Arrow Game</button>
//                 </section>

//                 {/* Digit Game */}
//                 <section className="instruction-section">
//                     <h2 className="instruction-title">Digit Game</h2>
//                     <p>Improve memory by memorizing sequences of digits. Each round, players are shown a new sequence of numbers to remember, which grows progressively longer as the game advances. The aim is to recall these digits accurately without making too many mistakes.
//                     </p>
//                     <h3>How to Play</h3>
//                     <ul>
//                         <li>Memorize a sequence of digits, then enter them in the correct order.</li>
//                         <li>Advance through levels with longer sequences, stopping after 3 mistakes.</li>
//                     </ul>
//                     <h3>Scoring Rules</h3>
//                     <ul>
//                         <li><strong>Level Progression</strong>:  Players advance through levels by accurately recalling digit sequences. Each round cleared increases the score.</li>
//                         <li><strong>Mistakes</strong>:  Players have a limit of 3 mistakes. After 3 mistakes, the game ends, and their score is calculated based on the highest level reached.</li>
//                     </ul>

//                     <h3>Tips for Success</h3>
//                     <ul>
//                         <li>Pay close attention during the memorize phase. Avoid distractions as each digit appears briefly.</li>
//                         <li>Try to group digits into smaller segments to remember them more easily.</li>
//                     </ul>

//                     <button className="instruction-play-button" onClick={() => handlePlayButtonClick("Digit Game")}>Play Digit Game</button>
//                 </section>

//             </div>
//         </div>
//     );
// };

// export default InstructionsPage;


import React from 'react';
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
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Game Instructions</h1>
            <div className="accordion" id="instructionsAccordion">
                {gamesData.map((game, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`collapse${index}`}
                            >
                                {game.name}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#instructionsAccordion"
                        >
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
