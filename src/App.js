import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SymbolGame from "./components/SymbolGame";
import ArrowGame from "./components/ArrowGame";
import StarSearchGame from "./components/StarSearchGame";
import QuickClickGame from "./components/QuickClickGame";
import MissingNumberGame from "./components/MissingNumberGame";
import TrackOfThoughtGame from "./components/TrackOfThoughtGame";
import UserProfile from "./components/UserProfile";
import BalloonGame from "./components/BalloonGame";
import DigitsGame from "./components/DigitsGame";
import InstructionsPage from "./components/InstructionsPage";
import "./App.css";

// ✅ Default Admin Credentials
const ADMIN_NAME = "Admin";
const ADMIN_EMAIL = "admin@gmail.com";

const BASE_URL = "https://psyguage-backend.onrender.com";

function App() {
  const [movePages, setmovePages] = useState(6); // ✅ Start from Game Selection Page

  // ✅ Auto-store Admin credentials
  useEffect(() => {
    localStorage.setItem("game_username", JSON.stringify(ADMIN_NAME));
    localStorage.setItem("game_useremail", JSON.stringify(ADMIN_EMAIL));
  }, []);

  // ✅ Submit Score Function
  const submitScore = async () => {
    try {
      await axios.post(`${BASE_URL}/api/scores`, {
        gameName: "pinballcounter",
        name: ADMIN_NAME,
        email: ADMIN_EMAIL,
        score: Math.floor(Math.random() * 40),
      });
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  return (
    <div>
      <Navbar localName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} movePages={movePages} />

      {/* ✅ Home Page (Default) */}
      {movePages === 6 && <Home setmovePages={setmovePages} />}

      {/* ✅ Game Selection Page (Default) */}
      {movePages === 1 && (
        <div className="app-container">
          <h1 className="app-game-title"> Explore Our Games </h1>
          <div className="app-row">
            <div className="app-col-12">
              <div className="app-game-grid">
                <GameCard image="/symbol.jpg" title="Symbol Speedster Game" onClick={() => setmovePages(2)} />
                <GameCard image="/quick.png" title="Quick Click Game" onClick={() => setmovePages(3)} />
                <GameCard image="/balloon.png" title="Balloon Game" onClick={() => setmovePages(5)} />
                <GameCard image="/missingv.jpg" title="Missing Number Game" onClick={() => setmovePages(7)} />
                <GameCard image="/arrowv.jpg" title="Arrow Game" onClick={() => setmovePages(9)} />
                <GameCard image="/digitv.jpg" title="Star Search Game" onClick={() => setmovePages(12)} />
                <GameCard image="/trackp.jpg" title="Track of Thought Game" onClick={() => setmovePages(8)} />
                <GameCard image="/digitv.jpg" title="Digits Game" onClick={() => setmovePages(10)} />
                <div className="app-game-card" onClick={submitScore}>
                  <div className="app-game-image">
                    <img src="/pinv.jpg" alt="Open Pinball Recall Game" />
                  </div>
                  <div className="app-game-name">Open Pinball Recall Game</div>
                  <NavLink className="app-custom_button" to="https://open-pinball-recall.vercel.app/">
                    Play
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Render Games */}
      {movePages === 2 && <SymbolGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
      {movePages === 3 && <QuickClickGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
      {movePages === 4 && <UserProfile localName={ADMIN_NAME} localEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
      {movePages === 5 && <BalloonGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
      {movePages === 7 && <MissingNumberGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
      {movePages === 8 && <TrackOfThoughtGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
      {movePages === 9 && <ArrowGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
      {movePages === 10 && <DigitsGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
      {movePages === 11 && <InstructionsPage userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
      {movePages === 12 && <StarSearchGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
    </div>
  );
}

// ✅ Reusable Game Card Component
const GameCard = ({ image, title, onClick }) => (
  <div className="app-game-card" onClick={onClick}>
    <div className="app-game-image">
      <img src={image} alt={title} />
    </div>
    <div className="app-game-name">{title}</div>
    <div className="app-custom_button">Play</div>
  </div>
);

export default App;
