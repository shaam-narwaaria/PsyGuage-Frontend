// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min"; 
// import { Offcanvas } from "bootstrap";
// import { House, Person, Joystick, Book } from "react-bootstrap-icons"; 

// const Navbar = ({ setmovePages }) => {
//   useEffect(() => {
//     const offcanvasElement = document.getElementById("offcanvasNavbar");
//     if (offcanvasElement) {
//       offcanvasElement.addEventListener("hidden.bs.offcanvas", () => {});
//     }
//   }, []);

//   const closeOffcanvas = () => {
//     const offcanvas = document.getElementById("offcanvasNavbar");
//     if (offcanvas) {
//       const bsOffcanvas = new Offcanvas(offcanvas);
//       bsOffcanvas.hide();
//     }
//   };

//   const handleNavigation = (page) => {
//     closeOffcanvas();
//     setTimeout(() => setmovePages(page), 300);
//   };

//   return (
//     <>
//       {/* ✅ Static Bottom Navigation Bar (Always Visible) */}
//       <nav className="navbar navbar-light bg-white fixed-bottom shadow-lg">
//         <div className="container d-flex justify-content-around py-2">
//           <button className="btn text-center" onClick={() => handleNavigation(6)}>
//             <House size={24} className="mb-1" />
//             <div className="small">Home</div>
//           </button>
//           <button className="btn text-center" onClick={() => handleNavigation(4)}>
//             <Person size={24} className="mb-1" />
//             <div className="small">Profile</div>
//           </button>
//           <button className="btn text-center" onClick={() => handleNavigation(1)}>
//             <Joystick size={24} className="mb-1" />
//             <div className="small">Games</div>
//           </button>
//           <button className="btn text-center" onClick={() => handleNavigation(11)}>
//             <Book size={24} className="mb-1" />
//             <div className="small">Instructions</div>
//           </button>
//         </div>
//       </nav>

//       {/* ✅ Offcanvas Sidebar (Half-Screen) */}
//       <div
//         className="offcanvas offcanvas-end"
//         tabIndex="-1"
//         id="offcanvasNavbar"
//         style={{ width: "50%" }} 
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title">Menu</h5>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//             onClick={closeOffcanvas}
//           ></button>
//         </div>

//         <div className="offcanvas-body">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleNavigation(6)}>Home</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleNavigation(4)}>Profile</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleNavigation(1)}>Games</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleNavigation(11)}>Instructions</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
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
      {/* ✅ Top Navbar with App Name (No Menu Button) */}
      <nav className="navbar navbar-dark bg-primary fixed-top shadow-sm px-3">
        <div className="container-fluid">
          {/* App Logo (Inspired by YouTube but Unique) */}
          <span className="navbar-brand mb-0 h4 app-logo">Psy<span className="highlight">Guage</span></span>
        </div>
      </nav>

      {/* ✅ Static Bottom Navigation Bar (Always Visible) */}
      <nav className="navbar navbar-light bg-light fixed-bottom shadow-lg">
        <div className="container d-flex justify-content-around py-2">
          <button className="btn text-center" onClick={() => handleNavigation(6)}>
            <House size={24} className="mb-1 text-primary" />
            <div className="small">Home</div>
          </button>
          <button className="btn text-center" onClick={() => handleNavigation(4)}>
            <Person size={24} className="mb-1 text-primary" />
            <div className="small">Profile</div>
          </button>
          <button className="btn text-center" onClick={() => handleNavigation(1)}>
            <Joystick size={24} className="mb-1 text-primary" />
            <div className="small">Games</div>
          </button>
          <button className="btn text-center" onClick={() => handleNavigation(11)}>
            <Book size={24} className="mb-1 text-primary" />
            <div className="small">Instructions</div>
          </button>
        </div>
      </nav>

      {/* ✅ Offcanvas Sidebar (Half-Screen) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        style={{ width: "60%" }} 
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
