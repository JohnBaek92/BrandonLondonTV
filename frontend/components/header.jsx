import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <section className="header-wrapper">
      <div className="top-header">
        <Link to="/">BRANDON LONDON</Link>
      </div>
      <div className="bottom-header">
        <Link to="/about">About</Link>
        <div>Entertainment</div>
        <div>Blog</div>
        <div>Jersey Off Suit On</div>
        <Link to="/london-athletic">London Athletic</Link>
        <div>Press</div>
        <Link to="/contact">Contact</Link>
      </div>
    </section>
  );
};

export default Header;
