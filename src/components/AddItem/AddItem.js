import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import "./AddItem.css";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const addItem = (data, e) => {
    console.log(data);
    fetch("https://furniture-house-api.onrender.com/newItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Added!",
            text: "Item added successfully",
            icon: "success",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="container my-5 py-4">
        <h2 className="text-center fw-bold mb-4">Add New Item</h2>

        <div className="add-form d-flex justify-content-center">
          <form className="d-flex flex-column" onSubmit={handleSubmit(addItem)}>
            <input
              className="mb-4 py-2 px-2 border border-2 rounded"
              type={"text"}
              placeholder="Item name"
              {...register("name", { required: true })}
            />
            <input
              className="mb-4 py-2 px-2 border border-2 rounded"
              type={"text"}
              placeholder="Image link"
              {...register("image", { required: true })}
            />
            <input
              className="mb-4 py-2 px-2 border border-2 rounded"
              type={"text"}
              placeholder="Description"
              {...register("description", { required: true })}
            />
            <input
              className="mb-4 py-2 px-2 border border-2 rounded"
              type={"number"}
              placeholder="Price"
              {...register("price", { required: true })}
            />
            <input
              className="mb-4 py-2 px-2 border border-2 rounded"
              type={"number"}
              placeholder="Quantity"
              {...register("quantity", { required: true })}
            />
            <input
              className="mb-4 py-2 px-2 border border-2 rounded"
              type={"text"}
              placeholder="supplierName"
              {...register("supplier_name", { required: true })}
            />

            <input
              className="mb-4 py-2 px-2 border border-2 rounded"
              type={"email"}
              placeholder="email"
              value={user.email}
              readOnly
              {...register("userEmail", { required: true })}
            />
            <input className="mb-4 btn btn-dark" type="submit" />
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddItem;
