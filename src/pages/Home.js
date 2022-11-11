import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`  }}>
      <div className="headerContainer">
        <h1> FarmIt </h1>
        <p> Loremsem petro leum</p>
        <Link to="/menu">
          <button> BOOK NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
