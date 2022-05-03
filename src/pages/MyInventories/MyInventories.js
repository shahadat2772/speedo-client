import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const MyInventories = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [inventories, setInventories] = useState([]);

  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/inventory?email=${email}`)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  const handleDeleteInventory = (id) => {
    const confirm = window.confirm("You wanna delete?");
    if (confirm) {
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
    }
  };

  return (
    <div className="manageInventoriesContainer container">
      <h2 className="text-center">YOUR INVENTORIES</h2>

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
            <tr>
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

export default MyInventories;
