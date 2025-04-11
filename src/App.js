import React, { lazy, Suspense } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { useAuth } from "./auth/AuthContext";

// Lazy Load Pages
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
const GamesPage = lazy(() => import("./components/GamesPage"));
const Feedback = lazy(() => import("./components/Feedback"));
const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));

const BASE_URL = "https://psyguage-backend.onrender.com";

// ✅ Route guard component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  // ✅ Safely get from localStorage with fallback
  const { user, loading } = useAuth();


  const localName = user?.name || "";
  const localEmail = user?.email || "";


  const submitScore = async (gameName) => {
    try {
      await axios.post(`${BASE_URL}/api/scores`, {
        gameName,
        name: localName,
        email: localEmail,
        score: Math.floor(Math.random() * 40),
      });
      console.log(`✅ Score submitted for ${gameName}`);
    } catch (error) {
      console.error("Error submitting score:", error);
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Checking auth...</div>;
  }


  return (

    <div className="bg-light min-vh-100">
      <Navbar localName={localName} userEmail={localEmail} />
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>

        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route path="/games" element={<ProtectedRoute><GamesPage submitScore={submitScore} /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><UserProfile localName={localName} localEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/instructions" element={<ProtectedRoute><InstructionsPage userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/symbol" element={<ProtectedRoute><SymbolGame userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/quick" element={<ProtectedRoute><QuickClickGame userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/balloon" element={<ProtectedRoute><BalloonGame userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/missing" element={<ProtectedRoute><MissingNumberGame userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/track" element={<ProtectedRoute><TrackOfThoughtGame userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/arrow" element={<ProtectedRoute><ArrowGame userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/digits" element={<ProtectedRoute><DigitsGame userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/star" element={<ProtectedRoute><StarSearchGame userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
          <Route path="/feedback" element={<ProtectedRoute><Feedback userName={localName} userEmail={localEmail} /></ProtectedRoute>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
