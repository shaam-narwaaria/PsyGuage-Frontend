import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const gamesList = [
  { image: "images/symbol.jpg", title: "Symbol Speedster", route: "/symbol" },
  { image: "/quick.png", title: "Quick Click", route: "/quick" },
  { image: "/balloon.png", title: "Balloon", route: "/balloon" },
  { image: "/missingv.jpg", title: "Missing Number", route: "/missing" },
  { image: "images/arrow.jpg", title: "Arrow", route: "/arrow" },
  { image: "/digitv.jpg", title: "Star Search", route: "/star" },
  { image: "/trackp.jpg", title: "Track of Thought", route: "/track" },
  { image: "/digitv.jpg", title: "Digits", route: "/digits" },
];

const GamesPage = ({ submitScore }) => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid py-4 px-3"
      style={{
        background: "linear-gradient(135deg,rgb(192, 247, 247),rgb(97, 249, 120))",
        minHeight: "100vh",
      }}
    >
      <h2 className="text-center text-dark fw-bold mb-4 display-6">Explore Our Games</h2>
      <div className="row g-3 justify-content-center">
        {gamesList.map((game, index) => (
          <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div
              className="card h-100 text-center border-0 shadow-sm rounded-4"
              onClick={() => navigate(game.route)}
              role="button"
              style={{ cursor: "pointer" }}
            >
              <img
                src={game.image}
                className="card-img-top rounded-top"
                alt={game.title}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h6 className="fw-bold text-dark">{game.title}</h6>
                <button className="btn btn-outline-primary btn-sm w-100 mt-2">Play</button>
              </div>
            </div>
          </div>
        ))}

        {/* External Games */}
        <GameCardExternal
          title="🎯 Pinball Recall"
          img="/pinv.jpg"
          url="https://open-pinball-recall.vercel.app/"
          onClick={() => submitScore("pinballcounter")}
        />
        <GameCardExternal
          title="Track of Thought"
          img="/pinv.jpg"
          url="https://track-of-thought-web.vercel.app/"
          onClick={() => submitScore("thoughtgame")}
        />
        <GameCardExternal
          title="Memory Matrix"
          img="/pinv.jpg"
          url="https://mehdiahmadov.github.io/memory_matrix/"
          onClick={() => submitScore("memorymatrix")}
        />
      </div>
    </div>
  );
};

const GameCardExternal = ({ title, img, url, onClick }) => (
  <div className="col-6 col-sm-6 col-md-4 col-lg-3">
    <div className="card h-100 text-center border-0 shadow-sm rounded-4">
      <img
        src={img}
        className="card-img-top rounded-top"
        alt={title}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h6 className="fw-bold text-dark mb-3">{title}</h6>
        <NavLink
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-sm w-100"
          onClick={onClick}
        >
          Play Now
        </NavLink>
      </div>
    </div>
  </div>
);

export default GamesPage;
