import React from "react";
import "../assets/css/navbar.css";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../features/AddtocartSlice";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const addToCart = useSelector(selectCartProducts);
  console.log({ addToCart });
  var totalCost = 0;
  for (var a = 0; a < addToCart.length; a++) {
    totalCost = addToCart[a].productPrice + totalCost;
  }
  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container">
          <NavLink className="navbar-brand" exact to="/">
            Ecommerce
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink exact to="/cartproduct">
              <div className="d-flex align-items-center">
                <div className="cartIcon d-flex flex-column">
                  {addToCart.length > 0 && (
                    <span className="cartCount">{addToCart.length}</span>
                  )}

                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
                {totalCost > 0 && (
                  <p className="mx-1 cartIconPrice">{totalCost} $</p>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
