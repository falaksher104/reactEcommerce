import React from "react";
import "../assets/css/recentproduct.css";
import product1 from "../assets/images/product_1.png";
const RecentProducts = () => {
  return (
    <>
      <div className="recentProducts container my-5">
        <h1 className="text-center">
          <strong>Recent Products</strong>
        </h1>
        <div className="row my-5">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="recentProductCard">
              <img src={product1} />
              <h2 className="mx-4 my-3">Jacket coat </h2>
              <h3 className="mx-4 my-3">23.4$</h3>
              <div className="text-center">
                <button className="mb-5">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12"></div>
          <div className="col-lg-3 col-md-6 col-12"></div>
          <div className="col-lg-3 col-md-6 col-12"></div>
        </div>
      </div>
    </>
  );
};

export default RecentProducts;
