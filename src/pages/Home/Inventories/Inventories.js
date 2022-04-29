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
      <h1 className="text-center">This is Inventories {inventories.length}</h1>
    </div>
  );
};

export default Inventories;
