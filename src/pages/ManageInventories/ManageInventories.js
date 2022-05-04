import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./ManageInventories.css";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const ManageInventories = () => {
  const [spinner, setSpinner] = useState(false);
  console.log(spinner);

  const navigate = useNavigate();
  const [inventories, setInventories] = useState([]);

  // Getting inventories

  useEffect(() => {
    const getItems = async () => {
      setSpinner(true);
      try {
        setSpinner(true);
        const { data } = await axios.get(
          `https://hidden-chamber-41609.herokuapp.com/inventory`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setInventories(data);
        setSpinner(false);
      } catch (error) {
        setSpinner(false);
        console.error(error);
      }
    };

    getItems();
  }, []);

  // Deleting Inventory
  const handleDeleteInventory = (id) => {
    const confirm = window.confirm("You wanna delete?");

    if (confirm) {
      fetch(
        `https://hidden-chamber-41609.herokuapp.com/deleteInventory?id=${id}`,
        {
          method: "DELETE",
        }
      )
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

      {spinner ? (
        <div className="my-4 d-flex justify-content-center">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div>
          <Table size="sm" className="table" striped bordered hover>
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
                    <button
                      onClick={() => handleDeleteInventory(inventory._id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

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
