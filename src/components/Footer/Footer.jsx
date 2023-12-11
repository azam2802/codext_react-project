import React from "react";
import "./Footer.css";
import Logo from "../../img/Logo.svg";
import twitterLogo from "../../img/twitter-circled.svg";
import facebookLogo from "../../img/facebook-circled.svg";
import linkedinLogo from "../../img/linkedin-circled.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <footer>
          <div className="row">
            <div className="col-3">
              <img src={Logo} alt="Logo" id="Logo" />
              <p>
                Lorem ipsum dolor sit amet, consect etur adipiscing elit.
                Ullamcorper purus eleifend purus faucibus faucibus.
              </p>
              <div className="socials">
                <img src={twitterLogo} alt="Twitter" />
                <img src={facebookLogo} alt="Facebook" />
                <img src={linkedinLogo} alt="LinkedIn" />
              </div>
            </div>
            <div className="col-3">
              <h3>Resources</h3>
              <div className="nav">
                <a href="#">Services</a>
                <a href="#">Pricing</a>
                <a href="#">Testimonials</a>
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="col-3">
              <h3>Usefull links</h3>
              <div className="nav">
                <a href="#">Terms of Services</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Contact us</a>
              </div>
            </div>
            <div className="col-3">
              <h3>New settlers</h3>
              <p>Sign up and receive the lastest news via email.</p>
              <input type="text" placeholder="Email address" />
              <button>Send</button>
            </div>
          </div>
        </footer>
		<h4>Copyright 2021 The Codext All Rights Reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
