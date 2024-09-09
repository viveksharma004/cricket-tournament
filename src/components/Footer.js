import React from "react";
import Facebook from "../images/Facebook.png"
import Twitter from "../images/Twitter.png"
import Linkedin from "../images/Linkedin.png"
import Instagram from "../images/Instagram.png"
import logo from "../images/logo.png"
const Footer = () => {
  return (
    <footer>
      <div className="newslatter" style={{ padding: "40px", backgroundColor: "green" }}>
        <div className="container">
          <div className="content">
            <h4 style={{ color: "white" }}>Subscribe to Us!</h4>
            <form action="index.html">
              <div className="search">
                <input name="Email" placeholder="Your Email" type="text" />
                <button type="submit" className="cus-btn dark">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-main" style={{ marginBottom: "64px" }}>
          <div className="footer-info">
            <div className="footer-about">
              <div className="logo">
                <a href="./index.html">
                  <img src={logo} alt="" height={150} width={150}/>
                </a>
              </div>
              <p className="dark-gray">
                Thanks for visiting our Cricket World <br />{" "}
                Hope You enjoyed a lot with us...
                {" "}
              </p>
            </div>
            <div className="menu">
              <h5 className="light-black">MENU</h5>
              <ul className="link unstyled">
                <li style={{ marginBottom: "16px" }}>
                  <a href="./index.html">
                    <p className="dark-gray">Home</p>
                  </a>
                </li>
                <li style={{ marginBottom: "16px" }}>
                  <a href="./about.html">
                    <p className="dark-gray">About us</p>
                  </a>
                </li>
                <li>
                  <a href="./tournaments.html">
                    <p className="dark-gray">Tournaments</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h5 className="light-black">CONTACT US</h5>
              <ul className="contact-list">
                <li style={{ marginBottom: "16px" }}>
                  {" "}
                  <i className="fal fa-map-marker-alt"></i>{" "}
                  <h6>Jhansi, Uttar Pradesh</h6>
                </li>
                <li style={{ marginBottom: "16px" }}>
                  <a href="tel:+918874314507">
                    {" "}
                    <i className="fal fa-phone-alt"></i>{" "}
                    <span>+91 8874314507</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:viveksharma4507@gmail.com">
                    <i className="fal fa-envelope"></i>{" "}
                    <span>viveksharma4507@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="social">
              <h5 className="light-black ">FOLLOW US!</h5>
              <div className="unstyled social-icons">
                <div>
                  <a href="./index.html">
                    <img src={Instagram} alt="" />
                  </a>
                </div>
                <div>
                  <a href="./index.html">
                    <img src={Facebook} alt="" />
                  </a>
                </div>
                <div>
                  <a href="./index.html">
                    <img src={Twitter} alt="" />
                  </a>
                </div>
                <div>
                  <a href="./index.html">
                    <img src={Linkedin} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="dark-gray text-center" style={{ marginBottom: "16px" }}>
          ©2024 Cricket World All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer;