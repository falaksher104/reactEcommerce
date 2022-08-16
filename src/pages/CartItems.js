import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/cartitems.css";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteSignleCartProduct,
  selectCartProducts,
} from "../features/AddtocartSlice";
const CartItems = () => {
  const dispatch = useDispatch();
  const addToCartItems = useSelector(selectCartProducts);
  console.log({ addToCartItems });
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          {addToCartItems.map((elem, index) => {
            return (
              <div className="m-auto col-lg-8 my-2" key={index}>
                <div className="carItems">
                  <div className="cartItem d-flex justify-content-between align-items-center">
                    <img src={elem.productImage} alt="product" />
                    <h2>{elem.productName} </h2>
                    <h2>{elem.productPrice} $</h2>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(deleteSignleCartProduct(index));
                      }}
                    >
                      Delete
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

export default CartItems;
