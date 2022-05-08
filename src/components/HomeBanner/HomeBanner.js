import React from "react";
import Header from "../Header/Header";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="top-banner">
      <Header></Header>

      <div className="d-flex justify-content-center align-items-center banner-box">
        <div className="container banner-text">
            <h1 className="text-center ">Furniture House</h1>
            <h2 className="text-center ">Store.Transport.Anytime</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
