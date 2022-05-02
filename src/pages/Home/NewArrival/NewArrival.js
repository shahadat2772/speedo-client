import React, { useEffect, useState } from "react";
import "./NewArrival.css";
import Slider from "react-slick";

const NewArrival = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/lastInventories")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  return (
    <div className="container newArrivalContainer">
      <h3 className="text-center">NEW ARRIVAL</h3>
      <div className="newArrivalsContainer">
        {inventories.map((inventory) => (
          <div key={inventory._id}>
            <div className="newArrivalInventory">
              <img className="img-fluid" src={inventory.img} alt="" />
              <h3>{inventory.name}</h3>
              <p>{inventory.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
