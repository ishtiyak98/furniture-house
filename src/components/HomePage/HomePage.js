import React from "react";
import ContactUs from "../ContactUs/ContactUs";
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
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
