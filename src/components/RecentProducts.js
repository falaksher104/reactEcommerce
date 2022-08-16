import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/recentproduct.css";
import { NavLink } from "react-router-dom";
import recentProducts from "../data/products";
import {
  addSingleProductDetail,
  addToCartProduct,
  selectCartProducts,
} from "../features/AddtocartSlice";

const RecentProducts = () => {
  const dispatch = useDispatch();
  const addToCart = useSelector(selectCartProducts);
  console.log(addToCart);
  return (
    <>
      <div className="recentProducts container my-5">
        <h1 className="text-center">
          <strong>Recent Products</strong>
        </h1>
        <div className="row my-5">
          {recentProducts.map((elem, index) => {
            // Object destructuring
            const {
              productId,
              productName,
              productPrice,
              productImage,
              productDescription,
            } = elem;
            return (
              <div className="col-lg-3 col-md-6 col-12" key={index}>
                <div className="recentProductCard">
                  <NavLink exact to="/product">
                    <img
                      src={productImage}
                      alt="producImage"
                      onClick={() => {
                        dispatch(
                          addSingleProductDetail({
                            productId: productId,
                            productName: productName,
                            productPrice: productPrice,
                            productImage: productImage,
                            productDescription: productDescription,
                          })
                        );
                      }}
                    />
                  </NavLink>
                  <h2 className="mx-4 my-2 text-center">{productName} </h2>
                  <h3 className="mx-4 my-2 text-center">{productPrice} $</h3>
                  <div className="text-center">
                    <button
                      className="mb-5"
                      onClick={() => {
                        dispatch(
                          addToCartProduct({
                            productId: productId,
                            productName: productName,
                            productPrice: productPrice,
                            productImage: productImage,
                            productDescription: productDescription,
                          })
                        );
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentProducts;
