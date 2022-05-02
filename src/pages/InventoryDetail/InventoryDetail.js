import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./InventoryDetail.css";
import toast from "react-hot-toast";
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
    if (quantity > 0) {
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
            document.getElementById("restockQuantityInput").value = "";
          }
        });
    } else {
      toast.error("Please enter a positive number");
    }
  };

  const {
    name,
    img,
    price,
    description,
    _id,
    quantity,
    supplier,
    sold,
    email,
  } = inventory;

  return (
    <div className="detailsContainer ">
      <div className="details">
        <h2 className="text-center pb-3 mb-4">MANAGE STOCK</h2>
        <img className="img-fluid" src={img} alt="" />
        <h3 className="my-2">{name}</h3>
        <p>{description}</p>
        <div className="detailsLowerPart">
          <div className="coreInfoContainer">
            <div className="coreInfoPairs">
              <p>Price:</p>
              <p>${price}</p>
            </div>
            <div className="coreInfoPairs">
              <p>Quant:</p>
              <p>{quantity}</p>
            </div>
            <div className="coreInfoPairs">
              <p>Sold:</p>
              <p>{sold}</p>
            </div>
            <div className="coreInfoPairs">
              <p>Supplier:</p>
              <p className="ms-4">{supplier}</p>
            </div>
          </div>
          <div className="otherFunc">
            <form onSubmit={handleRestock} action="">
              <input
                id="restockQuantityInput"
                type="number"
                placeholder="Restock Quantity"
                name="restockQuantity"
              />
              <input className="restockBtn" type="submit" value="RESTOCK" />
            </form>
            <button
              className="deliveredBtn"
              onClick={() => {
                handleUpdateQuantity(_id);
              }}
            >
              Delivered
            </button>
            <button
              className="manageInventoryButton"
              onClick={() => navigate("/manageinventories")}
            >
              Manage Inventories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetail;
