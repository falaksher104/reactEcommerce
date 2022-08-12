import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RecentProducts from "../components/RecentProducts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <RecentProducts />
    </>
  );
};

export default Home;
