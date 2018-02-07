import React from "react";
import Instagram from "./instagram_feed";
import Hero from "./hero";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Hero />
         {/* <div className="block social-embed columns">

          
          <div className="column">
            <Instagram />
          </div> 
          
        </div> */}
        <div className="joso-text-formatting">
          <div className="joso-text">
            When The Game Ends, The Lifestyle Begins
          </div>
        </div>
        <div className="joso-landing-background">
          <Link to="/joso">
            <img
              src={window.images.joso_yellow}
              className="joso-photo-landing"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
