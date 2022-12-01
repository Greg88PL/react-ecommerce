import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-light border-0">
        <img
          src="assets/bg2.jpg"
          className="card-img"
          alt="Backgound"
          height="650px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-3 mb-0 fw-bolder mt-4">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text fs-2 lead">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
