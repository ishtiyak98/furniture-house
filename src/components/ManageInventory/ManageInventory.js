import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    {" "}
                    Delete{" "}
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
