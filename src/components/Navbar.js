import React from "react";
import "../assets/css/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            Ecommerce
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <div className="cartIcon d-flex flex-column">
                <span className="cartCount">0</span>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <p className="mx-1 cartIconPrice">34.5$</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
