// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import SymbolGame from "./components/SymbolGame";
// import ArrowGame from "./components/ArrowGame";
// import StarSearchGame from "./components/StarSearchGame";
// import QuickClickGame from "./components/QuickClickGame";
// import MissingNumberGame from "./components/MissingNumberGame";
// import TrackOfThoughtGame from "./components/TrackOfThoughtGame";
// import UserProfile from "./components/UserProfile";
// import BalloonGame from "./components/BalloonGame";
// import DigitsGame from "./components/DigitsGame";
// import InstructionsPage from "./components/InstructionsPage";
// import "./App.css";

// // ✅ Use Render backend URL (without trailing slash)
// const BASE_URL = "https://psyguage-backend.onrender.com";

// function App() {
//   const [movePages, setmovePages] = useState(6);
//   const [userName, setuserName] = useState("");
//   const [userEmail, setuserEmail] = useState("");
//   const [error, setError] = useState("");
//   const [localName, setlocalName] = useState("");
//   const [localEmail, setlocalEmail] = useState("");

//   // ✅ Register User Function (with 409 error handling)
//   const registerUser = async () => {
//     if (userName && userEmail) {
//       try {
//         await axios.post(`${BASE_URL}/api/register`, { name: userName, email: userEmail });

//         localStorage.setItem("game_username", JSON.stringify(userName));
//         localStorage.setItem("game_useremail", JSON.stringify(userEmail));

//         setError("");
//         setmovePages(1);

//         setTimeout(() => {
//           setuserName("");
//           setuserEmail("");
//         }, 2000);
//       } catch (error) {
//         if (error.response && error.response.status === 409) {
//           setError("User with this email already exists. Please log in.");
//         } else {
//           setError("Network error. Please try again.");
//         }
//       }
//     } else {
//       setError("*Fill fields properly");
//     }
//   };

//   // ✅ Submit Score Function
//   const submitScore = async () => {
//     if (localName) {
//       try {
//         await axios.post(`${BASE_URL}/api/scores`, {
//           gameName: "pinballcounter",
//           name: localName,
//           email: localEmail,
//           score: Math.floor(Math.random() * 40),
//         });
//       } catch (error) {
//         console.error("Error submitting score:", error);
//       }
//     }
//   };

//   // ✅ Load User Data from LocalStorage
//   useEffect(() => {
//     const storedName = JSON.parse(localStorage.getItem("game_username"));
//     const storedEmail = JSON.parse(localStorage.getItem("game_useremail"));

//     if (storedName && storedEmail) {
//       setlocalName(storedName);
//       setlocalEmail(storedEmail);
//     } else {
//       setmovePages(0);
//     }
//   }, []);

//   // ✅ Keep Backend Awake (Every 5 minutes)
//   useEffect(() => {
//     const keepAlive = setInterval(() => {
//       fetch(BASE_URL)
//         .then(() => console.log("Keeping backend awake..."))
//         .catch((err) => console.log("Server wake-up request failed", err));
//     }, 300000); // Every 5 minutes

//     return () => clearInterval(keepAlive);
//   }, []);

//   return (
//     <div>
//       <Navbar localName={localName} userEmail={localEmail} setmovePages={setmovePages} movePages={movePages} />

//       {/* ✅ Login Page */}
//       {movePages === 0 && (
//         <div className="app-login-container">
//           <div className="app-login-box">
//             <h2 className="app-login-header">Welcome!</h2>
//             <input
//               type="text"
//               className="app-input-field"
//               onChange={(e) => setuserName(e.target.value.trim())}
//               value={userName}
//               placeholder="Enter your name"
//             />
//             <input
//               type="email"
//               className="app-input-field"
//               onChange={(e) => setuserEmail(e.target.value.trim())}
//               value={userEmail}
//               placeholder="Enter your email"
//             />
//             <button className="app-login-button" onClick={registerUser} disabled={!userName || !userEmail}>
//               Save
//             </button>
//             {error && <p className="app-error-message">{error}</p>}
//           </div>
//         </div>
//       )}

//       {/* ✅ Home Page */}
//       {movePages === 6 && <Home setmovePages={setmovePages} />}

//       {/* ✅ Game Selection Page */}
//       {movePages === 1 && (
//         <div className="app-container">
//           <h1 className="app-game-title"> Explore Our Game </h1>
//           <div className="app-row">
//             <div className="app-col-12">
//               <div className="app-game-grid">
//                 <GameCard image="/symbol.jpg" title="Symbol Speedster Game" onClick={() => setmovePages(2)} />
//                 <GameCard image="/quick.png" title="Quick Click Game" onClick={() => setmovePages(3)} />
//                 <GameCard image="/balloon.png" title="Balloon Game" onClick={() => setmovePages(5)} />
//                 <GameCard image="/missingv.jpg" title="Missing Number Game" onClick={() => setmovePages(7)} />
//                 <GameCard image="/arrowv.jpg" title="Arrow Game" onClick={() => setmovePages(9)} />
//                 <GameCard image="/digitv.jpg" title="Star Search Game" onClick={() => setmovePages(12)} />
//                 <GameCard image="/trackp.jpg" title="Track of Thought Game" onClick={() => setmovePages(8)} />
//                 <GameCard image="/digitv.jpg" title="Digits Game" onClick={() => setmovePages(10)} />
//                 <div className="app-game-card" onClick={submitScore}>
//                   <div className="app-game-image">
//                     <img src="/pinv.jpg" alt="Open Pinball Recall Game" />
//                   </div>
//                   <div className="app-game-name">Open Pinball Recall Game</div>
//                   <NavLink className="app-custom_button" to="https://open-pinball-recall.vercel.app/">
//                     Play
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ✅ Render Games */}
//       {movePages === 2 && <SymbolGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
//       {movePages === 3 && <QuickClickGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
//       {movePages === 4 && <UserProfile localName={localName} localEmail={localEmail} setmovePages={setmovePages} />}
//       {movePages === 5 && <BalloonGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
//       {movePages === 7 && <MissingNumberGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
//       {movePages === 8 && <TrackOfThoughtGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
//       {movePages === 9 && <ArrowGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
//       {movePages === 10 && <DigitsGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
//       {movePages === 12 && <StarSearchGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
//     </div>
//   );
// }

