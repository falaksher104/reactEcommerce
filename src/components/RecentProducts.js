import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/recentproduct.css";

import recentProducts from "../data/products";
import {
  addToCartProduct,
  selectCartProducts,
} from "../features/AddtocartSlice";

const RecentProducts = () => {
  const dispatch = useDispatch();
  const addToCart = useSelector(selectCartProducts);
  console.log(addToCart);
  // for (var key in addToCart) {
  //   if (addToCart.hasOwnProperty(key)) {
  //     console.log(key + " -> " + addToCart[key]);
  //     console.log({ key });
  //   }
  // }

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
              productName,
              productPrice,
              productImage,
              productDescription,
            } = elem;
            return (
              <div className="col-lg-3 col-md-6 col-12" key={index}>
                <div className="recentProductCard">
                  <img src={productImage} alt="producImage" />
                  <h2 className="mx-4 my-2">{productName} </h2>
                  <h3 className="mx-4 my-2">{productPrice}</h3>
                  <p className="mx-4 my-2">{productDescription} </p>
                  <div className="text-center">
                    <button
                      className="mb-5"
                      onClick={() => {
                        dispatch(
                          addToCartProduct({
                            productName: productName,
                            productPrice: productPrice,
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
