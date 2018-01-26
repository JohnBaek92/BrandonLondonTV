import React from "react";
import Youtube from "react-youtube";

const photoStyle = { width: "15%", height: "15%" };

class Entertainment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      top: "35vh",
      middle: "25vh",
      bottom: "15vh",
      videos: {
        E8JlWMXJgqA: false,
        "BKXLB4-9sfg": false,
        KLmwpPbTsN0: false,
        rJ_qxnuKADY: false,
        YbXrdVjzkC4: false,
        AOmHwHWpdKc: false,
        erRJtA8bkVc: false,
        "WSmNvV-8uwU": false
      }
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

  changeHeight(row, idx, link) {
    const newState = Object.assign({}, this.state);
    newState.top = "15vh";
    newState.middle = "15vh";
    newState.bottom = "15vh";
    newState[row] = "50vh";
    newState.videos = {
      E8JlWMXJgqA: false,
      "BKXLB4-9sfg": false,
      KLmwpPbTsN0: false,
      rJ_qxnuKADY: false,
      YbXrdVjzkC4: false,
      AOmHwHWpdKc: false,
      erRJtA8bkVc: false,
      "WSmNvV-8uwU": false
    };
    newState.videos[link] = true;
    // this.setState(newState);
    this.setState(newState);
  }

  makeVideo(link, row, idx) {
    let active = "column";
    if (this.state.videos[link]) {
      active = "column is-three-quarters";
    }
    return (
      <div className={active} key={link}>
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
          onPlay={() => this.changeHeight(row, idx, link)}
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
          {this.videos
            .slice(4, 8)
            .map((link, idx) => this.makeVideo(link, "bottom", idx))}
        </div>
      </section>
    );
  }
}

export default Entertainment;
