// import React from "react";
// import { useNavigate, NavLink } from "react-router-dom";

// const gamesList = [
//   { image: "images/symbol.jpg", title: "Symbol Speedster", route: "/symbol" },
//   { image: "/quick.png", title: "Quick Click", route: "/quick" },
//   { image: "/balloon.png", title: "Balloon", route: "/balloon" },
//   { image: "images/missingnumber.jpg", title: "Missing Number", route: "/missing" },
//   { image: "images/arrow.jpg", title: "Arrow", route: "/arrow" },
//   { image: "images/starsearch.jpg", title: "Star Search", route: "/star" },
//   { image: "/trackp.jpg", title: "Track of Thought", route: "/track" },
//   { image: "images/digit.jpg", title: "Digits", route: "/digits" },
// ];

// const GamesPage = ({ submitScore }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="container-fluid py-4 px-3"
//       style={{
//         background: "linear-gradient(135deg,rgb(192, 247, 247),rgb(97, 249, 120))",
//         minHeight: "100vh",
//       }}
//     >
//       <h2 className="text-center text-dark fw-bold mb-4 display-6">Explore Our Games</h2>
//       <div className="row g-3 justify-content-center">
//         {gamesList.map((game, index) => (
//           <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
//             <div
//               className="card h-100 text-center border-0 shadow-sm rounded-4"
//               onClick={() => navigate(game.route)}
//               role="button"
//               style={{ cursor: "pointer" }}
//             >
//               <img
//                 src={game.image}
//                 className="card-img-top rounded-top"
//                 alt={game.title}
//                 style={{ height: "150px", objectFit: "cover" }}
//               />
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <h6 className="fw-bold text-dark">{game.title}</h6>
//                 <button className="btn btn-outline-primary btn-sm w-100 mt-2">Play</button>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* External Games */}
//         <GameCardExternal
//           title="🎯 Pinball Recall"
//           img="/pinv.jpg"
//           url="https://open-pinball-recall.vercel.app/"
//           onClick={() => submitScore("pinballcounter")}
//         />
//         <GameCardExternal
//           title="Track of Thought"
//           img="/pinv.jpg"
//           url="https://track-of-thought-web.vercel.app/"
//           onClick={() => submitScore("thoughtgame")}
//         />
//         <GameCardExternal
//           title="Memory Matrix"
//           img="/pinv.jpg"
//           url="https://mehdiahmadov.github.io/memory_matrix/"
//           onClick={() => submitScore("memorymatrix")}
//         />
//       </div>
//     </div>
//   );
// };

// const GameCardExternal = ({ title, img, url, onClick }) => (
//   <div className="col-6 col-sm-6 col-md-4 col-lg-3">
//     <div className="card h-100 text-center border-0 shadow-sm rounded-4">
//       <img
//         src={img}
//         className="card-img-top rounded-top"
//         alt={title}
//         style={{ height: "150px", objectFit: "cover" }}
//       />
//       <div className="card-body d-flex flex-column justify-content-between">
//         <h6 className="fw-bold text-dark mb-3">{title}</h6>
//         <NavLink
//           to={url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn btn-success btn-sm w-100"
//           onClick={onClick}
//         >
//           Play Now
//         </NavLink>
//       </div>
//     </div>
//   </div>
// );

// export default GamesPage;


import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const gamesList = [
  { image: "images/symbol.jpg", title: "Symbol Speedster", route: "/symbol" },
  { image: "/quick.png", title: "Quick Click", route: "/quick" },
  { image: "/balloon.png", title: "Balloon", route: "/balloon" },
  { image: "images/missingnumber.jpg", title: "Missing Number", route: "/missing" },
  { image: "images/arrow.jpg", title: "Arrow", route: "/arrow" },
  { image: "images/starsearch.jpg", title: "Star Search", route: "/star" },
  { image: "images/trackofthought.jpg", title: "Track of Thought", route: "/track" },
  { image: "images/digit.jpg", title: "Digits", route: "/digits" },
  // { image: "images/pinball.jpg", title: "Pin Ball", route: "/pinball" },

];

const GamesPage = ({ submitScore }) => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid py-5 px-3"
      style={{
        background: "linear-gradient(135deg, #d4fc79, #96e6a1)",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-center fw-bold mb-5 display-5 text-dark">🎮 Explore Our Games</h2>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {gamesList.map((game, index) => (
          <div key={index} className="col">
            <div
              className="card h-100 border-0 shadow-lg rounded-4 text-center game-card"
              onClick={() => navigate(game.route)}
              role="button"
              style={{ cursor: "pointer", transition: "transform 0.3s" }}
            >
              <img
                src={game.image}
                alt={game.title}
                className="card-img-top rounded-top-4"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h6 className="fw-bold text-dark mb-2">{game.title}</h6>
                <button className="btn btn-outline-success btn-sm w-100">Play</button>
              </div>
            </div>
          </div>
        ))}

        {/* External Games */}
        <GameCardExternal
          title="Pinball Recall"
          img="images/pinball.jpg"
          url="https://open-pinball-recall.vercel.app/"
          onClick={() => submitScore("pinballcounter")}
        />
        <GameCardExternal
          title="Memory Matrix"
          img="/pinv.jpg"
          url="https://mehdiahmadov.github.io/memory_matrix/"
          onClick={() => submitScore("memorymatrix")}
        />
      </div>

      {/* Style Enhancements */}
      <style>
        {`
          .game-card:hover {
            transform: scale(1.03);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
          .btn-outline-success {
            border-radius: 20px;
            transition: background-color 0.3s, color 0.3s;
          }
          .btn-outline-success:hover {
            background-color: #28a745;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

const GameCardExternal = ({ title, img, url, onClick }) => (
  <div className="col">
    <div className="card h-100 text-center border-0 shadow-lg rounded-4 game-card">
      <img
        src={img}
        className="card-img-top rounded-top-4"
        alt={title}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h6 className="fw-bold text-dark mb-3">{title}</h6>
        <NavLink
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-sm w-100 rounded-pill"
          onClick={onClick}
        >
          Play Now
        </NavLink>
      </div>
    </div>
  </div>
);

export default GamesPage;
