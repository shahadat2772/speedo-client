import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Inventories = () => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory?limit=6")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <div className="inventoriesContainer container">
      <p className="text-center inventoriesHeader">INVENTORIES</p>
      <div className="inventories">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <div className="">
        <button
          className="manageInventoryBtn"
          onClick={() => navigate("/manageinventories")}
        >
          <FontAwesomeIcon icon={faArrowRight} /> MANAGE INVENTORIES
        </button>
      </div>
    </div>
  );
};

export default Inventories;
