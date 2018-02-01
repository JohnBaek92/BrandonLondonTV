import React from "react";
<<<<<<< HEAD
var SC = require("soundcloud");
=======
>>>>>>> facdbe0002284e8faa9a3c6f1fa8ed4426aa9025

class Joso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      recentJOSO: [],
      videos: []
    };

    this.onSearchResponse = this.onSearchResponse.bind(this);
    this.onYouTubeApiLoad = this.onYouTubeApiLoad.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
  }

=======
      recentJOSO: []
    };
  }
>>>>>>> facdbe0002284e8faa9a3c6f1fa8ed4426aa9025
  componentWillMount() {
    window.gapi.load("client", () => {
      window.gapi.client.load("youtube", "v3", this.onYouTubeApiLoad);
    });
    window.scrollTo(0, 0);
  }

  onYouTubeApiLoad() {
    window.gapi.client.setApiKey("AIzaSyD7LR5NLIRrMUB6IrmJa0MPpVInKGQiGdA");
    this.search();
  }

  search() {
    const request = window.gapi.client.youtube.playlistItems.list({
      part: "snippet",
      playlistId: "PLqtmVPBck9G7ZoZ_4eEJ8tl_EoFlETZho",
      order: "date",
      maxResults: 2
    });
    request.execute(this.onSearchResponse);
  }

  onSearchResponse(response) {
    const videos = response.items;
    debugger
    this.setState({ videos });
  }

  renderVideos() {
    const videos = this.state.videos;
    return videos.map((video, idx) => (
      <iframe
        key={idx}
        width="560"
        height="400"
        src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    ));
  }

  render() {
    return (
      <div>
        <div className="title is-size-2 has-text-weight-bold has-text-centered">
          When The Game Ends, The Lifestyle Begins
        </div>
        <div className="columns">
          <div className="column youtube-joso">
<<<<<<< HEAD
            {/*
            <iframe> 
=======
            <iframe
>>>>>>> facdbe0002284e8faa9a3c6f1fa8ed4426aa9025
              width="560"
              height="400"
              src="https://www.youtube.com/embed/rJ_qxnuKADY?list=PLqtmVPBck9G7ZoZ_4eEJ8tl_EoFlETZho"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
<<<<<<< HEAD
            />  */}
            {this.renderVideos()}
=======
            />
>>>>>>> facdbe0002284e8faa9a3c6f1fa8ed4426aa9025
          </div>
          <div className="column sc-joso">
            <iframe
              width="100%"
<<<<<<< HEAD
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/392031732&amp;color=%23FFD046&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
            />
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/388488576&amp;color=%23FFD046&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
=======
              height="400"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/388488576&amp;color=%23ff5500&amp;auto_play=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
>>>>>>> facdbe0002284e8faa9a3c6f1fa8ed4426aa9025
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Joso;
