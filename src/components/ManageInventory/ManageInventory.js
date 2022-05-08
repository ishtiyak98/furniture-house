import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ManageInventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://radiant-harbor-32543.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  if (items.length === 0) {
    return (
      <div style={{height : "100vh"}} className="text-center d-flex align-items-center justify-content-center">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete the item?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://radiant-harbor-32543.herokuapp.com/deleteItem/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const restItems = items.filter((item) => item._id !== id);
              setItems(restItems);

              Swal.fire("Deleted!", "", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <Header></Header>
      <div className="container py-5 my-4">
        <h2 className="text-center fw-bold mb-4">Manage Inventory</h2>

        <div className="text-center">
          <Link to={"/addItem"} className="mb-4 px-4 btn btn-dark d-inline-block text-white text-decoration-none">add new item</Link>
        </div>

        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Item</th>
              <th>Supplier</th>
              <th>Quantity</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.supplier_name}</td>
                <td>{item.quantity}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger px-4 "
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ManageInventory;
