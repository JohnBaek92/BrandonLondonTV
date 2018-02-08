import React from "react";
import Instagram from "./InstagramFeed";
import { Timeline } from "react-twitter-widgets";

import YoutubePlayer from "../misc/Youtube.jsx";

const Hero = () => (
  <div className="youtube-video block columns">
    <YoutubePlayer />
    <div className="column">
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "BrandonLondonTV"
        }}
        options={{
          username: "BrandonLondonTV",
          height: "35vw",
          theme: "dark",
          chrome: "noscrollbar"
        }}
      />
    </div>
  </div>
);

export default Hero;