// // ✅ Reusable Game Card Component
// const GameCard = ({ image, title, onClick }) => (
//   <div className="app-game-card" onClick={onClick}>
//     <div className="app-game-image">
//       <img src={image} alt={title} />
//     </div>
//     <div className="app-game-name">{title}</div>
//     <div className="app-custom_button">Play</div>
//   </div>
// );

// export default App;


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

// ✅ Use Render backend URL
const BASE_URL = "https://psyguage-backend.onrender.com";

function App() {
  const [movePages, setmovePages] = useState(6);
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [error, setError] = useState("");
  const [localName, setlocalName] = useState("");
  const [localEmail, setlocalEmail] = useState("");

  // ✅ Load User Data from LocalStorage
  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem("game_username"));
    const storedEmail = JSON.parse(localStorage.getItem("game_useremail"));

    if (storedName && storedEmail) {
      setlocalName(storedName);
      setlocalEmail(storedEmail);
    } else {
      setmovePages(0);
    }
  }, []);

  // ✅ Register User Function (Handles Existing Users)
  const registerUser = async () => {
    if (userName && userEmail) {
      try {
        await axios.post(`${BASE_URL}/api/register`, { name: userName, email: userEmail });

        // ✅ Save user data in localStorage
        localStorage.setItem("game_username", JSON.stringify(userName));
        localStorage.setItem("game_useremail", JSON.stringify(userEmail));

        setError(""); // Clear errors
        setmovePages(1); // Move to Game Selection Page
      } catch (error) {
        if (error.response && error.response.status === 409) {
          setError("User already exists. Please log in.");
        } else {
          setError("Network error. Please try again.");
        }
      }
    } else {
      setError("*Fill fields properly");
    }
  };


  // ✅ Submit Score Function
  const submitScore = async () => {
    if (localName) {
      try {
        await axios.post(`${BASE_URL}/api/scores`, {
          gameName: "pinballcounter",
          name: localName,
          email: localEmail,
          score: Math.floor(Math.random() * 40),
        });
      } catch (error) {
        console.error("Error submitting score:", error);
      }
    }
  };

  // ✅ Keep Backend Awake (Every 5 minutes)
  useEffect(() => {
    const keepAlive = setInterval(() => {
      fetch(BASE_URL)
        .then(() => console.log("Keeping backend awake..."))
        .catch((err) => console.log("Server wake-up request failed", err));
    }, 300000);

    return () => clearInterval(keepAlive);
  }, []);

  return (
    <div>
      <Navbar localName={localName} userEmail={localEmail} setmovePages={setmovePages} movePages={movePages} />

      {/* ✅ Login Page */}

      {movePages === 0 && (
        <div className="app-login-container">
          <div className="app-login-box">
            <h2 className="app-login-header">Welcome!</h2>

            {/* ✅ Name Input */}
            <input
              type="text"
              className="app-input-field"
              onChange={(e) => setuserName(e.target.value.trim())}
              value={userName}
              placeholder="Enter your name"
            />

            {/* ✅ Email Input */}
            <input
              type="email"
              className="app-input-field"
              onChange={(e) => setuserEmail(e.target.value.trim())}
              value={userEmail}
              placeholder="Enter your email"
            />

            {/* ✅ Register Button */}
            <button
              className="app-login-button"
              onClick={registerUser}
              disabled={!userName || !userEmail}
            >
              Register
            </button>

            {/* ✅ Show "Sign In" if User Exists */}
            {error === "User already exists. Please log in." && (
              <button
                className="app-login-button"
                onClick={() => {
                  localStorage.setItem("game_username", JSON.stringify(userName));
                  localStorage.setItem("game_useremail", JSON.stringify(userEmail));
                  setmovePages(1); // Move to Game Selection Page
                }}
              >
                Sign In
              </button>
            )}

            {/* ✅ Error Messages */}
            {error && <p className="app-error-message">{error}</p>}
          </div>
        </div>
      )}


      {/* ✅ Home Page */}
      {movePages === 6 && <Home setmovePages={setmovePages} />}

      {/* ✅ Game Selection Page */}
      {movePages === 1 && (
        <div className="app-container">
          <h1 className="app-game-title"> Explore Our Game </h1>
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

//       {/* ✅ Render Games */}
      {movePages === 2 && <SymbolGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
      {movePages === 3 && <QuickClickGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
      {movePages === 4 && <UserProfile localName={localName} localEmail={localEmail} setmovePages={setmovePages} />}
      {movePages === 5 && <BalloonGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
      {movePages === 7 && <MissingNumberGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
      {movePages === 8 && <TrackOfThoughtGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
      {movePages === 9 && <ArrowGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
      {movePages === 10 && <DigitsGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
      {movePages === 12 && <StarSearchGame userName={localName} userEmail={localEmail} setmovePages={setmovePages} />}
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