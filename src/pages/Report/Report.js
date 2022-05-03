import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Report.css";
import {
  faCar,
  faDroplet,
  faMoneyBill1Wave,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const Report = () => {
  return (
    <div className="reputationBg">
      <div className="container  reports">
        <div className="soldCars">
          <FontAwesomeIcon className="icon" icon={faCar} />
          <p className="number">2,200</p>
          <small>Cars Sold</small>
        </div>
        <div className="soldAmount">
          <FontAwesomeIcon className="icon" icon={faMoneyBill1Wave} />
          <p className="number">750,000</p>
          <small>Amount Sold</small>
        </div>
        <div className="customerSatisfaction">
          <FontAwesomeIcon className="icon" icon={faUserGroup} />
          <p className="number">100%</p>
          <small>Customer Satisfaction</small>
        </div>
        <div className="oilChanges">
          <FontAwesomeIcon className="icon" icon={faDroplet} />
          <p className="number">3,600</p>
          <small>Oil Changes</small>
        </div>
      </div>
    </div>
  );
};

export default Report;
