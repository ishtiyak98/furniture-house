import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch("http://localhost:5000/inventory")
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  console.log(items);
  return (
    <div className="py-5 my-5 container">
      <h1 className="text-center">Items</h1>
      <div className="row gx-4 gy-5">
        {
            items.map( item => <ItemCard key={item._id} item={item}></ItemCard> )
        }
      </div>
    </div>
  );
};

export default Items;
