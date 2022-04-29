import React, { useState, useEffect } from "react";
import "./ProductsPage.css";
import shoe from "../assets/shoe.jpg";
import { productdata } from "../utils/constants";
import ShoeCard from "../components/ShoeCard";

function ProductsPage() {
  // const [data, setData] = useState([]);
  // useEffect(async () => {
  //   let result = await fetch("");
  //   result = await result.json();
  //   setData(result);
  // }, []);

  // console.log(result);

  return (
    <div className="products section__padding">
      <div className="product-content">
        <h1 className="product-title text-center">New Collection</h1>

        <div className="product-grid">
          <div className="product-filter">
            <div className="product-filter_content">
              <h3 className="filter-text">FILTERS</h3>

              <h2 className="cost-text">Cost</h2>
              <div className="cost-filter">
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label for="opt-in" className="cost-label">
                    Rs. 1500-4000
                  </label>
                </div>
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label for="opt-in" className="cost-label">
                    Rs. 4001-7000
                  </label>
                </div>
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label for="opt-in" className="cost-label">
                    Rs. 7001+
                  </label>
                </div>
              </div>

              <h2 className="cost-text" style={{ marginTop: "1.4rem" }}>
                Design Templates
              </h2>
              <div className="cost-filter">
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label for="opt-in" className="cost-label">
                    2
                  </label>
                </div>
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label for="opt-in" className="cost-label">
                    3
                  </label>
                </div>
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label for="opt-in" className="cost-label">
                    3+
                  </label>
                </div>
              </div>

              <h2 className="cost-text" style={{ marginTop: "1.4rem" }}>
                Color
              </h2>
              <div className="cost-filter">
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label
                    for="opt-in"
                    className="cost-label"
                    style={{ color: "red" }}
                  >
                    Red
                  </label>
                </div>
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label
                    for="opt-in"
                    className="cost-label"
                    style={{ color: "blue" }}
                  >
                    Blue
                  </label>
                </div>
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label
                    for="opt-in"
                    className="cost-label"
                    style={{ color: "green" }}
                  >
                    Green
                  </label>
                </div>
              </div>

              <h2 className="cost-text" style={{ marginTop: "1.4rem" }}>
                Types
              </h2>
              <div className="cost-filter">
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label for="opt-in" className="cost-label">
                    Sneakers
                  </label>
                </div>
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label for="opt-in" className="cost-label">
                    Sports
                  </label>
                </div>
                <div className="cost-margin">
                  <input type="checkbox" name="my-checkbox" className="" />
                  <label for="opt-in" className="cost-label">
                    Formal
                  </label>
                </div>
              </div>

              <div className="button-filter">
                <button type="button" className="apply-button">
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="shoes-col">
            <div className="shoes-content">
              <div className="shoes-content-tit">
                <h3 className="filter-text">Shoes</h3>
                <p className="sortby-text">Sort by</p>
              </div>
              <div className="shoes-grid">
                {/* <div className="shoes-card">
                  <img src={shoe} alt="Shoes" />
                  <div className="shoes-card-content">
                    <p className="shoe-name">KSL 01</p>
                    <div className="shoes-flex">
                      <p className="shoe-price">Rs. 2000</p>
                      <p className="shoe-rating">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>

                <div className="shoes-card">
                  <img src={shoe} alt="Shoes" />
                  <div className="shoes-card-content">
                    <p className="shoe-name">KSL 01</p>
                    <div className="shoes-flex">
                      <p className="shoe-price">Rs. 2000</p>
                      <p className="shoe-rating">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>

                <div className="shoes-card">
                  <img src={shoe} alt="Shoes" />
                  <div className="shoes-card-content">
                    <p className="shoe-name">KSL 01</p>
                    <div className="shoes-flex">
                      <p className="shoe-price">Rs. 2000</p>
                      <p className="shoe-rating">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>

                <div className="shoes-card">
                  <img src={shoe} alt="Shoes" />
                  <div className="shoes-card-content">
                    <p className="shoe-name">KSL 01</p>
                    <div className="shoes-flex">
                      <p className="shoe-price">Rs. 2000</p>
                      <p className="shoe-rating">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>

                <div className="shoes-card">
                  <img src={shoe} alt="Shoes" />
                  <div className="shoes-card-content">
                    <p className="shoe-name">KSL 01</p>
                    <div className="shoes-flex">
                      <p className="shoe-price">Rs. 2000</p>
                      <p className="shoe-rating">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>

                <div className="shoes-card">
                  <img src={shoe} alt="Shoes" />
                  <div className="shoes-card-content">
                    <p className="shoe-name">KSL 01</p>
                    <div className="shoes-flex">
                      <p className="shoe-price">Rs. 2000</p>
                      <p className="shoe-rating">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>

                <div className="shoes-card">
                  <img src={shoe} alt="Shoes" />
                  <div className="shoes-card-content">
                    <p className="shoe-name">KSL 01</p>
                    <div className="shoes-flex">
                      <p className="shoe-price">Rs. 2000</p>
                      <p className="shoe-rating">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>

                <div className="shoes-card">
                  <img src={shoe} alt="Shoes" />
                  <div className="shoes-card-content">
                    <p className="shoe-name">KSL 01</p>
                    <div className="shoes-flex">
                      <p className="shoe-price">Rs. 2000</p>
                      <p className="shoe-rating">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div> */}

                {/* <div className="shoes-card">
                  <img src={shoe} alt="Shoes" />
                  <div className="shoes-card-content">
                    <p className="shoe-name">KSL 01</p>
                    <div className="shoes-flex">
                      <p className="shoe-price">Rs. 2000</p>
                      <p className="shoe-rating">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div> */}

                {productdata.map((product, i) => {
                  return (
                    <ShoeCard
                      name={product.name}
                      price={product.price}
                      rating={product.rating}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="product-filter">
            <div className="cart-content">
              <h3 className="filter-text">Cart</h3>
              <p className="cart-text-middle">What's stopping you ? designer</p>

              <div className="button-filter">
                <button type="button" className="cart-button">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
