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
        <p className="inventoryHeader">{name}</p>
        <p>{description.slice(0, 74)}</p>
        <div className="inventoryInfoContainer">
          <div className="infoPairs d-flex">
            <p>Quantity:</p> <p>{quantity}</p>
          </div>
          <div className="infoPairs d-flex">
            <p>Sold:</p> <p>{sold}</p>
          </div>
          <div className="infoPairs d-flex">
            <p>Price:</p> <p>${price}</p>
          </div>
          <div className="infoPairs d-flex">
            <p>Supplier:</p> <p className="ms-4">{supplier}</p>
          </div>
        </div>
        <button
          className="stockUpdateBtn"
          onClick={() => navigate(`/inventory/${_id}`)}
        >
          Stock Update
        </button>
      </div>
    </div>
  );
};

export default Inventory;
