import React from "react";
import { useNavigate } from "react-router-dom";
import "./ItemCard.css"
const ItemCard = ({ item }) => {
  const { _id,name, image, description, price, quantity, supplier_name } = item;
  const navigate = useNavigate();
  
  return (
    <div className="col-lg-4 col-md-6 item-card-column">
      <div className="item-card p-3">
        <img className="img-fluid w-100" src={image} alt="" />
        <div className="mt-3 mb-2 text-center">
          <h4 className="mb-3">{name}</h4>
          <p className="text-secondary">{description}</p>
          <h6  className="mb-3">Supplier: {supplier_name}</h6>
          <div className="d-flex justify-content-between mb-3">
            <h6>Price: $<span className="fw-normal number">{price}</span></h6>
            <h6>Quantity: <span className="fw-normal number">{quantity}</span></h6>
          </div>
          <button className="btn btn-dark w-50 manage-btn" onClick={()=>{navigate(`/inventory/${_id}`)}}>Manage</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
