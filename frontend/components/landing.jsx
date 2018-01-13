import React from "react";
import { Timeline } from "react-twitter-widgets";
import Instagram from "./instagram_feed";
import Hero from "./hero";

class Landing extends React.Component {
	constructor(props) {
		super(props);
  }
  
  

	render() {
		return (
			<div className="container">
				<Hero />
				<div className="block social-embed columns">
					<div className="column">
						<Timeline
							dataSource={{
								sourceType: "profile",
								screenName: "BrandonLondonTV"
							}}
							options={{
								username: "BrandonLondonTV",
								height: "70vh",
								theme: "dark"
							}}
						/>
					</div>
					<div className="column">
						<Instagram />
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
