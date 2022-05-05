import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const Inventories = () => {
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const [inventories, setInventories] = useState([]);

  // Getting inventories
  useEffect(() => {
    const getSixInventories = async () => {
      try {
        setSpinner(true);
        const { data } = await axios.get(
          "https://hidden-chamber-41609.herokuapp.com/getFirstSixInventory"
        );
        setInventories(data);
        setSpinner(false);
      } catch (error) {
        setSpinner(false);
        console.error(error);
      }
    };

    getSixInventories();
  }, []);

  return (
    <div className="inventoriesContainer container">
      <p className="text-center inventoriesHeader">INVENTORIES</p>

      <div className="inventories">
        {spinner ? (
          <div className="my-4 d-flex justify-content-center">
            <Spinner animation="border" variant="dark" />
          </div>
        ) : (
          <div className="maniInventoriesContainer">
            {inventories.map((inventory) => (
              <Inventory key={inventory._id} inventory={inventory}></Inventory>
            ))}
          </div>
        )}
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
