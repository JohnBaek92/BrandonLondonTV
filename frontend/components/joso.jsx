import React from "react";
var SC = require("soundcloud");

class Joso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentJOSO: []
    };
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="title is-size-2 has-text-weight-bold has-text-centered">
          When The Game Ends, The Lifestyle Begins
        </div>
        <div className="columns">
          <div className="column youtube-joso">
            <iframe
              width="560"
              height="400"
              src="https://www.youtube.com/embed/rJ_qxnuKADY?list=PLqtmVPBck9G7ZoZ_4eEJ8tl_EoFlETZho"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </div>
          <div className="column sc-joso">
            <iframe
              width="100%"
              height="400"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/388488576&amp;color=%23ff5500&amp;auto_play=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Joso;
