import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  faArrowRight,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
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
    const confirm = window.confirm("You wanna delete?");

    if (confirm) {
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
    }
  };

  return (
    <div className="manageInventoriesContainer container">
      <h2 className="text-center">MANAGE INVENTORIES</h2>

      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quant</th>
            <th>Supplier</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <tr key={inventory._id}>
              <td>{inventories.indexOf(inventory) + 1}</td>
              <td>{inventory.name}</td>
              <td>{inventory.quantity}</td>
              <td>{inventory.supplier}</td>
              <td className="deleteBtnTd">
                <button onClick={() => handleDeleteInventory(inventory._id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button
        className="manageInventoryBtn"
        onClick={() => navigate("/addinventory")}
      >
        <FontAwesomeIcon icon={faArrowRight} /> ADD INVENTORY
      </button>
    </div>
  );
};

export default ManageInventories;
