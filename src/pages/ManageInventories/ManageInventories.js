import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ManageInventories.css";

const ManageInventories = () => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  const handleDeleteInventory = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteInventory?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const restInventories = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(restInventories);
        }
      });
  };

  return (
    <div>
      <h2 className="text-center mt-3">
        This is Manage inventory {inventories.length}
      </h2>
      <div className="manageInventoriesContainer">
        {inventories.map((inventory) => (
          <div key={inventory._id}>
            <h3>{inventory.name}</h3>
            <button onClick={() => handleDeleteInventory(inventory._id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
