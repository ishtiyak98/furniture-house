import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";
import "./MangeItem.css";
import { Spinner } from "react-bootstrap";

const ManageItem = () => {
  const { _id } = useParams();
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    fetch(`https://radiant-harbor-32543.herokuapp.com/inventory/${_id}`)
      .then((res) => res.json())
      .then((data) => setItemDetails(data));
  }, [_id]);

  console.log(itemDetails);

  if (Object.keys(itemDetails).length === 0) {
    return (
      <div
        style={{ height: "100vh" }}
        className="text-center d-flex align-items-center justify-content-center"
      >
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  const { image, name, description, supplier_name, price, quantity } = itemDetails;

  const handleDelivered = () => {
    const { quantity, ...rest } = itemDetails;
    if (quantity <= 0) {
      Swal.fire({
        title: "Sold Out",
        text: "Minimum quantity reached",
        icon: "error",
      });
    } else {
      const newQuantity = quantity - 1;
      const updatedDetails = { quantity: newQuantity, ...rest };
      setItemDetails(updatedDetails);
      updateDB(updatedDetails);
      toast.success("Item is delivered successfully!", {
        position: "bottom-right",
      });
    }
  };

  const handleRestock = (e) => {
    e.preventDefault();
    const { quantity, ...rest } = itemDetails;
    const restock = parseInt(e.target.restock.value);
    if (restock <= 0) {
      Swal.fire({
        title: "Error",
        text: "Minimum restock quantity reached",
        icon: "error",
      });
    } else {
      const newQuantity = quantity + restock;
      const updatedDetails = { quantity: newQuantity, ...rest };
      setItemDetails(updatedDetails);
      updateDB(updatedDetails);
      toast.success("Item is restocked successfully!", {
        position: "bottom-right",
      });
      e.target.reset();
    }
  };

  const updateDB = (updatedDetails) => {
    fetch(`https://radiant-harbor-32543.herokuapp.com/inventory/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Header></Header>
      <div className="container py-2 my-5 py-md-3 my-md-3 py-lg-5 my-lg-5">
        <div className="text-end">
          <Link
            to={"/manage_inventory"}
            className="mb-4 px-4 btn btn-dark d-inline-block text-white text-decoration-none"
          >
            Manage Inventories
          </Link>
        </div>
        <div className="w-75 mx-auto">
          <div className="row gx-lg-5">
            <div className="col-lg-4">
              <img className="img-fluid w-100 h-100" src={image} alt="" />
            </div>
            <div className="col-lg-8 d-flex align-items-center">
              <div className="text-lg-start text-center mt-3 mt-lg-0">
                <h1 className="fw-bold mb-3">{name}</h1>
                <h3 className="mb-3">Supplier Name : {supplier_name}</h3>
                <p className="w-100 mb-3">{description}</p>
                <h5 className="mb-3">Price : ${price}</h5>
                <h5>Quantity : {quantity}</h5>
                <button
                  className="btn btn-dark mb-4 mt-3 delivered-btn"
                  onClick={handleDelivered}
                >
                  Delivered
                </button>
                <div>
                  <form onSubmit={handleRestock}>
                    <input
                      className="restock-field"
                      type="number"
                      name="restock"
                      id="restock"
                      required
                    />
                    <input
                      className="restock-btn"
                      type="submit"
                      value="Restock"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default ManageItem;
