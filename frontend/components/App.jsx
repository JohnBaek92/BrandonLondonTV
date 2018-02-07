import React from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LandingPage from "./landing";
import About from "./about";
import Joso from "./joso";
import Press from "./press";
import Blog from "./blog";
import LondonAthletic from "./london_athletic";
import Contact from "./contact";
import RecentWork from "./entertainment";

class App extends React.Component {
	constructor() {
		super()
	}


	componentWillUpdate() {
		window.scrollTo(0, 0)
	}

	render() {

		return (
			<div className="Site">
				<Header />
				<div className="header-space" />


				<div className="container Site-content">
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/about" component={About} />
					<Route exact path="/joso" component={Joso} />
					<Route exact path="/press" component={Press} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/london-athletic" component={LondonAthletic} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/recent-work" component={RecentWork} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
