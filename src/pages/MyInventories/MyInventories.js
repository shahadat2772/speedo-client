import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { auth } from "../../firebase.init";

const MyInventories = () => {
  const [user, loading] = useAuthState(auth);
  const [inventories, setInventories] = useState([]);

  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/inventory?email=${email}`)
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
      <h2 className="text-center">Your Inventories {inventories.length}</h2>
      <div className="myInventoriesContainer">
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

export default MyInventories;
