import React from "react";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { _id,name, image, description, price, quantity, supplier_name } = item;
  const navigate = useNavigate();
  console.log(_id);
  
  return (
    <div className="col-lg-4 item-card p-5">
      <img className="img-fluid" src={image} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
      <h5>Supplier: {supplier_name}</h5>
      <div className="d-flex justify-content-between ">
        <h5>Price: {price}</h5>
        <h5>Quantity: {quantity}</h5>
      </div>
      <button className="btn btn-dark" onClick={()=>{navigate(`/inventory/${_id}`)}}>Manage</button>
    </div>
  );
};

export default ItemCard;
