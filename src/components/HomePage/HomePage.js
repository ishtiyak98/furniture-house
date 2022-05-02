import React from "react";
import Footer from "../Footer/Footer";
import HomeBanner from "../HomeBanner/HomeBanner";
import Items from "../Items/Items";

const HomePage = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Items></Items>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
