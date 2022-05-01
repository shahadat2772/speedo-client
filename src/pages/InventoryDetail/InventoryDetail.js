import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./InventoryDetail.css";

const InventoryDetail = () => {
  const { id } = useParams();

  // Navigator
  const navigate = useNavigate();

  const [inventory, setInventory] = useState({});

  console.log(inventory);

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);

  // Updating QUANTITY
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

  // Handling Restock
  const handleRestock = (event) => {
    event.preventDefault();
    const quantity = event.target.restockQuantity.value;
    console.log(quantity);

    fetch(`http://localhost:5000/restock?restockQuantity=${quantity}`, {
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
        <div className="mt-2">
          <form onSubmit={handleRestock} action="">
            <input
              type="number"
              placeholder="Restock Quantity"
              name="restockQuantity"
              id=""
            />
            <input type="submit" value="RESTOCK" />
            <button onClick={() => navigate("/manageinventories")}>
              Manage Inventories
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetail;
