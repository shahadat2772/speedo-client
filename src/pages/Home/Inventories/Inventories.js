import React, { useEffect, useState } from "react";
import "./Inventories.css";

const Inventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <div className="inventoriesContainer">
      <h2 className="text-center">INVENTORIES {inventories.length}</h2>
    </div>
  );
};

export default Inventories;
