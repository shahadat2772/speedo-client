import {
  faArrowRight,
  faTrashCan,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import { Spinner } from "react-bootstrap";

const MyInventories = () => {
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      try {
        setSpinner(true);
        const { data } = await axios.get(
          `https://hidden-chamber-41609.herokuapp.com/myInventories?email=${email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setInventories(data);
        setSpinner(false);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          setSpinner(false);
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getMyItems();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  // Deleting inventory
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
      <h2 className="text-center">MY INVENTORIES</h2>
      {/* Setting the spinner */}
      {spinner ? (
        <div className="my-4 d-flex justify-content-center spinnerInManageInventory">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
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
                  <button onClick={() => handleDeleteInventory(inventory._id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <button
        className="manageInventoryBtn"
        onClick={() => navigate("/addinventory")}
      >
        <FontAwesomeIcon icon={faPlusCircle} /> ADD INVENTORY
      </button>
    </div>
  );
};

export default MyInventories;
