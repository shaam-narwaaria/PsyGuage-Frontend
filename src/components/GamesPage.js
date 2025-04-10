import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const gamesList = [
  { image: "/symbol.jpg", title: "Symbol Speedster Game", route: "/symbol" },
  { image: "/quick.png", title: "Quick Click Game", route: "/quick" },
  { image: "/balloon.png", title: "Balloon Game", route: "/balloon" },
  { image: "/missingv.jpg", title: "Missing Number Game", route: "/missing" },
  { image: "/arrowv.jpg", title: "Arrow Game", route: "/arrow" },
  { image: "/digitv.jpg", title: "Star Search Game", route: "/star" },
  { image: "/trackp.jpg", title: "Track of Thought Game", route: "/track" },
  { image: "/digitv.jpg", title: "Digits Game", route: "/digits" },
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
      <div className="row g-4 justify-content-center">
        {gamesList.map((game, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              className="card h-100 text-center border-0 shadow rounded-4"
              onClick={() => navigate(game.route)}
              role="button"
              style={{ cursor: "pointer" }}
            >
              <img src={game.image} className="card-img-top" style={{ height: "100px", objectFit: "cover" }} alt={game.title} />
              <div className="card-body">
                <h6 className="fw-bold">{game.title}</h6>
                <button className="btn btn-outline-primary w-100 mt-2">Play</button>
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
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="card h-100 text-center border-0 shadow rounded-4">
      <img src={img} className="card-img-top" style={{ height: "100px", objectFit: "cover" }} alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h6 className="fw-bold mb-3">{title}</h6>
        <NavLink
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success w-100"
          onClick={onClick}
        >
          Play Now
        </NavLink>
      </div>
    </div>
  </div>
);

export default GamesPage;
