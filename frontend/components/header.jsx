import React from "react";
import { Link } from "react-router-dom";

let addresses = [
	{ name: "About", link: "about" },
	{ name: "Entertainment", link: "entertainment" },
	{ name: "Jersey Of Suit On", link: "joso" },
	{ name: "Blog", link: "blog" },
	{ name: "London Athletic", link: "london-athletic" },
	{ name: "Press", link: "press" }
];

const Header = () => (
	<div className="block">
		<nav className="nav">
			<div className="nav-left">
				<div className="navbar-item">
					<Link className="title is-3" to="/">BRANDON LONDON</Link>
				</div>
			</div>

			<div className="nav-center">
				{addresses.map(address => NavBarItem(address))}
			</div>
			<div className="nav-right" />
		</nav>
	</div>
);

const NavBarItem = item => (
	<div className="navbar-item">
		<Link to={`/${item.link}`} key={item.name}>
			{item.name}
		</Link>
	</div>
);

export default Header;
