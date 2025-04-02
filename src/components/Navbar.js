// import React, { useEffect, useState } from "react";
// import "./Navbar.css";

// const Navbar = ({ setmovePages }) => {
//   const [user, setUser] = useState({
//     name: localStorage.getItem("game_username") ? JSON.parse(localStorage.getItem("game_username")) : "",
//     email: localStorage.getItem("game_useremail") ? JSON.parse(localStorage.getItem("game_useremail")) : ""
//   });

//   // Function to load user data
//   const loadUserData = () => {
//     const storedName = JSON.parse(localStorage.getItem("game_username")) || "";
//     const storedEmail = JSON.parse(localStorage.getItem("game_useremail")) || "";
//     setUser({ name: storedName, email: storedEmail });
//   };

//   // Listen for login changes
//   useEffect(() => {
//     window.addEventListener("storage", loadUserData);
//     return () => window.removeEventListener("storage", loadUserData);
//   }, []);

//   const logOut = () => {
//     localStorage.removeItem("game_username");
//     localStorage.removeItem("game_useremail");
//     setUser({ name: "", email: "" }); // Clear state
//     setmovePages(0);
//   };

//   return (
//     <nav className="nav-navbar">
//       <div className="nav-navbar__left">
//         <button className="nav-navbar__brand" onClick={() => setmovePages(6)}>PsyGuage</button>
//       </div>

//       <div>
//         {user.name ? (
//           <>
//             <button className="nav-navbar__button" onClick={() => setmovePages(6)}>Home</button>
//             <button className="nav-navbar__button" onClick={() => setmovePages(4)}>Profile</button>
//             <button className="nav-navbar__button" onClick={() => setmovePages(1)}>Games</button>
//             <button className="nav-navbar__button" onClick={() => setmovePages(11)}>Instructions</button>
//             <button className="nav-navbar__button nav-navbar__logout" onClick={logOut}>Logout</button>
//           </>
//         ) : (
//           <button className="nav-navbar__button" onClick={() => setmovePages(0)}>Sign In</button>
//         )}
//       </div>
//     </nav>
//   );
// };


// import React, { useState, useRef, useEffect } from "react";
// import "./Navbar.css";

// const Navbar = ({ setmovePages }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="nav-navbar">
//       <div className="nav-navbar__left">
//         <button className="nav-navbar__brand" onClick={() => setmovePages(6)}>PsyGuage</button>
//       </div>

//       {/* PC: Show navbar, Mobile: Show menu icon */}
//       <div className="nav-navbar__menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>

//       {/* Desktop Navbar (always visible) */}
//       <div className="nav-navbar__links">
//         <button className="nav-navbar__button" onClick={() => setmovePages(6)}>Home</button>
//         <button className="nav-navbar__button" onClick={() => setmovePages(4)}>Profile</button>
//         <button className="nav-navbar__button" onClick={() => setmovePages(1)}>Games</button>
//         <button className="nav-navbar__button" onClick={() => setmovePages(11)}>Instructions</button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div ref={menuRef} className={`nav-navbar__dropdown ${menuOpen ? "open" : ""}`}>
//         <button className="nav-navbar__button" onClick={() => setmovePages(6)}>Home</button>
//         <button className="nav-navbar__button" onClick={() => setmovePages(4)}>Profile</button>
//         <button className="nav-navbar__button" onClick={() => setmovePages(1)}>Games</button>
//         <button className="nav-navbar__button" onClick={() => setmovePages(11)}>Instructions</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ setmovePages }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav-navbar">
      {/* Brand Logo */}
      <div className="nav-navbar__left">
        <button className="nav-navbar__brand" onClick={() => setmovePages(6)}>PsyGauge</button>
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="nav-navbar__menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Desktop Navbar (always visible) */}
      <div className="nav-navbar__links">
        <button className="nav-navbar__button" onClick={() => setmovePages(6)}>Home</button>
        <button className="nav-navbar__button" onClick={() => setmovePages(4)}>Profile</button>
        <button className="nav-navbar__button" onClick={() => setmovePages(1)}>Games</button>
        <button className="nav-navbar__button" onClick={() => setmovePages(11)}>Instructions</button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div ref={menuRef} className={`nav-navbar__dropdown ${menuOpen ? "open" : ""}`}>
        <button className="nav-navbar__button" onClick={() => setmovePages(6)}>Home</button>
        <button className="nav-navbar__button" onClick={() => setmovePages(4)}>Profile</button>
        <button className="nav-navbar__button" onClick={() => setmovePages(1)}>Games</button>
        <button className="nav-navbar__button" onClick={() => setmovePages(11)}>Instructions</button>
      </div>
    </nav>
  );
};

export default Navbar;

