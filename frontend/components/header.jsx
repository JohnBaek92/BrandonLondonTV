import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <section className="header-wrapper">
      <div className="top-header">
        <div>BRANDON LONDON</div>
      </div>
      <div className="bottom-header">
        <Link to="/about">About</Link>
        <div>Entertainment</div>
        <div>Football</div>
        <div>Jersey Off Suit On</div>
        <div>London Athletic</div>
        <div>Press</div>
        <div>Contact</div>
      </div>
    </section>
  );
};

export default Header;
