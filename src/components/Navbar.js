// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext"
// import "bootstrap/dist/css/bootstrap.min.css";
// import { HouseFill, PersonFill, Joystick, BookFill } from "react-bootstrap-icons";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { setIsAuthenticated } = useAuth();

//   useEffect(() => {
//     document.body.style.paddingTop = "64px";   // Prevents content from being hidden by top navbar
//     document.body.style.paddingBottom = "69px"; // Prevents content from being hidden by bottom navbar
//   }, []);

//   const handleLogout = () => {
//     // Clear local storage and update auth state
//     localStorage.removeItem("game_username");
//     localStorage.removeItem("game_useremail");

//     fetch("https://psyguage-backend.onrender.com/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     });

//     setIsAuthenticated(false);
//     navigate("/login");
//   };

//   const navItems = [
//     { icon: <HouseFill size={18} />, label: "Home", path: "/" },
//     { icon: <PersonFill size={18} />, label: "Profile", path: "/profile" },
//     { icon: <Joystick size={18} />, label: "Games", path: "/games" },
//     { icon: <BookFill size={18} />, label: "Instructions", path: "/instructions" },
//   ];

//   return (
//     <>
//       {/* Top Navbar */}
//       <nav className="navbar navbar-dark fixed-top shadow-lg py-2 rounded-bottom"
//         style={{
//           background: "linear-gradient(135deg, #6a11cb, #2575fc)",
//           height: "70px",
//           borderBottom: "3px solid rgba(255, 255, 255, 0.3)",
//           zIndex: 1000,
//         }}
//       >
//         <div className="container-fluid d-flex justify-content-between align-items-center flex-nowrap px-2">
//           {/* Brand */}
//           <span className="navbar-brand fw-bold fs-5 text-light d-flex align-items-center mb-0">
//             <img src="logo2.png" alt="Logo" width="40" height="30" className="me-2" />
//             Psy<span className="text-warning">Gauge</span>
//           </span>

//           {/* Buttons - Responsive Layout */}
//           <div className="d-flex gap-1">
//             <button
//               className="btn btn-outline-light btn-sm fw-semibold px-2 py-1"
//               style={{ fontSize: "0.75rem" }}
//               onClick={() => navigate("/feedback")}
//             >
//               Feedback
//             </button>
//             <button
//               className="btn btn-outline-warning btn-sm fw-semibold px-2 py-1"
//               style={{ fontSize: "0.75rem" }}
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>
//         </div>

//       </nav>


//       {/* Bottom Navigation Bar */}
//       <nav
//         className="navbar navbar-light fixed-bottom shadow-lg border-top py-2 rounded-top"
//         style={{ backgroundColor: "#2575fc", height: "70px" }}
//       >
//         <div className="container d-flex justify-content-around">
//           {navItems.map((item, index) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <button
//                 key={index}
//                 className={`btn d-flex flex-column align-items-center fw-bold ${isActive ? "text-warning" : "text-light"
//                   }`}
//                 onClick={() => navigate(item.path)}
//                 aria-label={item.label}
//                 title={item.label}
//               >
//                 {React.cloneElement(item.icon, {
//                   className: isActive ? "text-warning" : "text-light"
//                 })}
//                 <span className="small mt-1">{item.label}</span>
//               </button>
//             );
//           })}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { HouseFill, PersonFill, Joystick, BookFill } from "react-bootstrap-icons";

const defaultAvatar = "https://i.pravatar.cc/40?img=1"; // fallback image

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth(); // use context logout

  useEffect(() => {
    document.body.style.paddingTop = "64px";
    document.body.style.paddingBottom = "69px";
  }, []);

  const navItems = [
    { icon: <HouseFill size={18} />, label: "Home", path: "/" },
    { icon: <PersonFill size={18} />, label: "Profile", path: "/profile" },
    { icon: <Joystick size={18} />, label: "Games", path: "/games" },
    { icon: <BookFill size={18} />, label: "Instructions", path: "/instructions" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className="navbar navbar-dark fixed-top shadow-lg py-2 rounded-bottom"
        style={{
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          minHeight: "64px",
          borderBottom: "3px solid rgba(255, 255, 255, 0.3)",
          zIndex: 1000,
          paddingLeft: "1rem",
          paddingRight: "1rem",
          flexWrap: "nowrap",
        }}
      >

        <div className="container-fluid d-flex justify-content-between align-items-center px-2">
          {/* Brand */}
          <span className="navbar-brand fw-bold fs-5 text-light d-flex align-items-center mb-0">
            <img src="/logo2.png" alt="Logo" width="40" height="30" className="me-2" />
            PsyGauge
          </span>

          {/* Right Section: User Info & Buttons */}
          <div className="d-flex align-items-center gap-2">
            {user && (
              <div className="d-flex align-items-center text-light me-2 flex-wrap">
                <img
                  src={user.picture || defaultAvatar}
                  alt="User Avatar"
                  className="rounded-circle me-2"
                  width="28"
                  height="28"
                  style={{ objectFit: "cover" }}
                />
                <span
                  className="fw-semibold d-none d-sm-inline"
                  style={{ fontSize: "0.8rem" }}
                >
                  {user.name}
                </span>
              </div>

            )}

            <button
              className="btn btn-outline-light btn-sm fw-semibold px-2 py-1"
              style={{ fontSize: "0.75rem" }}
              onClick={() => navigate("/feedback")}
            >
              Feedback
            </button>
            <button
              className="btn btn-outline-warning btn-sm fw-semibold px-2 py-1"
              style={{ fontSize: "0.75rem" }}
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Bar */}
      <nav
        className="navbar navbar-light fixed-bottom shadow-lg border-top py-2 rounded-top"
        style={{ backgroundColor: "#2575fc", height: "70px" }}
      >
        <div className="container d-flex justify-content-around">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={index}
                className={`btn d-flex flex-column align-items-center fw-bold ${isActive ? "text-warning" : "text-light"
                  }`}
                onClick={() => navigate(item.path)}
                aria-label={item.label}
                title={item.label}
              >
                {React.cloneElement(item.icon, {
                  className: isActive ? "text-warning" : "text-light",
                })}
                <span className="small mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

