import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HouseFill, PersonFill, Joystick, BookFill } from "react-bootstrap-icons";

const Navbar = ({ setmovePages }) => {
  const handleNavigation = (page) => {
    setmovePages(page);
  };

  return (
    <>
      {/* 🔹 Top Navbar */}
      <nav className="navbar navbar-dark fixed-top shadow-sm py-3"
        style={{
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          height: "65px",
          borderBottom: "2px solid rgba(255, 255, 255, 0.2)"
        }}>
        <div className="container-fluid">
          <span className="navbar-brand fw-bold fs-3 text-light">
            Psy<span className="text-warning">Gauge</span>
          </span>
        </div>
      </nav>

      {/* 🔹 Bottom Navigation Bar */}
      <nav className="navbar navbar-light fixed-bottom shadow-lg border-top py-2"
        style={{ backgroundColor: "#2575fc", height: "70px" }}>
        <div className="container d-flex justify-content-around">
          {[
            { icon: <HouseFill size={22} className="text-light" />, label: "Home", page: 6 },
            { icon: <PersonFill size={22} className="text-light" />, label: "Profile", page: 4 },
            { icon: <Joystick size={22} className="text-light" />, label: "Games", page: 1 },
            { icon: <BookFill size={22} className="text-light" />, label: "Instructions", page: 11 },
          ].map((item, index) => (
            <button 
              key={index} 
              className="btn d-flex flex-column align-items-center text-light fw-bold"
              onClick={() => handleNavigation(item.page)}
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
