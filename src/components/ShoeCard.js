import React from "react";
import shoe from "../assets/shoe.jpg";

function ShoeCard({ name, price, rating }) {
  return (
    <div className="shoes-card">
      <img src={shoe} alt="Shoes" />
      <div className="shoes-card-content">
        <p className="shoe-name">{name}</p>
        <div className="shoes-flex">
          <p className="shoe-price">{price}</p>
          <p className="shoe-rating">{rating}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoeCard;
