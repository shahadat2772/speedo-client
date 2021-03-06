import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./InventoryDetail.css";
import toast from "react-hot-toast";

const InventoryDetail = () => {
  // Navigator
  const navigate = useNavigate();

  const { id } = useParams();

  const [inventory, setInventory] = useState({});

  useEffect(() => {
    fetch(`https://hidden-chamber-41609.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);

  // Updating QUANTITY
  const handleUpdateQuantity = () => {
    fetch(`https://hidden-chamber-41609.herokuapp.com/updateQuantity`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inventory),
    })
      .then((res) => res.json())
      .then((data) => {
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
    if (quantity > 0) {
      fetch(
        `https://hidden-chamber-41609.herokuapp.com/restock?restockQuantity=${quantity}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(inventory),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const [res, updatedInventory] = data;
          if (res.acknowledged) {
            setInventory(updatedInventory);
            document.getElementById("restockQuantityInput").value = "";
          }
        });
    } else {
      toast.error("Please enter a positive number", {
        id: "PleaseEnterAPositiveNumber",
      });
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
              <p>{quantity !== 0 ? quantity : "Stock-out"}</p>
            </div>
            <div className="coreInfoPairs">
              <p>Sold:</p>
              <p>{sold}</p>
            </div>
            <div className="coreInfoPairs">
              <p>Supplier:</p>
              <p>{supplier}</p>
            </div>
            <div className="coreInfoPairs">
              <p>ID:</p>
              <p className="ms-2">{_id}</p>
            </div>
          </div>
          <div className="otherFunc">
            {/* Restock Form */}
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
                if (quantity !== 0) {
                  handleUpdateQuantity(_id);
                } else {
                  toast.error("Please restock this item", {
                    id: "RestockItemErr",
                  });
                }
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
