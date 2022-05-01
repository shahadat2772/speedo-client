import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";

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
      <h2 className="text-center">INVENTORIES</h2>
      <div className="inventories">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
      <button onClick={() => navigate("/manageinventories")}>
        Manage Inventories
      </button>
    </div>
  );
};

export default Inventories;
