import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<nav>
					<div className="nav-left navbar-item" />
					<div className="nav-center">
						<Link to="/">
							<img
								className="footer-logo"
								style={{ height: "13em", width: "13em" }}
								src={window.images.circle_logo}
							/>
						</Link>
					</div>
					<div className="nav-right navbar-item" />
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
