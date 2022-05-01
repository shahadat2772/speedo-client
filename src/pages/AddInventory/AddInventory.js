import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "./AddInventory.css";

const AddInventory = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Setting default sold quantity
    data["sold"] = "0";
    console.log(data);

    fetch("http://localhost:5000/addInventory", {
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
    <div className="my-4">
      <h2 className="text-center">Add Inventory</h2>
      <form className="addInventoryForm" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Inventory Name" required {...register("name")} />
        <input placeholder="Quantity" required {...register("quantity")} />
        <input placeholder="Supplier Name" required {...register("supplier")} />
        <input placeholder="Price" required {...register("price")} />
        <input placeholder="Img URL" required {...register("img")} />
        <textarea
          required
          placeholder="Short Description"
          {...register("description")}
        />
        <input value={`ADD ITEM`} type="submit" />
      </form>
    </div>
  );
};

export default AddInventory;
