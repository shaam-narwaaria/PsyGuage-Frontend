import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

// ✅ Lazy Load Game Components to Improve Performance
const Home = lazy(() => import("./components/Home"));
const SymbolGame = lazy(() => import("./components/SymbolGame"));
const QuickClickGame = lazy(() => import("./components/QuickClickGame"));
const BalloonGame = lazy(() => import("./components/BalloonGame"));
const MissingNumberGame = lazy(() => import("./components/MissingNumberGame"));
const TrackOfThoughtGame = lazy(() => import("./components/TrackOfThoughtGame"));
const ArrowGame = lazy(() => import("./components/ArrowGame"));
const DigitsGame = lazy(() => import("./components/DigitsGame"));
const StarSearchGame = lazy(() => import("./components/StarSearchGame"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const InstructionsPage = lazy(() => import("./components/InstructionsPage"));

// ✅ Default Admin Credentials
const ADMIN_NAME = "Admin";
const ADMIN_EMAIL = "admin@gmail.com";
const BASE_URL = "https://psyguage-backend.onrender.com";

function App() {
  const [movePages, setmovePages] = useState(6); // ✅ Start from Home Page

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
      {/* ✅ Navbar */}
      <Navbar localName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} movePages={movePages} />

      {/* ✅ Suspense for Lazy Loading Components */}
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        
        {/* ✅ Home Page */}
        {movePages === 6 && <Home setmovePages={setmovePages} />}

        {/* ✅ Game Selection Page */}
        {movePages === 1 && (
          <div className="container">
            <h1 className="text-center my-4">Explore Our Games</h1>
            <div className="row gy-4">
              {gamesList.map((game, index) => (
                <div key={index} className="col-6 col-md-4">
                  <GameCard {...game} onClick={() => setmovePages(game.pageId)} />
                </div>
              ))}
              <div className="col-6 col-md-4" onClick={submitScore}>
                <div className="card h-100 shadow-sm text-center p-2">
                  <img src="/pinv.jpg" className="card-img-top img-fluid" alt="Open Pinball Recall Game" />
                  <div className="card-body">
                    <h6 className="card-title">Open Pinball Recall Game</h6>
                    <NavLink className="btn btn-primary btn-sm w-100" to="https://open-pinball-recall.vercel.app/">
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
        
      </Suspense>
    </div>
  );
}

// ✅ List of Games for Dynamic Rendering
const gamesList = [
  { image: "/symbol.jpg", title: "Symbol Speedster Game", pageId: 2 },
  { image: "/quick.png", title: "Quick Click Game", pageId: 3 },
  { image: "/balloon.png", title: "Balloon Game", pageId: 5 },
  { image: "/missingv.jpg", title: "Missing Number Game", pageId: 7 },
  { image: "/arrowv.jpg", title: "Arrow Game", pageId: 9 },
  { image: "/digitv.jpg", title: "Star Search Game", pageId: 12 },
  { image: "/trackp.jpg", title: "Track of Thought Game", pageId: 8 },
  { image: "/digitv.jpg", title: "Digits Game", pageId: 10 },
];

// ✅ Reusable Game Card Component
const GameCard = ({ image, title, onClick }) => (
  <div className="card h-100 shadow-sm text-center p-2" onClick={onClick}>
    <img src={image} className="card-img-top img-fluid" alt={title} />
    <div className="card-body">
      <h6 className="card-title">{title}</h6>
      <button className="btn btn-primary btn-sm w-100">Play</button>
    </div>
  </div>
);

export default App;
