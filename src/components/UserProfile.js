// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './UserProfile.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserProfile = ({ localName, localEmail, setmovePages }) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = await axios.get(`https://psyguage-backend.onrender.com/api/getscores?email=${localEmail}`);
//                 setData(result?.data || []);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [localEmail]);

//     const selectedUser = data.filter((item) => item.email === localEmail);

//     const getLevel = (score) => {
//         if (score >= 80) return { level: 'High', color: 'green' };
//         else if (score >= 50) return { level: 'Moderate', color: 'orange' };
//         return { level: 'Low', color: 'red' };
//     };

//     const renderGameSection = (gameName, displayName, imageSrc, minWinScore = 20) => {
//         const totalGames = selectedUser.filter((item) => item.gameName === gameName);
//         const gamesWon = totalGames.filter((item) => item.score >= minWinScore);

//         const avgScore = totalGames.length
//             ? totalGames.reduce((acc, item) => acc + item.score, 0) / totalGames.length
//             : 0;

//         const avgResponseTime = totalGames.length
//             ? totalGames.reduce((acc, item) => acc + (item.responseSymbolTime || 0), 0) / totalGames.length
//             : 0;

//         return (
//             <div className="col-md-4 col-sm-6 col-12 mb-3" key={gameName}>
//                 <div className="game_card shadow rounded text-center bg-white h-100">
//                     <img
//                         className="game_img rounded"
//                         src={imageSrc}
//                         alt={displayName}
//                         style={{ width: '100%', height: '220px', objectFit: 'cover' }}
//                     />
//                     <h5 className="mt-2 fw-bold">{displayName}</h5>
//                     <p>Games Won: {gamesWon.length} / {totalGames.length}</p>
//                     <p>Avg. Score: {avgScore.toFixed(2)}</p>
//                     {avgResponseTime > 0 && <p>Avg. Response Time: {avgResponseTime.toFixed(2)} ms</p>}
//                 </div>
//             </div>

            
//         );
//     };

//     return (
//         <div className="user_profile py-4" style={{ background: 'linear-gradient(to right, #4facfe, #00f2fe)', minHeight: '100vh' }}>
//             <div className="container">
//                 {loading ? (
//                     <div className="d-flex flex-column align-items-center justify-content-center my-5">
//                     <div className="spinner-grow mb-3" role="status" style={{ width: "4rem", height: "4rem" }}>
//                       <span className="visually-hidden">Fetching your data...</span>
//                     </div>
//                     <p className="text-muted fw-semibold">Fetching your data, please wait...</p>
//                   </div>
//                 ) : (
//                     <>
//                         {data.length === 0 ? (
//                             <div className="alert alert-warning text-center">No data available</div>
//                         ) : (
//                             <>
//                                 {/* Profile Section */}
//                                 <div className="profile_section text-center p-4 bg-white rounded shadow-sm">
//                                     <div className="profile_pic rounded-circle overflow-hidden mx-auto" style={{ width: "120px", height: "120px" }}>
//                                         <img src="/man.png" alt="Profile" className="img-fluid" />
//                                     </div>
//                                     <h4 className="fw-bold mt-2">{localName}</h4>
//                                     <p className="text-muted">{localEmail}</p>
//                                     <button className="btn btn-primary w-100 mt-3" onClick={() => setmovePages(1)}>Play More Games</button>
//                                 </div>

//                                 {/* Psychometric Predictions */}
//                                 <h3 className="text-center mt-4 text-white">Psychometric Predictions</h3>
//                                 <div className="row g-3 mt-3">
//                                     {['Attention', 'Focus', 'Verbal Reasoning', 'Numerical Reasoning', 'Abstract Reasoning', 'Situational Judgment'].map((trait, idx) => {
//                                         const score = [80, 60, 75, 85, 70, 65][idx]; // Mock scores (replace with real if needed)
//                                         const { level, color } = getLevel(score);
//                                         return (
//                                             <div className="col-12 col-md-6" key={trait}>
//                                                 <div className="p-3 rounded shadow-sm bg-white">
//                                                     <h5 className="fw-bold">{trait} Score</h5>
//                                                     <div className="progress mt-2">
//                                                         <div
//                                                             className="progress-bar"
//                                                             style={{
//                                                                 width: `${score}%`,
//                                                                 backgroundColor: color,
//                                                             }}
//                                                         ></div>
//                                                     </div>
//                                                     <p className="text-muted mt-1">{level}</p>
//                                                 </div>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>

