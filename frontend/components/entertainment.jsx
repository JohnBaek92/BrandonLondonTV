import React from "react";
import Youtube from "react-youtube";

const photoStyle = { width: "15%", height: "15%" };

class Entertainment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      top: "35vh",
      middle: "25vh",
      bottom: "15vh"
    };

    this.videos = [
      "E8JlWMXJgqA",
      "BKXLB4-9sfg",
      "KLmwpPbTsN0",
      "rJ_qxnuKADY",
      "YbXrdVjzkC4",
      "AOmHwHWpdKc",
      "erRJtA8bkVc",
      "WSmNvV-8uwU"
    ];
    this.changeHeight = this.changeHeight.bind(this);
    this.makeVideo = this.makeVideo.bind(this);
  }

  changeHeight(row) {
    const newState = Object.assign({}, this.state);
    newState.top = "15vh";
    newState.middle = "15vh";
    newState.bottom = "15vh";
    newState[row] = "50vh";
    debugger
    // this.setState(newState);
    this.setState(newState);
  }

  makeVideo(link, row) {
    return (
      <div className="column" key={link}>
        <Youtube
          videoId={link}
          opts={{
            height: "100%",
            width: "100%",
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          }}
          onPlay={() => this.changeHeight(row)}
        />
      </div>
    );
  }

  render() {
    return (
      <section className="entertainment-wrapper">
        <div className="title has-text-centered">Photos</div>
        <div className="columns">
          <img className="column" style={photoStyle} src={window.images.e1} />
          <img className="column" style={photoStyle} src={window.images.e5} />
          <img className="column" style={photoStyle} src={window.images.e3} />
          <img className="column" style={photoStyle} src={window.images.e4} />
        </div>
        <div className="columns">
          <img className="column" style={photoStyle} src={window.images.e2} />
          <img className="column" style={photoStyle} src={window.images.e6} />
          <img className="column" style={photoStyle} src={window.images.e7} />
          <img className="column" style={photoStyle} src={window.images.e8} />
        </div>
        <div className="title has-text-centered">Videos</div>
        <div className="columns" style={{ height: this.state.top }}>
          {this.videos.slice(0, 2).map(link => this.makeVideo(link, "top"))}
        </div>
        <div className="columns" style={{ height: this.state.middle }}>
          {this.videos.slice(2, 4).map(link => this.makeVideo(link, "middle"))}
        </div>
        <div className="columns" style={{ height: this.state.bottom }}>
          {this.videos.slice(4, 8).map(link => this.makeVideo(link, "bottom"))}
        </div>
      </section>
    );
  }
}

export default Entertainment;
