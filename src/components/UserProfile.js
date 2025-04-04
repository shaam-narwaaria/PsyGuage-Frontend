// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './UserProfile.css';

// const UserProfile = (props) => {
//     const { localName, localEmail, setmovePages } = props;
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         try {
//             // Send email as a query parameter to fetch scores for the specific user
//             const result = await axios.get(`https://psyguage-backend.onrender.com/api/getscores?email=${localEmail}`);
//             setData(result?.data || []);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [localEmail]);  // Fetch data when the localEmail changes

//     // Filter selected user data based on the email
//     const selectedUser = data.filter((item) => item.email === localEmail);

//     // Game statistics calculation function
//     const gameStats = (gameName, minWinScore = 5) => {
//         const totalGames = selectedUser.filter((item) => item.gameName === gameName);
//         const gamesWon = totalGames.filter((item) => item.score >= minWinScore);

//         const avgScore = totalGames.length
//             ? totalGames.reduce((acc, item) => acc + item.score, 0) / totalGames.length
//             : 0;

//         const avgResponseTime = totalGames.length
//             ? totalGames.reduce((acc, item) => acc + (item.responseSymbolTime || 0), 0) / totalGames.length
//             : 0;

//         return { totalGames, gamesWon, avgScore, avgResponseTime };
//     };

//     // Psychometric trait thresholds for each game
//     const gameTraitThresholds = {
//         attention: { minResponseTime: 200, maxResponseTime: 300 },
//         focus: { minScore: 50, maxScore: 70 },
//         verbalReasoning: { minScore: 30, maxScore: 50 },
//         numericalReasoning: { minScore: 40, maxScore: 60 },
//         abstractReasoning: { minResponseTime: 200, maxResponseTime: 300 },
//         situationalJudgment: { minScore: 50 },
//     };

//     // Calculate psychometric traits based on game stats
//     const getPsychometricTraits = (gameStats) => {
//         let traits = {
//             attentionScore: 40,
//             focusScore: 30,
//             verbalReasoningScore: 40,
//             numericalReasoningScore: 60,
//             abstractReasoningScore: 10,
//             situationalJudgmentScore: 60,
//         };

//         Object.keys(gameStats).forEach((game) => {
//             const stats = gameStats[game];
//             const thresholds = gameTraitThresholds[game];

//             // Check if thresholds exist for the game
//             if (thresholds) {
//                 if (stats.avgResponseTime) {
//                     if (stats.avgResponseTime < thresholds.minResponseTime) traits.attentionScore += 15;
//                     else if (stats.avgResponseTime < thresholds.maxResponseTime) traits.attentionScore += 10;
//                 }

//                 if (stats.avgScore) {
//                     if (stats.avgScore > thresholds.minScore) traits.focusScore += 10;
//                     if (stats.avgScore > thresholds.maxScore) traits.focusScore += 15;
//                 }
//             }
//         });

//         return {
//             attentionScore: Math.min(traits.attentionScore, 100),
//             focusScore: Math.min(traits.focusScore, 100),
//             verbalReasoningScore: Math.min(traits.verbalReasoningScore, 100),
//             numericalReasoningScore: Math.min(traits.numericalReasoningScore, 100),
//             abstractReasoningScore: Math.min(traits.abstractReasoningScore, 100),
//             situationalJudgmentScore: Math.min(traits.situationalJudgmentScore, 100),
//         };
//     };

//     // Collecting stats for different games
//     const gameStatsData = {
//         pinballcounter: gameStats("pinballcounter"),
//         symbolcounter: gameStats("symbolcounter"),
//         quickClick: gameStats("QuickClick"),
//         balloonGame: gameStats("BalloonGame"),
//         missingNumberGame: gameStats("MissingNumber"),
//     };

//     const {
//         attentionScore,
//         focusScore,
//         verbalReasoningScore,
//         numericalReasoningScore,
//         abstractReasoningScore,
//         situationalJudgmentScore,
//     } = getPsychometricTraits(gameStatsData);

//     // Helper function to determine the level of performance
//     const getLevel = (score) => {
//         if (score >= 80) return { level: 'High', color: 'green' };
//         else if (score >= 50) return { level: 'Moderate', color: 'orange' };
//         return { level: 'Low', color: 'red' };
//     };

//     // Function to render a game section
//     const renderGameSection = (gameName, displayName, imageSrc, minWinScore = 20) => {
//         const { totalGames, gamesWon, avgScore, avgResponseTime } = gameStats(gameName, minWinScore);

//         return (
//             <div className="col-md-4" key={gameName}>
//                 <div className="game_card">
//                     <img className="game_img" src={imageSrc} alt={displayName} />
//                     <div className="game_details">
//                         <h4>{displayName}</h4>
//                         <p>Games Won: {gamesWon.length} / {totalGames.length || 0}</p>
//                         <p>Average Score: {avgScore.toFixed(2)}</p>
//                         {avgResponseTime > 0 && <p>Avg. Response Time: {avgResponseTime.toFixed(2)} ms</p>}
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="user_profile py-4">
//           <div className="container">
//             {loading ? (
//               <div className="skeleton_container text-center">
//                 {/* Profile Skeleton */}
//                 <div className="skeleton-profile-section">
//                   <div className="skeleton-profile mx-auto"></div>
//                   <div className="skeleton-text skeleton-text-lg mx-auto"></div>
//                   <div className="skeleton-text skeleton-text-sm mx-auto"></div>
//                 </div>
//                 {/* Psychometric Score Skeleton */}
//                 <div className="skeleton-score-container mt-4">
//                   {Array(6).fill(0).map((_, index) => (
//                     <div key={index} className="skeleton-score-bar w-100 mx-auto"></div>
//                   ))}
//                 </div>
//                 {/* Game Card Skeletons */}
//                 <div className="row mt-4">
//                   {Array(6).fill(0).map((_, index) => (
//                     <div key={index} className="col-6 col-md-4">
//                       <div className="skeleton-card mx-auto"></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <>
//                 {data.length === 0 ? (
//                   <div className="alert alert-warning text-center">No data available</div>
//                 ) : (
//                   <>
//                     {/* Profile Section */}
//                     <div className="profile_section text-center p-3 bg-light rounded shadow-sm">
//                       <div className="profile_info d-flex flex-column align-items-center">
//                         <div className="profile_pic rounded-circle overflow-hidden mb-2" style={{ width: "100px", height: "100px" }}>
//                           <img src="/man.png" alt="Profile" className="img-fluid" />
//                         </div>
//                         <h4 className="fw-bold mb-1">{localName}</h4>
//                         <p className="text-muted small">{localEmail}</p>
//                       </div>
//                       <button className="btn btn-primary w-100 mt-3" onClick={() => setmovePages(1)}>Play More Games</button>
//                     </div>

//                     {/* Psychometric Predictions */}
//                     <h3 className="text-center mt-4 text-primary">Psychometric Predictions</h3>
//                     <div className="psychometric_predictions row g-3 mt-3">
//                       {['Attention', 'Focus', 'Verbal Reasoning', 'Numerical Reasoning', 'Abstract Reasoning', 'Situational Judgment'].map((trait, idx) => {
//                         const score = [attentionScore, focusScore, verbalReasoningScore, numericalReasoningScore, abstractReasoningScore, situationalJudgmentScore][idx];
//                         const { level, color } = getLevel(score);
//                         return (
//                           <div className="col-12 col-md-6" key={trait}>
//                             <div className="score_card p-3 rounded shadow-sm bg-white">
//                               <h5 className="fw-bold">{trait} Score</h5>
//                               <div className="progress mt-2">
//                                 <div
//                                   className="progress-bar"
//                                   style={{ width: `${score}%`, backgroundColor: color }}
//                                 ></div>
//                               </div>
//                               <p className="text-muted mt-1">{level}</p>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>

//                     {/* Game Cards */}
//                     <h3 className="text-center mt-4 text-success">Your Game Scores</h3>
//                     <div className="row g-3 mt-3">
//                       {renderGameSection("SymbolCounter", "Symbol Speedster Game", "/symbol.jpg")}
//                       {renderGameSection("QuickClick", "Quick Click Game", "/clickp.jpg")}
//                       {renderGameSection("BalloonGame", "Balloon Game", "/balloonp.jpg")}
//                       {renderGameSection("MissingNumber", "Missing Number Game", "/missingp.jpg")}
//                       {renderGameSection("ArrowGame", "Arrow Game", "/arrowp.jpg")}
//                       {renderGameSection("SearchStar", "Star Search Game", "/digitp.jpg")}
//                       {renderGameSection("pinballcounter", "Open Pinball Recall Game", "/pinp.jpg")}
//                       {renderGameSection("thoughtgame", "Track of Thought Game", "/trackp.jpg")}
//                       {renderGameSection("DigitGame", "Digit Game", "/digitp.jpg")}
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       );

