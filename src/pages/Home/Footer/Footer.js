import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="footer container">
        {/* NewsLetter */}
        <div className="ps-3 newsletter">
          <p id="newsLetterHeader">NewsLetter</p>
          <p>
            By subscribing to our company newsletter you will always be
            up-to-date on our latest promotions, deals.
          </p>
          <div className="footerInputField">
            <input placeholder="Email Address" type="email" />
            <button className="subscribeBtn">Subscribe</button>
          </div>
        </div>
        {/* Contact US */}
        <div className="ps-3 contact">
          <p id="contactUsHeader">Contact Us</p>
          <p>
            <span className="contactIcon">
              <FontAwesomeIcon icon={faMapLocationDot} />
            </span>{" "}
            13 DIT Project, Middle Badda, Dhaka-1212.
          </p>
          <p>
            <span className="contactIcon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>{" "}
            speedo1@gmail.com
          </p>
          <p>
            <span className="contactIcon">
              <FontAwesomeIcon icon={faPhone} />
            </span>{" "}
            017121415131
          </p>
        </div>
        {/* Copyright and branding */}
        <div className="ps-3 copyRight">
          <h2>
            SPEE<span className="brandsRedPart">DO</span>
          </h2>
          <p>
            <span>©</span>
            <small>ALL RIGHTS RESERVED BY SPEEDO</small>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
