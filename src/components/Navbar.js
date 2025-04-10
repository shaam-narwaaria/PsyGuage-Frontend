import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HouseFill, PersonFill, Joystick, BookFill } from "react-bootstrap-icons";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.paddingTop = "64px";   // Prevents content from being hidden by top navbar
    document.body.style.paddingBottom = "69px"; // Prevents content from being hidden by bottom navbar
  }, []);

  const navItems = [
    { icon: <HouseFill size={18} className="text-light" />, label: "Home", path: "/" },
    { icon: <PersonFill size={18} className="text-light" />, label: "Profile", path: "/profile" },
    { icon: <Joystick size={18} className="text-light" />, label: "Games", path: "/games" },
    { icon: <BookFill size={18} className="text-light" />, label: "Instructions", path: "/instructions" },
  ];

  return (
    <>

      <nav
        className="navbar navbar-dark fixed-top shadow-lg py-2 rounded-bottom"
        style={{
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          height: "70px",
          borderBottom: "3px solid rgba(255, 255, 255, 0.3)"
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* Brand */}
          <span className="navbar-brand fw-bold fs-3 text-light d-flex align-items-center mb-0">
            <img src="logo2.png" alt="Logo" width="50" height="40" className="me-2" />
            Psy<span className="text-warning">Gauge</span>
          </span>

          {/* Feedback Button */}
          <button
            className="btn btn-outline-light btn-sm px-3 fw-semibold"
            onClick={() => navigate("/feedback")}
          >
            Feedback
          </button>
        </div>
      </nav>


      {/* Bottom Navigation Bar */}
      <nav
        className="navbar navbar-light fixed-bottom shadow-lg border-top py-2 rounded-top"
        style={{ backgroundColor: "#2575fc", height: "70px" }}
      >
        <div className="container d-flex justify-content-around">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="btn d-flex flex-column align-items-center text-light fw-bold"
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              <span className="small mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