// };

// export default UserProfile;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = ({ localName, localEmail, setmovePages }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`https://psyguage-backend.onrender.com/api/getscores?email=${localEmail}`);
                setData(result?.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [localEmail]);

    const selectedUser = data.filter((item) => item.email === localEmail);

    const getLevel = (score) => {
        if (score >= 80) return { level: 'High', color: 'green' };
        else if (score >= 50) return { level: 'Moderate', color: 'orange' };
        return { level: 'Low', color: 'red' };
    };

    const renderGameSection = (gameName, displayName, imageSrc, minWinScore = 20) => {
        const totalGames = selectedUser.filter((item) => item.gameName === gameName);
        const gamesWon = totalGames.filter((item) => item.score >= minWinScore);

        const avgScore = totalGames.length
            ? totalGames.reduce((acc, item) => acc + item.score, 0) / totalGames.length
            : 0;

        const avgResponseTime = totalGames.length
            ? totalGames.reduce((acc, item) => acc + (item.responseSymbolTime || 0), 0) / totalGames.length
            : 0;

        return (
            <div className="col-md-4 col-sm-6 col-12 mb-3" key={gameName}>
                <div className="game_card shadow rounded p-3 text-center bg-white h-100">
                    <img
                        className="game_img rounded"
                        src={imageSrc}
                        alt={displayName}
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    />
                    <h5 className="mt-2 fw-bold">{displayName}</h5>
                    <p>Games Won: {gamesWon.length} / {totalGames.length}</p>
                    <p>Avg. Score: {avgScore.toFixed(2)}</p>
                    {avgResponseTime > 0 && <p>Avg. Response Time: {avgResponseTime.toFixed(2)} ms</p>}
                </div>
            </div>
        );
    };

    return (
        <div className="user_profile py-4" style={{ background: 'linear-gradient(to right, #4facfe, #00f2fe)', minHeight: '100vh' }}>
            <div className="container">
                {loading ? (
                    <div className="text-center my-5">
                        <img src="/loading-illustration.gif" alt="Loading" style={{ width: "200px", height: "200px" }} />
                        <p className="text-white mt-2">Fetching your data...</p>
                    </div>

                ) : (
                    <>
                        {data.length === 0 ? (
                            <div className="alert alert-warning text-center">No data available</div>
                        ) : (
                            <>
                                {/* Profile Section */}
                                <div className="profile_section text-center p-4 bg-white rounded shadow-sm">
                                    <div className="profile_pic rounded-circle overflow-hidden mx-auto" style={{ width: "120px", height: "120px" }}>
                                        <img src="/man.png" alt="Profile" className="img-fluid" />
                                    </div>
                                    <h4 className="fw-bold mt-2">{localName}</h4>
                                    <p className="text-muted">{localEmail}</p>
                                    <button className="btn btn-primary w-100 mt-3" onClick={() => setmovePages(1)}>Play More Games</button>
                                </div>

                                {/* Psychometric Predictions */}
                                <h3 className="text-center mt-4 text-white">Psychometric Predictions</h3>
                                <div className="row g-3 mt-3">
                                    {['Attention', 'Focus', 'Verbal Reasoning', 'Numerical Reasoning', 'Abstract Reasoning', 'Situational Judgment'].map((trait, idx) => {
                                        const score = [80, 60, 75, 85, 70, 65][idx]; // Mock scores (replace with real if needed)
                                        const { level, color } = getLevel(score);
                                        return (
                                            <div className="col-12 col-md-6" key={trait}>
                                                <div className="p-3 rounded shadow-sm bg-white">
                                                    <h5 className="fw-bold">{trait} Score</h5>
                                                    <div className="progress mt-2">
                                                        <div
                                                            className="progress-bar"
                                                            style={{
                                                                width: `${score}%`,
                                                                backgroundColor: color,
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <p className="text-muted mt-1">{level}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Game Cards */}
                                <h3 className="text-center mt-4 text-white">Your Game Scores</h3>
                                <div className="row g-3 mt-3">
                                    {renderGameSection("SymbolCounter", "Symbol Speedster Game", "/symbol.jpg")}
                                    {renderGameSection("QuickClick", "Quick Click Game", "/clickp.jpg")}
                                    {renderGameSection("BalloonGame", "Balloon Game", "/balloonp.jpg")}
                                    {renderGameSection("MissingNumber", "Missing Number Game", "/missingp.jpg")}
                                    {renderGameSection("ArrowGame", "Arrow Game", "/arrowp.jpg")}
                                    {renderGameSection("SearchStar", "Star Search Game", "/digitp.jpg")}
                                    {renderGameSection("pinballcounter", "Open Pinball Recall Game", "/pinp.jpg")}
                                    {renderGameSection("thoughtgame", "Track of Thought Game", "/trackp.jpg")}
                                    {renderGameSection("DigitGame", "Digit Game", "/digitp.jpg")}
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
