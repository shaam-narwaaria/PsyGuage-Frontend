import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ setmovePages }) => {
  const [localName, setLocalName] = useState("");
  const [localEmail, setLocalEmail] = useState("");

  // Function to load user data
  const loadUserData = () => {
    const storedName = JSON.parse(localStorage.getItem("game_username"));
    const storedEmail = JSON.parse(localStorage.getItem("game_useremail"));

    setLocalName(storedName || "");
    setLocalEmail(storedEmail || "");
  };

  // Run once when component mounts & when local storage changes
  useEffect(() => {
    loadUserData();

    // Listen for storage changes (e.g., login from another tab)
    const handleStorageChange = () => {
      loadUserData();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // **Trigger re-render on login change**
  useEffect(() => {
    loadUserData();
  }, [localStorage.getItem("game_username"), localStorage.getItem("game_useremail")]); 

  const logOut = () => {
    localStorage.removeItem("game_username");
    localStorage.removeItem("game_useremail");
    setLocalName(""); // Clear state
    setLocalEmail(""); 
    setmovePages(0);
  };

  return (
    <nav className="nav-navbar">
      <div className="nav-navbar__left">
        <button className="nav-navbar__brand" onClick={() => setmovePages(6)}>PsyGuage</button>
      </div>

      <div>
        {localName ? (
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
