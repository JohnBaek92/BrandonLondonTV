import React from "react";
import { Timeline } from "react-twitter-widgets";
import Instagram from "./instagram_feed";
import Hero from "./hero";
import { Link } from "react-router-dom";

class Landing extends React.Component {
	constructor(props) {
		super(props);
  }

	render() {
		return <div className="container">
        <Hero />
        <div className="block social-embed columns">
          <div className="column">
            <Timeline dataSource={{ sourceType: "profile", screenName: "BrandonLondonTV" }} options={{ username: "BrandonLondonTV", height: "70vh", theme: "dark", chrome: "noscrollbar" }} />
          </div>
          <div className="column">
            <Instagram />
          </div>
        </div>
        <div ckassName="joso-text-formatting" >
          <div className="joso-text">When The Game Ends</div>
          <div className="joso-text">The Lifestyle Begins</div>
        </div>
        <div className="joso-landing-background">
          <Link to="/joso">
            <img src={window.images.joso_yellow} className="joso-photo-landing" />
          </Link>
        </div>
      </div>;
	}
}

export default Landing;
