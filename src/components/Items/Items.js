import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);
  const [homeItemSize, setItemSize] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://furniture-house-api.onrender.com/inventory?itemSize=${homeItemSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setItems(data);
      });
  }, [homeItemSize]);

  if (isLoading) {
    return (
      <div className="text-center items-area d-flex align-items-center justify-content-center">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  return (
    <div className="py-5 my-5 container">
      <h1 className="text-center mb-5 fw-bold">
        Our <span className="text-warning">Inventory</span>
      </h1>
      <div className="row gx-lg-5 gy-5">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
      <div className="text-center">
        <div
          onClick={() => setItemSize(0)}
          className="mt-5 px-4 btn btn-dark d-inline-block text-white text-decoration-none"
        >
          Show All Items
        </div>
      </div>
    </div>
  );
};

export default Items;