//                                 {/* Game Cards */}
//                                 <h3 className="text-center mt-4 text-white">Your Game Scores</h3>
//                                 <div className="row g-3 mt-3">
//                                     {renderGameSection("SymbolCounter", "Symbol Speedster Game", "/symbol.jpg")}
//                                     {renderGameSection("QuickClick", "Quick Click Game", "/clickp.jpg")}
//                                     {renderGameSection("BalloonGame", "Balloon Game", "/balloonp.jpg")}
//                                     {renderGameSection("MissingNumber", "Missing Number Game", "/missingp.jpg")}
//                                     {renderGameSection("ArrowGame", "Arrow Game", "/arrowp.jpg")}
//                                     {renderGameSection("SearchStar", "Star Search Game", "images/starsearch.jpg")}
//                                     {renderGameSection("pinballcounter", "Open Pinball Recall Game", "/pinp.jpg")}
//                                     {renderGameSection("thoughtgame", "Track of Thought Game", "/trackp.jpg")}
//                                     {renderGameSection("DigitGame", "Digit Game", "/digitp.jpg")}
//                                 </div>
//                             </>
//                         )}
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default UserProfile;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = ({ localName, localEmail, setmovePages }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fallbackEmail = JSON.parse(localStorage.getItem("user"))?.email || null;
    const emailToUse = localEmail || fallbackEmail;

    console.log("Email used for fetch:", emailToUse);

    useEffect(() => {
        if (!emailToUse) {
            console.warn("Email is missing, skipping score fetch.");
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const result = await axios.get(`https://psyguage-backend.onrender.com/api/getscores?email=${emailToUse}`);
                setData(result?.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [emailToUse]);

    const selectedUser = data?.filter(item => item.email === emailToUse) || [];

    const getLevel = (score) => {
        if (score >= 80) return { level: 'High', color: 'green' };
        if (score >= 50) return { level: 'Moderate', color: 'orange' };
        return { level: 'Low', color: 'red' };
    };

    const renderGameSection = (gameName, displayName, imageSrc, minWinScore = 20) => {
        const totalGames = selectedUser.filter(item => item.gameName === gameName);
        const gamesWon = totalGames.filter(item => item.score >= minWinScore);

        const avgScore = totalGames.length
            ? totalGames.reduce((acc, item) => acc + item.score, 0) / totalGames.length
            : 0;

        const avgResponseTime = totalGames.length
            ? totalGames.reduce((acc, item) => acc + (item.responseSymbolTime || 0), 0) / totalGames.length
            : 0;

        return (
            <div className="col-md-4 col-sm-6 col-12 mb-3" key={gameName}>
                <div className="game_card shadow rounded text-center bg-white h-100">
                    <img
                        className="game_img rounded"
                        src={imageSrc || "/default.jpg"}
                        alt={displayName}
                        style={{ width: '100%', height: '220px', objectFit: 'cover' }}
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
        <div
            className="user_profile py-4"
            style={{ background: 'linear-gradient(to right, #4facfe, #00f2fe)', minHeight: '100vh' }}
        >
            <div className="container">
                {loading ? (
                    <div className="d-flex flex-column align-items-center justify-content-center my-5">
                        <div className="spinner-grow mb-3" role="status" style={{ width: "4rem", height: "4rem" }}>
                            <span className="visually-hidden">Fetching your data...</span>
                        </div>
                        <p className="text-muted fw-semibold">Fetching your data, please wait...</p>
                    </div>
                ) : !emailToUse ? (
                    <div className="alert alert-danger text-center">User email not available. Please log in again.</div>
                ) : data.length === 0 ? (
                    <div className="alert alert-warning text-center">No data available</div>
                ) : (
                    <>
                        {/* Profile Section */}
                        <div className="profile_section text-center p-4 bg-white rounded shadow-sm">
                            <div
                                className="profile_pic rounded-circle overflow-hidden mx-auto"
                                style={{ width: "120px", height: "120px" }}
                            >
                                <img src="/man.png" alt="Profile" className="img-fluid" />
                            </div>
                            <h4 className="fw-bold mt-2">{localName}</h4>
                            <p className="text-muted">{emailToUse}</p>
                            <button className="btn btn-primary w-100 mt-3" onClick={() => setmovePages(1)}>
                                Play More Games
                            </button>
                        </div>

                        {/* Psychometric Predictions */}
                        <h3 className="text-center mt-4 text-white">Psychometric Predictions</h3>
                        <div className="row g-3 mt-3">
                            {['Attention', 'Focus', 'Verbal Reasoning', 'Numerical Reasoning', 'Abstract Reasoning', 'Situational Judgment'].map((trait, idx) => {
                                const score = [80, 60, 75, 85, 70, 65][idx]; // Mock values for now
                                const { level, color } = getLevel(score);
                                return (
                                    <div className="col-12 col-md-6" key={trait}>
                                        <div className="p-3 rounded shadow-sm bg-white">
                                            <h5 className="fw-bold">{trait} Score</h5>
                                            <div className="progress mt-2">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: `${score}%`, backgroundColor: color }}
                                                ></div>
                                            </div>
                                            <p className="text-muted mt-1">{level}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Game Stats Section */}
                        <h3 className="text-center mt-4 text-white">Your Game Scores</h3>
                        <div className="row g-3 mt-3">
                            {renderGameSection("SymbolCounter", "Symbol Speedster Game", "/symbol.jpg")}
                            {renderGameSection("QuickClick", "Quick Click Game", "/clickp.jpg")}
                            {renderGameSection("BalloonGame", "Balloon Game", "/balloonp.jpg")}
                            {renderGameSection("MissingNumber", "Missing Number Game", "/missingp.jpg")}
                            {renderGameSection("ArrowGame", "Arrow Game", "/arrowp.jpg")}
                            {renderGameSection("SearchStar", "Star Search Game", "/images/starsearch.jpg")}
                            {renderGameSection("pinballcounter", "Open Pinball Recall Game", "/pinp.jpg")}
                            {renderGameSection("thoughtgame", "Track of Thought Game", "/trackp.jpg")}
                            {renderGameSection("DigitGame", "Digit Game", "/digitp.jpg")}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
