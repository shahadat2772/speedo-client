import React from "react";
import { useNavigate } from "react-router-dom";
import "./Inventory.css";

const Inventory = ({ inventory }) => {
  // Navigator
  const navigate = useNavigate();

  const { name, img, price, description, _id, quantity, supplier, sold } =
    inventory;
  return (
    <div className="inventoryContainer">
      <div className="inventory">
        <img className="img-fluid" src={img} alt="" />
        <h3>{name}</h3>
        <p>{description.slice(0, 80)}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Sold: {sold}</p>
        <p>Supplier: {supplier}</p>
        <button onClick={() => navigate(`/inventory/${_id}`)}>
          Manage Stock
        </button>
      </div>
    </div>
  );
};

export default Inventory;
