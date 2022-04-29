import React from "react";
import "./HomePage.css";
import Shoes from "../assets/shoes-img.png";

const HomePage = () => {
  return (
    <div className="header section__padding">
      <div className="header-content">
        <h1>All the Sneakers you want is here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ul
        </p>

        <button type="button">Shop Now</button>
      </div>

      <div className="header-image-box">
        <img src={Shoes} className="header-img" />
      </div>
    </div>
  );
};

export default HomePage;
