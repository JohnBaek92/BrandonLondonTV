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
        <div style={{display: "flex", flexDirection: "column"}}>
          <div style={{textAlign: "center", fontSize: "3em"}}>When The Game Ends</div>
          <div style={{textAlign: "center", fontSize: "3em"}}>The Lifestyle Begins</div>
        </div>
        <div style={{ background: "#030331" }}>
          <Link to="/joso">
            <img src={window.images.joso_yellow} style={{ width: "25%", display: "block", margin: "0 auto" }} />
          </Link>
        </div>
      </div>;
	}
}

export default Landing;
