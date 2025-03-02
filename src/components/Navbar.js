// import React from 'react';
// import './Navbar.css';

// const Navbar = (props) => {
//   const { localName, userEmail, setmovePages, movePages } = props;

//   const logOut = () => {
//     localStorage.setItem("game_username", JSON.stringify(""));
//     localStorage.setItem("game_useremail", JSON.stringify(""));
//     setmovePages(0);
//     window.location.reload();
//   };

//   return (
//     <nav className='nav-navbar'>
//       <div className='nav-navbar__left'>
//         <button className="nav-navbar__brand" onClick={() => setmovePages(6)}>PsyGuage</button>
//       </div>

//       <div className="">
//         {localName ? (
//           <>
//             <button className='nav-navbar__button' onClick={() => setmovePages(6)}>Home</button>
//             <button className='nav-navbar__button' onClick={() => setmovePages(4)}>Profile</button>
//             <button className='nav-navbar__button' onClick={() => setmovePages(1)}>Games</button>
//             <button className='nav-navbar__button' onClick={() => setmovePages(11)}>Instructions</button>
//             <button className='nav-navbar__button nav-navbar__logout' onClick={logOut}>Logout</button>
//           </>
//         ) : (
//           <button className='nav-navbar__button' onClick={() => setmovePages(0)}>Sign In</button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ setmovePages }) => {
  const [localName, setLocalName] = useState("");
  const [localEmail, setLocalEmail] = useState("");

  useEffect(() => {
    // Get user details from localStorage
    const storedName = JSON.parse(localStorage.getItem("game_username"));
    const storedEmail = JSON.parse(localStorage.getItem("game_useremail"));

    if (storedName && storedEmail) {
      setLocalName(storedName);
      setLocalEmail(storedEmail);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("game_username");
    localStorage.removeItem("game_useremail");
    setLocalName("");
    setLocalEmail("");
    setmovePages(0);
    window.location.reload();
  };

  return (
    <nav className="nav-navbar">
      <div className="nav-navbar__left">
        <button className="nav-navbar__brand" onClick={() => setmovePages(6)}>
          PsyGuage
        </button>
      </div>

      <div className="">
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
