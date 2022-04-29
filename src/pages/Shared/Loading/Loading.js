import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="formBanner">
      <div className="spinnerContainer">
        <Spinner animation="border" variant="secondary" />
      </div>
    </div>
  );
};

export default Loading;
