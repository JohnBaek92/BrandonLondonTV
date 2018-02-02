import React from "react";
import styled from "styled-components";

import RecentVideoItem from "./recent_video_item";
const Video = styled.ul`
  display: flex;
  iframe {
    width: 65vw;
    height: 35vw;
    frame-border: 0;
    margin: 0 auto;
  }
`;

export default class Youtube extends React.Component {
  constructor() {
    super();

    this.state = { video: null };

    this.onYouTubeApiLoad = this.onYouTubeApiLoad.bind(this);
    this.onSearchResponse = this.onSearchResponse.bind(this);
    this.parseVideo = this.parseVideo.bind(this);
  }
  
  componentDidMount() {
    window.gapi.load("client", () => {
      window.gapi.client.load("youtube", "v3", this.onYouTubeApiLoad);
    });
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  onYouTubeApiLoad() {
    window.gapi.client.setApiKey("AIzaSyD7LR5NLIRrMUB6IrmJa0MPpVInKGQiGdA");
    this.search();
  }

  onSearchResponse(response) {
    const video = response.items;
    this.setState({ video: video });
  }

  search() {
    const request = window.gapi.client.youtube.search.list({
      part: "snippet",
      channelId: "UCe2nmwp6hFabG0ugQ8ZwnLA",
      order: "date",
      maxResults: 1
    });
    request.execute(this.onSearchResponse);
  }

  parseVideo() {
    const video = this.state.video;
    return <RecentVideoItem id={video[0].id.videoId} />;
  }

  renderVideo() {
    const { video } = this.state;
    if (!video) {
      return null;
    }
    return <Video>{this.parseVideo()}</Video>;
  }

  render() {
    return <div className="youtube-video column is-two-thirds">{this.renderVideo()}</div>;
  }
}
