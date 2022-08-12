import React from "react";
import slider1 from "../assets/images/slider_1.png";
import slider2 from "../assets/images/slider_2.png";
import "../assets/css/header.css";
const Header = () => {
  return (
    <div className="headerSection container-fluid2">
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12  d-flex justify-content-center align-items-center flex-column">
                <div className="sliderDescription">
                  <h1 data-aos="slide-up" data-aos-duration="2000">
                    <strong>Wooden Craft</strong>
                  </h1>
                  <p data-aos="slide-up" data-aos-duration="2000">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum consequuntur odio incidunt, in voluptatem dicta rem
                    velit eligendi reprehenderit dolore maiores omnis esse quae
                    sit quod, laborum corporis praesentium aut!
                  </p>
                  <button data-aos="slide-up" data-aos-duration="2000">
                    Buy Now <i class="fa-solid fa-shop"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <img
                  src={slider1}
                  data-aos="slide-left"
                  data-aos-duration="2000"
                  className="d-block w-100 img-fluid"
                  alt="slider1"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center flex-column">
                <div className="sliderDescription">
                  <h1 data-aos="slide-up" data-aos-duration="2000">
                    <strong>Wooden Craft</strong>
                  </h1>
                  <p data-aos="slide-up" data-aos-duration="2000">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum consequuntur odio incidunt, in voluptatem dicta rem
                    velit eligendi reprehenderit dolore maiores omnis esse quae
                    sit quod, laborum corporis praesentium aut!
                  </p>
                  <button data-aos="slide-up" data-aos-duration="2000">
                    Buy Now <i class="fa-solid fa-shop"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <img
                  src={slider2}
                  data-aos="slide-left"
                  data-aos-duration="2000"
                  className="d-block w-100 img-fluid"
                  alt="slider2"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
