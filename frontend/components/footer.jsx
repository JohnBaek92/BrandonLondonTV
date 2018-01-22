import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav>
          <div className="nav-left navbar-item" />
          <div className="nav-center middle-centered">
            <div className="social-tag">
              <i className="fa fa-3x fa-facebook" />
            </div>
            <div className="social-tag">
              <i className="fa fa-3x fa-twitter" />
            </div>
            <Link to="/">
              <img
                className="footer-logo"
                src={window.images.circle_logo}
              />
            </Link>
            <div className="social-tag">
              <i className="fa fa-3x fa-youtube" />
            </div>
            <div className="social-tag">
              <i className="fa fa-3x fa-instagram" />
            </div>
          </div>
          <div className="nav-right navbar-item" />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
