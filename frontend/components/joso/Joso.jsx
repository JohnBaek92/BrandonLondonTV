import React from "react";

class Joso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentJOSO: [],
      videos: [],
      tracks: ["396193170", "392031732", "388488576"]
    };

    this.onSearchResponse = this.onSearchResponse.bind(this);
    this.onYouTubeApiLoad = this.onYouTubeApiLoad.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    window.gapi.load("client", () => {
      window.gapi.client.load("youtube", "v3", this.onYouTubeApiLoad);
    });
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
    this.setState({ videos });
  }

  renderVideos() {
    const videos = this.state.videos;
    return videos.map((video, idx) => (
      <iframe
        key={idx}
        width="560"
        height="400"
        src={`https://www.youtube.com/embed/${
          video.snippet.resourceId.videoId
        }`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    ));
  }

  makeIFrame(src) {
    return (
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +
          src +
          "&amp;color=%23FFD046&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
        }
      />
    );
  }

  render() {
    const { tracks } = this.state;
    return (
      <div>
        <div className="title is-size-2 has-text-weight-bold has-text-centered">
          When The Game Ends, The Lifestyle Begins
        </div>
        <div className="columns is-mobile">
          <div className="column sc-joso is-two-thirds centered">
            {tracks.map(track => this.makeIFrame(track))}
          </div>
        </div>
      </div>
    );
  }
}

export default Joso;
