// import React, { useEffect, useState, lazy, Suspense } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./App.css";

// // ✅ Lazy Load Game Components to Improve Performance
// const Home = lazy(() => import("./components/Home"));
// const SymbolGame = lazy(() => import("./components/SymbolGame"));
// const QuickClickGame = lazy(() => import("./components/QuickClickGame"));
// const BalloonGame = lazy(() => import("./components/BalloonGame"));
// const MissingNumberGame = lazy(() => import("./components/MissingNumberGame"));
// const TrackOfThoughtGame = lazy(() => import("./components/TrackOfThoughtGame"));
// const ArrowGame = lazy(() => import("./components/ArrowGame"));
// const DigitsGame = lazy(() => import("./components/DigitsGame"));
// const StarSearchGame = lazy(() => import("./components/StarSearchGame"));
// const UserProfile = lazy(() => import("./components/UserProfile"));
// const InstructionsPage = lazy(() => import("./components/InstructionsPage"));

// // ✅ Default Admin Credentials
// const ADMIN_NAME = "Admin";
// const ADMIN_EMAIL = "admin@gmail.com";
// const BASE_URL = "https://psyguage-backend.onrender.com";

// function App() {
//   const [movePages, setmovePages] = useState(6); // ✅ Start from Home Page

//   // ✅ Auto-store Admin credentials
//   useEffect(() => {
//     localStorage.setItem("game_username", JSON.stringify(ADMIN_NAME));
//     localStorage.setItem("game_useremail", JSON.stringify(ADMIN_EMAIL));
//   }, []);

//   // ✅ Submit Score Function
//   const submitScore = async () => {
//     try {
//       await axios.post(`${BASE_URL}/api/scores`, {
//         gameName: "pinballcounter",
//         name: ADMIN_NAME,
//         email: ADMIN_EMAIL,
//         score: Math.floor(Math.random() * 40),
//       });
//     } catch (error) {
//       console.error("Error submitting score:", error);
//     }
//   };

//   return (
//     <div>
//       {/* ✅ Navbar */}
//       <Navbar localName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} movePages={movePages} />

//       {/* ✅ Suspense for Lazy Loading Components */}
//       <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>

//         {/* ✅ Home Page */}
//         {movePages === 6 && <Home setmovePages={setmovePages} />}

//         {/* ✅ Game Selection Page */}
//         {movePages === 1 && (
//           <div className="container">
//             <h1 className="text-center my-4">Explore Our Games</h1>
//             <div className="row gy-4">
//               {gamesList.map((game, index) => (
//                 <div key={index} className="col-6 col-md-4">
//                   <GameCard {...game} onClick={() => setmovePages(game.pageId)} />
//                 </div>
//               ))}
//               <div className="col-6 col-md-4" onClick={submitScore}>
//                 <div className="card h-100 shadow-sm text-center p-2">
//                   <img src="/pinv.jpg" className="card-img-top img-fluid" alt="Open Pinball Recall Game" />
//                   <div className="card-body">
//                     <h6 className="card-title">Open Pinball Recall Game</h6>
//                     <NavLink className="btn btn-primary btn-sm w-100" to="https://open-pinball-recall.vercel.app/">
//                       Play
//                     </NavLink>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* ✅ Render Games */}
//         {movePages === 2 && <SymbolGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
//         {movePages === 3 && <QuickClickGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
//         {movePages === 4 && <UserProfile localName={ADMIN_NAME} localEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
//         {movePages === 5 && <BalloonGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
//         {movePages === 7 && <MissingNumberGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
//         {movePages === 8 && <TrackOfThoughtGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
//         {movePages === 9 && <ArrowGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
//         {movePages === 10 && <DigitsGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
//         {movePages === 11 && <InstructionsPage userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}
//         {movePages === 12 && <StarSearchGame userName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} />}

//       </Suspense>
//     </div>
//   );
// }

// // ✅ List of Games for Dynamic Rendering
// const gamesList = [
//   { image: "/symbol.jpg", title: "Symbol Speedster Game", pageId: 2 },
//   { image: "/quick.png", title: "Quick Click Game", pageId: 3 },
//   { image: "/balloon.png", title: "Balloon Game", pageId: 5 },
//   { image: "/missingv.jpg", title: "Missing Number Game", pageId: 7 },
//   { image: "/arrowv.jpg", title: "Arrow Game", pageId: 9 },
//   { image: "/digitv.jpg", title: "Star Search Game", pageId: 12 },
//   { image: "/trackp.jpg", title: "Track of Thought Game", pageId: 8 },
//   { image: "/digitv.jpg", title: "Digits Game", pageId: 10 },
// ];

