import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <div className="footer-wrapper">
      <div className="footer">
        <Link to="/"><img className="footer-logo" src={window.images.circle_logo} /></Link>
      </div>
    </div>
  );
};

export default Footer;
