import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = ({ localName, localEmail, setmovePages }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackEmail = JSON.parse(localStorage.getItem("user"))?.email || null;
  const emailToUse = localEmail || fallbackEmail;

  useEffect(() => {
    if (!emailToUse) {
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

  const selectedUser = data.filter(item => item.email === emailToUse);

  const getLevel = (score) => {
    if (score >= 80) return { level: 'High', color: 'green' };
    if (score >= 50) return { level: 'Moderate', color: 'orange' };
    return { level: 'Low', color: 'red' };
  };

  const renderGameCard = (gameName, displayName, imageSrc, winScore = 20) => {
    const games = selectedUser.filter(item => item.gameName === gameName);
    const total = games.length;
    const wins = games.filter(item => item.score >= winScore).length;
    const avgScore = total ? games.reduce((sum, g) => sum + g.score, 0) / total : 0;
    const avgResponseTime = total ? games.reduce((sum, g) => sum + (g.responseSymbolTime || 0), 0) / total : 0;

    return (
      <div className="col mb-4" key={gameName}>
        <div className="card shadow rounded-4 border-0 h-100">
          <img src={imageSrc} className="card-img-top rounded-top-4" alt={displayName}
            style={{ height: '140px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column justify-content-between text-center">
            <h6 className="fw-bold mb-2">{displayName}</h6>
            <p className="mb-1 small"><strong>Total:</strong> {total}</p>
            <p className="mb-1 small text-success"><strong>Wins:</strong> {wins}</p>
            <p className="mb-1 small"><strong>Avg. Score:</strong> {avgScore.toFixed(1)}</p>
            {avgResponseTime > 0 && (
              <p className="mb-0 small"><strong>Avg. Response:</strong> {avgResponseTime.toFixed(1)} ms</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-4" style={{ background: 'linear-gradient(to right, #4facfe, #00f2fe)', minHeight: '100vh' }}>
      <div className="container">
        {loading ? (
          <div className="d-flex flex-column align-items-center justify-content-center my-5">
            <div className="spinner-border mb-3 text-light" role="status" style={{ width: "3rem", height: "3rem" }} />
            <p className="text-white fw-semibold">Fetching your data...</p>
          </div>
        ) : !emailToUse ? (
          <div className="alert alert-danger text-center">User email not available. Please log in again.</div>
        ) : data.length === 0 ? (
          <div className="alert alert-warning text-center">No data available</div>
        ) : (
          <>
            {/* Profile */}
            <div className="bg-white text-center rounded-4 p-4 shadow-sm mb-4">
              <div className="mx-auto mb-2" style={{ width: "100px", height: "100px", overflow: "hidden" }}>
                <img src="images/profile.jpg" alt="User" className="img-fluid rounded-circle" />
              </div>
              <h4 className="fw-bold mb-1">{localName}</h4>
              <p className="text-muted">{emailToUse}</p>
              <button className="btn btn-primary w-100 mt-2" onClick={() => setmovePages(1)}>Play More Games</button>
            </div>

            {/* Predictions */}
            <h4 className="text-white text-center fw-bold mb-3">Psychometric Predictions</h4>
            <div className="row g-3 mb-4">
              {['Attention', 'Focus', 'Verbal Reasoning', 'Numerical Reasoning', 'Abstract Reasoning', 'Situational Judgment'].map((trait, i) => {
                const score = [80, 60, 75, 85, 70, 65][i];
                const { level, color } = getLevel(score);
                return (
                  <div className="col-12 col-sm-6" key={trait}>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <h6 className="fw-bold">{trait}</h6>
                      <div className="progress mb-1">
                        <div
                          className="progress-bar"
                          style={{ width: `${score}%`, backgroundColor: color }}
                          role="progressbar"
                        />
                      </div>
                      <small className="text-muted">{level}</small>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Game Stats */}
            <h4 className="text-white text-center fw-bold mb-3">Your Game Scores</h4>
            <div className="row row-cols-2 row-cols-md-3 g-3">
              {renderGameCard("SymbolCounter", "Symbol Speedster", "images/symbol.jpg")}
              {renderGameCard("QuickClick", "Quick Click", "/quick.png")}
              {renderGameCard("BalloonGame", "Balloon", "/balloonp.jpg")}
              {renderGameCard("MissingNumber", "Missing Number", "images/missingnumber.jpg")}
              {renderGameCard("ArrowGame", "Arrow", "/arrowp.jpg")}
              {renderGameCard("SearchStar", "Star Search", "/images/starsearch.jpg")}
              {renderGameCard("pinballcounter", "Open Pinball Recall", "/pinp.jpg")}
              {renderGameCard("thoughtgame", "Track of Thought", "images/trackofthought.jpg")}
              {renderGameCard("DigitGame", "Digit", "images/digit.jpg")}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

