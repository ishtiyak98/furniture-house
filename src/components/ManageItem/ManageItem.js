import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageItem = () => {
  const { _id } = useParams();
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${_id}`)
      .then((res) => res.json())
      .then((data) => setItemDetails(data));
  }, [_id]);

  const { image, name, description, supplier_name, price, quantity } =
    itemDetails;
  const [changeQuant, setChangeQuant] = useState(0);

  useEffect(() => {
    setChangeQuant(quantity);
  }, [quantity]);

  const handleDelivered = () => {
    if (changeQuant <= 0) {
      Swal.fire({
        title: "Error",
        text: "Minimum quantity reached",
        icon: "error",
      });
    } else {
      setChangeQuant(changeQuant - 1);

      toast.success("Item is delivered successfully!", {
        position: "bottom-right",
      });
    }
  };

  const handleRestock = (e) => {
    e.preventDefault();
    const restock = parseInt(e.target.restock.value);
    if (restock <= 0) {
      Swal.fire({
        title: "Error",
        text: "Minimum restock quantity reached",
        icon: "error",
      });
    }
    else{
      setChangeQuant(changeQuant + restock);
      toast.success("Item is restocked successfully!", {
        position: "bottom-right",
      });
      e.target.reset();
    }
  };

  useEffect(() => {
    const updatedItem = {image, name, description, supplier_name, price, changeQuant};

    fetch(`http://localhost:5000/inventory/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [changeQuant]);

  return (
    <div>
      <Header></Header>
      <div className="container py-2 my-5 py-md-3 my-md-3 py-lg-5 my-lg-5">
        <div className="w-75 mx-auto">
          <div className="row gx-lg-5">
            <div className="col-lg-4">
              <img className="img-fluid w-100 h-100" src={image} alt=""/>
            </div>
            <div className="col-lg-8 d-flex align-items-center">
              <div className="text-lg-start text-center mt-3 mt-lg-0">
                <h1 className="fw-bold mb-3">{name}</h1>
                <h3 className="mb-3">Supplier Name : {supplier_name}</h3>
                <p className="w-100 mb-3">{description}</p>
                <h5 className="mb-3">Price : ${price}</h5>
                <h5>Quantity : {changeQuant}</h5>
                <button className="btn btn-dark mb-4 mt-3" onClick={handleDelivered}>Delivered</button>
                <div>
                  <form onSubmit={handleRestock}>
                    <input type="number" name="restock" id="restock"/>
                    <input type="submit" value="Restock" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageItem;
