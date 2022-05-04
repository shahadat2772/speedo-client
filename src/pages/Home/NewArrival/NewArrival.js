import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewArrival.css";

const NewArrival = () => {
  // Navigator
  const navigate = useNavigate();
  const [inventories, setInventories] = useState([]);

  // Getting last four inventories
  useEffect(() => {
    fetch("https://hidden-chamber-41609.herokuapp.com/lastInventories")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <div className="container newArrivalContainer">
      <p className="text-center newArrivalHeader">NEW ARRIVAL</p>
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
    </div>
  );
};

export default NewArrival;
