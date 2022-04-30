import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetail.css";

const InventoryDetail = () => {
  const { id } = useParams();

  const [inventory, setInventory] = useState({});

  console.log(inventory);

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);

  const handleUpdateQuantity = () => {
    fetch(`http://localhost:5000/updateQuantity`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inventory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const [res, updatedInventory] = data;
        if (res.acknowledged) {
          setInventory(updatedInventory);
        }
      });
  };

  const { name, img, price, description, _id, quantity, supplier, sold } =
    inventory;

  return (
    <div className="detailsContainer">
      <div className="details">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Quant: {quantity}</p>
        <p>Sold: {sold}</p>
        <p>Supplier: {supplier}</p>
        <button
          onClick={() => {
            handleUpdateQuantity(_id);
          }}
        >
          Delivered
        </button>
      </div>
    </div>
  );
};

export default InventoryDetail;
