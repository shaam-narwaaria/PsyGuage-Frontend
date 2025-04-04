import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { HouseFill, PersonFill, Joystick, BookFill } from "react-bootstrap-icons";

const Navbar = ({ setmovePages }) => {
  useEffect(() => {
    document.body.classList.add("nav-padding"); // ✅ Prevents navbar overlap
  }, []);

  const handleNavigation = (page) => {
    setmovePages(page);
  };

  return (
    <>
      {/* 🔹 Top Navbar */}
      {/* 🔹 Top Navbar */}
      <nav className="navbar navbar-dark fixed-top shadow-sm py-3"
        style={{
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          height: "70px",
          borderBottom: "2px solid rgba(255, 255, 255, 0.2)"
        }}>
        <div className="container-fluid d-flex align-items-center">
          <span className="navbar-brand fw-bold fs-3 text-light"
            style={{ letterSpacing: "1px", textShadow: "2px 2px 6px rgba(0,0,0,0.2)" }}>
            Psy<span className="text-warning">Gauge</span>
          </span>
        </div>
      </nav>



      {/* 🔹 Bottom Navigation Bar */}
      <nav className="navbar navbar-light fixed-bottom shadow-lg border-top py-3"
        style={{ backgroundColor: "#2575fc", height: "90px" }}>
        <div className="container d-flex justify-content-around">
          {[
            { icon: <HouseFill size={24} className="text-light" />, label: "Home", page: 6 },
            { icon: <PersonFill size={24} className="text-light" />, label: "Profile", page: 4 },
            { icon: <Joystick size={24} className="text-light" />, label: "Games", page: 1 },
            { icon: <BookFill size={24} className="text-light" />, label: "Instructions", page: 11 },
          ].map((item, index) => (
            <button
              key={index}
              className="btn d-flex flex-column align-items-center text-light fw-bold"
              onClick={() => handleNavigation(item.page)}
              style={{ fontSize: "12px", transition: "opacity 0.2s ease-in-out" }}
              onMouseOver={(e) => e.currentTarget.style.opacity = "0.8"}
              onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
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
