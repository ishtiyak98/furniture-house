import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container pt-5">
        <div className="row gy-3">
          <div className="col-lg-4">
            <p className="fw-lighter">
              Millions of people of all ages and from around the world are
              improving their lives with us
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row gy-3">
              <div className="col-6 col-md-4 col-lg-4">
                <h4 className="footer-header mb-3">BROWSE BY</h4>
                <h6><a className="footer-option text-decoration-none fw-lighter" href="#brand">Brand</a></h6>
                <h6><a className="footer-option text-decoration-none fw-lighter" href="#product">Product</a></h6>
                <h6><a className="footer-option text-decoration-none fw-lighter" href="#category">Category</a></h6>
              </div>
              <div className="col-6 col-md-4 col-lg-4">
                <h4 className="footer-header mb-3">OUR COMPANY</h4>
                <h6><a className="footer-option text-decoration-none fw-lighter" href="#brand">About</a></h6>
                <h6><a className="footer-option text-decoration-none fw-lighter" href="#product">News</a></h6>
                <h6><a className="footer-option text-decoration-none fw-lighter" href="#category">Contact</a></h6>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start my-3 my-lg-0">
                <a href="https://www.facebook.com" rel="noreferrer" target={"_blank"}>
                  <span className="social-icon mx-2">
                    <FaFacebookF size={"1.2em"}></FaFacebookF>
                  </span>
                </a>
                <a href="https://twitter.com/" rel="noreferrer" target={"_blank"}>
                  <span className="social-icon mx-2">
                    <FaTwitter size={"1.2em"}></FaTwitter>
                  </span>
                </a>
                <a href="https://www.youtube.com" rel="noreferrer" target={"_blank"}>
                  <span className="social-icon mx-2">
                    <FaYoutube size={"1.2em"}></FaYoutube>
                  </span>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-md-5 mt-lg-5 pb-2">
          <h6 className="text-center fw-lighter py-3">
            Copyright @ 2022{" "}
            <a
              className="footer-user text-decoration-none text-warning"
              href="https://github.com/ishtiyak98"
              rel="noreferrer"
              target="_blank"
            >
              Rifat-Ishtiyak
            </a>
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
