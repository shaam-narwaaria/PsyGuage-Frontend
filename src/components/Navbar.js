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

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import { Offcanvas } from "bootstrap";
import { House, Person, Joystick, Book } from "react-bootstrap-icons"; 

const Navbar = ({ setmovePages }) => {
  useEffect(() => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    if (offcanvasElement) {
      offcanvasElement.addEventListener("hidden.bs.offcanvas", () => {});
    }
  }, []);

  const closeOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    if (offcanvas) {
      const bsOffcanvas = new Offcanvas(offcanvas);
      bsOffcanvas.hide();
    }
  };

  const handleNavigation = (page) => {
    closeOffcanvas();
    setTimeout(() => setmovePages(page), 300);
  };

  return (
    <>
      {/* ✅ Static Bottom Navigation Bar (Always Visible) */}
      <nav className="navbar navbar-light bg-white fixed-bottom shadow-lg">
        <div className="container d-flex justify-content-around py-2">
          <button className="btn text-center" onClick={() => handleNavigation(6)}>
            <House size={24} className="mb-1" />
            <div className="small">Home</div>
          </button>
          <button className="btn text-center" onClick={() => handleNavigation(4)}>
            <Person size={24} className="mb-1" />
            <div className="small">Profile</div>
          </button>
          <button className="btn text-center" onClick={() => handleNavigation(1)}>
            <Joystick size={24} className="mb-1" />
            <div className="small">Games</div>
          </button>
          <button className="btn text-center" onClick={() => handleNavigation(11)}>
            <Book size={24} className="mb-1" />
            <div className="small">Instructions</div>
          </button>
        </div>
      </nav>

      {/* ✅ Offcanvas Sidebar (Half-Screen) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        style={{ width: "50%" }} 
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={closeOffcanvas}
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleNavigation(6)}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleNavigation(4)}>Profile</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleNavigation(1)}>Games</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleNavigation(11)}>Instructions</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
