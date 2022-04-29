import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="footer container">
        <div className="ps-2 newsletter">
          <h4>NewsLetter</h4>
          <p>
            By subscribing to our company newsletter you will always be
            up-to-date on our latest promotions, deals.
          </p>
          <div className="footerInputField">
            <input placeholder="Email Address" type="email" />
            <button className="subscribeBtn">Subscribe</button>
          </div>
        </div>
        <div className="ps-2 contact">
          <h4>Contact Us</h4>
          <p>
            <b>Address:</b> 13 DIT Project, Middle Badda, Dhaka-1212.
          </p>
          <p>
            <b>Phone:</b> 017101010101
          </p>
          <p>
            <b>Email:</b> speedo1@gmail.com
          </p>
        </div>
        <div className="ps-2 copyRight">
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
