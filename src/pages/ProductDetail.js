import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectSingleProductDetail } from "../features/AddtocartSlice";
import { NavLink } from "react-router-dom";
const ProductDetail = () => {
  const selectData = useSelector(selectSingleProductDetail);
  console.log({ selectData });
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <img src={selectData.productImage} alt="product 1" />
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <h3>{selectData.productName} </h3>
            <p>{selectData.productPrice} </p>
            <p>{selectData.productDescription} </p>
            <NavLink exact to="/">
              <button className="btn btn-primary my-5"> Back </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
