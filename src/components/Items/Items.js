import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ItemCard from "../ItemCard/ItemCard";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);

  

  useEffect(() => {
      fetch("http://localhost:5000/inventory?itemSize=6")
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  if (items.length === 0) {
    return(
      <div className="text-center items-area d-flex align-items-center justify-content-center">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  return (
    <div className="py-5 my-5 container">
      <h1 className="text-center mb-5 fw-bold">My Inventory</h1>
      <div className="row gx-lg-5 gy-5">
        {
            items.map( item => <ItemCard key={item._id} item={item}></ItemCard> )
        }
      </div>
    </div>
  );
};

export default Items;
