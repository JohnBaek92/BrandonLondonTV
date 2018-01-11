import React from 'react';
import styled from 'styled-components';
import RecentVideoItem from './recent_video_item';
import { Timeline } from 'react-twitter-widgets';

const Video = styled.ul`
  display: flex;
  margin-top: 2em;
  iframe {
    width: 65vw;
    height: 35vw;
    frame-border: 0;
    margin: 0 auto;
}`

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state ={video: null}

    this.onYouTubeApiLoad = this.onYouTubeApiLoad.bind(this);
    this.onSearchResponse = this.onSearchResponse.bind(this);
    this.parseVideo = this.parseVideo.bind(this);
  }

  componentDidMount() {
    window.gapi.load('client', () => {
      window.gapi.client.load('youtube', 'v3', this.onYouTubeApiLoad)
    })
  }

  onYouTubeApiLoad() {
    window.gapi.client.setApiKey('AIzaSyD7LR5NLIRrMUB6IrmJa0MPpVInKGQiGdA')
    this.search()
  }


  onSearchResponse(response) {
    const video = response.items
    this.setState({
      video: video,
     })
  }

  search() {
    const request = window.gapi.client.youtube.search.list({
      part: 'snippet',
      channelId: "UCe2nmwp6hFabG0ugQ8ZwnLA",
      order: "date",
      maxResults: 1
    })
    request.execute(this.onSearchResponse)
  }

  parseVideo(){
    const video = this.state.video;
    return(
      <RecentVideoItem id={video[0].id.videoId} />
    )
  }

  render(){
    if(!this.state.video) return null
    return(
      <div className="landing-page-wrapper">
        <div className="header-space"></div>
        <div className="youtube-video">
          <Video>{this.parseVideo()}</Video>
        </div>
        <div className="social-embed">
          <Timeline dataSource={{ sourceType: 'profile', screenName: 'BrandonLondonTV' }}
            options={{ username: 'BrandonLondonTV', height: '70vh', width: '45vw', theme: "dark" }} />

        </div>
      </div>
    )
  }
}

export default Landing;
