import React from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LandingPage from "./landing";
import About from "./about";
import Press from "./press";
import Blog from "./blog";
import LondonAthletic from "./london_athletic";
import Contact from "./contact";

const App = () => (
	<div className="Site">
		<Header />
		<div className="header-space" />

		<div className="container Site-content">
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/about" component={About} />
			<Route exact path="/press" component={Press} />
			<Route exact path="/blog" component={Blog} />
			<Route exact path="/london-athletic" component={LondonAthletic} />
			<Route exact path="/contact" component={Contact} />
		</div>
		<Footer />
	</div>
);

export default App;
