import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="content has-text-centered">
					<Link to="/">
						<img className="footer-logo" src={window.images.circle_logo} />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
