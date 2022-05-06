import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewArrival.css";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const NewArrival = () => {
  const [spinner, setSpinner] = useState(false);

  // Navigator
  const navigate = useNavigate();

  const [inventories, setInventories] = useState([]);

  // Getting last four inventories
  useEffect(() => {
    const getLastFourInventories = async () => {
      try {
        setSpinner(true);
        const { data } = await axios.get(
          `https://hidden-chamber-41609.herokuapp.com/lastInventories`
        );
        setInventories(data);
        setSpinner(false);
      } catch (error) {
        setSpinner(false);
        console.error(error);
      }
    };
    getLastFourInventories();
  }, []);

  return (
    <div className="container newArrivalContainer">
      <p className="text-center newArrivalHeader">NEW ARRIVAL</p>
      {/* Setting the spinner */}
      {spinner ? (
        <div className="my-4 d-flex justify-content-center spinnerInManageInventory">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div className="newArrivalItemsContainer">
          {inventories.map((inventory) => (
            <div key={inventory._id}>
              <div className="newArrivalInventory">
                <img className="img-fluid" src={inventory.img} alt="" />
                <p
                  onClick={() => navigate(`/inventory/${inventory._id}`)}
                  className="newArrivalItemHeader"
                >
                  {inventory.name}
                </p>
                <p className="newArrivalItemPriceTag">${inventory.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewArrival;
