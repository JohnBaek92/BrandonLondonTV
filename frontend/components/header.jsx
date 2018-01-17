import React from "react";
import { Link } from "react-router-dom";

let addresses = [
	{ name: "About", link: "about" },
	{ name: "Entertainment", link: "entertainment" },
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
        <Link className="title is-1 enlarge header-top" style={{ color: "#C3BEAD", letterSpacing: "0.25em" }} to="/">
          BRANDON LONDON
        </Link>
      </div>
    </nav>
    <nav className="bottom-nav">
      <div className="nav-center">
        {addresses.map(address => NavBarItem(address))}
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
