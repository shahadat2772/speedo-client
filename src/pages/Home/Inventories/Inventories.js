import React, { useEffect, useState } from "react";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <div className="inventoriesContainer container">
      <h2 className="text-center">INVENTORIES</h2>
      <div className="inventories">
        {inventories.map((inventory) => (
          <Inventory inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