// // ✅ Reusable Game Card Component
// const GameCard = ({ image, title, onClick }) => (
//   <div className="card h-100 shadow-sm text-center p-2" onClick={onClick}>
//     <img src={image} className="card-img-top img-fluid" alt={title} />
//     <div className="card-body">
//       <h6 className="card-title">{title}</h6>
//       <button className="btn btn-primary btn-sm w-100">Play</button>
//     </div>
//   </div>
// );

// export default App;



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

  // ✅ Global Score Submission Function
  const submitScore = async (gameName) => {
    try {
      await axios.post(`${BASE_URL}/api/scores`, {
        gameName: gameName,
        name: ADMIN_NAME,
        email: ADMIN_EMAIL,
        score: Math.floor(Math.random() * 40),
      });
      console.log(`✅ Score submitted for ${gameName}`);
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };


  return (
    <div className="bg-light min-vh-100">
      {/* ✅ Navbar */}
      <Navbar localName={ADMIN_NAME} userEmail={ADMIN_EMAIL} setmovePages={setmovePages} movePages={movePages} />

      {/* ✅ Suspense for Lazy Loading Components */}
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>

        {/* ✅ Home Page */}
        {movePages === 6 && <Home setmovePages={setmovePages} />}

        {/* ✅ Game Selection Page */}
        {movePages === 1 && (
          <div
            className="container-fluid py-4 px-3"
            style={{
              background: "linear-gradient(135deg,rgb(192, 247, 247),rgb(97, 249, 120))",
              minHeight: "100vh",
            }}
          >
            <h2 className="text-center text-dark fw-bold mb-4 display-6">
              Explore Our Games
            </h2>

            <div className="row g-4 justify-content-center">
              {gamesList.map((game, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <GameCard {...game} onClick={() => setmovePages(game.pageId)} />
                </div>
              ))}

              {/* Pinball Recall Game */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 text-center border-0 shadow rounded-4">
                  <img
                    src="/pinv.jpg"
                    alt="Open Pinball Recall Game"
                    className="card-img-top rounded-top"
                    style={{ height: "100px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h6 className="card-title fw-bold mb-3">🎯 Pinball Recall</h6>
                    <NavLink
                      to="https://open-pinball-recall.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success w-100"
                      onClick={() => submitScore("pinballcounter")}
                    >
                      Play Now
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* Track of Thought Game */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 text-center border-0 shadow rounded-4">
                  <img
                    src="/pinv.jpg"
                    alt="Open Track of Thought Game"
                    className="card-img-top rounded-top"
                    style={{ height: "100px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h6 className="card-title fw-bold mb-3">Track of Thought</h6>
                    <NavLink
                      to="https://track-of-thought-web.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success w-100"
                      onClick={() => submitScore("thoughtgame")}
                    >
                      Play Now
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* Track of Thought Game */}
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 text-center border-0 shadow rounded-4">
                  <img
                    src="/pinv.jpg"
                    alt="Open Track of Thought Game"
                    className="card-img-top rounded-top"
                    style={{ height: "100px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h6 className="card-title fw-bold mb-3">Memory Matrix</h6>
                    <NavLink
                      to="https://mehdiahmadov.github.io/memory_matrix/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success w-100"
                      onClick={() => submitScore("memorymatrix")}
                    >
                      Play Now
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


// ✅ Reusable Game Card Component (Bootstrap Only)
const GameCard = ({ image, title, onClick }) => (
  <div
    className="card h-100 shadow-sm text-center border-0 rounded-4 bg-white game-card"
    onClick={onClick}
    role="button"
    style={{ transition: "transform 0.2s" }}
    onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
    onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <img src={image} className="card-img-top rounded-top" alt={title} style={{ height: "100px", objectFit: "cover" }} />
    <div className="card-body p-3">
      <h6 className="card-title fw-bold">{title}</h6>
      <button className="btn btn-outline-primary w-100 mt-2">Play</button>
    </div>
  </div>
);


export default App;

