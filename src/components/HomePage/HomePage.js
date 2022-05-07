import React from "react";
import Footer from "../Footer/Footer";
import HomeBanner from "../HomeBanner/HomeBanner";
import Items from "../Items/Items";
import OurServices from "../OurServices/OurServices";

const HomePage = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Items></Items>
      <OurServices></OurServices>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
