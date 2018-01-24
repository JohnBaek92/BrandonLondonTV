import React from "react";
import { Link } from "react-router-dom";

let addresses = [
  { name: "About", link: "about" },
  { name: "Recent Work", link: "recent-work" },
  { name: "Jersey Off Suit On", link: "joso" },
  { name: "Blog", link: "blog" },
  { name: "London Athletic", link: "london-athletic" },
  { name: "Press", link: "press" },
  { name: "Contact", link: "contact" }
];

const Header = () => (
  <div className="header-wrapper">
    <nav className="top-nav">
      <div className="navbar-item title header-top">
        <Link className="title is-0 header-top" to="/">
          BRANDON LONDON
        </Link>
      </div>
    </nav>
    <nav className="bottom-nav nav">
      <div className="nav-left" />
      <div className="nav-center">
        {addresses.map(address => NavBarItem(address))}
      </div>
      <div className="nav-right">
        <div className="social-tag-header">
          <i className="fa is-size-4 fa-facebook" />
        </div>
        <div className="social-tag-header">
          <i className="fa is-size-4 fa-twitter" />
        </div>
        <div className="social-tag-header">
          <i className="fa is-size-4 fa-youtube" />
        </div>
        <div className="social-tag-header">
          <i className="fa is-size-4 fa-instagram" />
        </div>
      </div>
    </nav>
  </div>
);

const NavBarItem = item => (
  <div className="navbar-item" key={item.name}>
    <Link className="link-color" to={`/${item.link}`}>
      {item.name}
    </Link>
  </div>
);

export default Header;
