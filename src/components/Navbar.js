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
//       {/* Brand Logo */}
//       <div className="nav-navbar__left">
//         <button className="nav-navbar__brand" onClick={() => setmovePages(6)}>PsyGauge</button>
//       </div>

//       {/* Hamburger Menu Icon (Mobile) */}
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


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = ({ setmovePages }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold" to="/" onClick={() => setmovePages(6)}>
          PsyGauge
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Sidebar for Mobile */}
        <div
          className={`offcanvas offcanvas-end ${menuOpen ? "show" : ""}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => setMenuOpen(false)}
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setmovePages(6)}>Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setmovePages(4)}>Profile</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setmovePages(1)}>Games</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setmovePages(11)}>Instructions</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
