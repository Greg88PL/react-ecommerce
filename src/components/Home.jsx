import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-light border-0">
        <img
          src="assets/bg2.jpg"
          class="card-img"
          alt="Backgound"
          height="650px"
        />
        <div class="card-img-overlay">
          <div className="container">
            <h5 class="card-title display-3 mb-0 fw-bolder mt-4">
              NEW SEASON ARRIVALS
            </h5>
            <p class="card-text fs-2 lead">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
