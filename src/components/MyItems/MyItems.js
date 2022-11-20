import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MyItems.css";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://furniture-house-api.onrender.com/myItems", {
      headers: {
        authorization: `${user.email} ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "forbidden access") {
          Swal.fire({
            title: "Un-authorized Access",
            text: "Please Login Again",
            icon: "error",
          });
          signOut(auth);
        } else {
          setItems(data);
        }
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete the item?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://furniture-house-api.onrender.com/deleteItem/${id}`, {
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
      <div className="my-items">
        <div className="container py-5 my-4">
          <h2 className="text-center fw-bold mb-4">My Inventory Items</h2>

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
              {items &&
                items.map((item) => (
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
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyItems;
