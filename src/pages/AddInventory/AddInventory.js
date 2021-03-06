import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./AddInventory.css";

const AddInventory = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  // handling submit for adding a new item
  const onSubmit = (data) => {
    // Setting default sold quantity
    data["sold"] = "0";

    fetch("https://hidden-chamber-41609.herokuapp.com/addInventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
          toast.success("Inventory Added.");
        }
      });
  };

  return (
    <div
      className="d-flex justify-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="addItemContainer container">
        <h2 className="text-center">ADD INVENTORY</h2>
        {/* Form */}
        <form className="addInventoryForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            type={`text`}
            placeholder="Inventory Name"
            required
            {...register("name")}
          />
          <input
            type={`number`}
            placeholder="Quantity"
            required
            {...register("quantity")}
          />
          <input
            type={`text`}
            placeholder="Supplier Name"
            required
            {...register("supplier")}
          />
          <input
            type={`number`}
            placeholder="Price"
            required
            {...register("price")}
          />
          <input
            type={`text`}
            placeholder="Img URL"
            required
            {...register("img")}
          />
          <input
            type={`email`}
            placeholder="Email"
            required
            {...register("email")}
          />
          <textarea
            type={`text`}
            required
            placeholder="Short Description"
            {...register("description")}
          />
          <input className="addItemBtn" value={`Add Inventory`} type="submit" />
        </form>
        <div className="">
          <button
            className="manageInventoryBtn"
            onClick={() => navigate("/myinventories")}
          >
            <FontAwesomeIcon icon={faArrowRight} /> MY INVENTORIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
