import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ setmovePages }) => {
  const [user, setUser] = useState({
    name: localStorage.getItem("game_username") ? JSON.parse(localStorage.getItem("game_username")) : "",
    email: localStorage.getItem("game_useremail") ? JSON.parse(localStorage.getItem("game_useremail")) : ""
  });

  // Function to load user data
  const loadUserData = () => {
    const storedName = JSON.parse(localStorage.getItem("game_username")) || "";
    const storedEmail = JSON.parse(localStorage.getItem("game_useremail")) || "";
    setUser({ name: storedName, email: storedEmail });
  };

  // Listen for login changes
  useEffect(() => {
    window.addEventListener("storage", loadUserData);
    return () => window.removeEventListener("storage", loadUserData);
  }, []);

  const logOut = () => {
    localStorage.removeItem("game_username");
    localStorage.removeItem("game_useremail");
    setUser({ name: "", email: "" }); // Clear state
    setmovePages(0);
  };

  return (
    <nav className="nav-navbar">
      <div className="nav-navbar__left">
        <button className="nav-navbar__brand" onClick={() => setmovePages(6)}>PsyGuage</button>
      </div>

      <div>
        {user.name ? (
          <>
            <button className="nav-navbar__button" onClick={() => setmovePages(6)}>Home</button>
            <button className="nav-navbar__button" onClick={() => setmovePages(4)}>Profile</button>
            <button className="nav-navbar__button" onClick={() => setmovePages(1)}>Games</button>
            <button className="nav-navbar__button" onClick={() => setmovePages(11)}>Instructions</button>
            <button className="nav-navbar__button nav-navbar__logout" onClick={logOut}>Logout</button>
          </>
        ) : (
          <button className="nav-navbar__button" onClick={() => setmovePages(0)}>Sign In</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
