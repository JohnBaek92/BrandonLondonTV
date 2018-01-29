import React from "react";
import Youtube from "react-youtube";

const photoStyle = { width: "15%", height: "15%", cursor: "pointer" };

class Entertainment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      picture: null,
      prevVideo: null,
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
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  changeHeight(row, idx, link, e) {
    const newState = Object.assign({}, this.state);
    if (this.state.prevVideo) {
      this.state.prevVideo.pauseVideo();
    }
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
    newState.prevVideo = e.target;
    this.setState(newState);
  }

  makeVideo(link, row, idx) {
    let active = "column";
    let videoSrc = this.state.videos[link];
    if (videoSrc) {
      active = "column is-three-quarters";
    }
    return (
      <div className={active} key={link}>
        <Youtube
          videoId={link}
          opts={{
            height: "100%",
            width: "100%"
          }}
          onPlay={e => this.changeHeight(row, idx, link, e)}
        />
      </div>
    );
  }

  openModal() {
    return (
      <div className="modal-body" onClick={this.closeModal}>
        <div className="modal-content">
          <img src={this.state.picture} />
        </div>
      </div>
    );
  }

  openModalState(image) {
    this.setState({ openModal: true, picture: image });
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  render() {
    return (
      <section className="entertainment-wrapper">
        {this.state.openModal ? this.openModal() : null}
        <div className="title has-text-centered">Photos</div>
        <div className="columns">
          <img
            className="column"
            onClick={() => this.openModalState(window.images.e1)}
            style={photoStyle}
            src={window.images.e1}
          />
          <img
            className="column"
            onClick={() => this.openModalState(window.images.e5)}
            style={photoStyle}
            src={window.images.e5}
          />
          <img
            className="column"
            onClick={() => this.openModalState(window.images.e3)}
            style={photoStyle}
            src={window.images.e3}
          />
          <img
            className="column"
            onClick={() => this.openModalState(window.images.e4)}
            style={photoStyle}
            src={window.images.e4}
          />
        </div>
        <div className="columns">
          <img
            className="column"
            onClick={() => this.openModalState(window.images.e2)}
            style={photoStyle}
            src={window.images.e2}
          />
          <img
            className="column"
            onClick={() => this.openModalState(window.images.e6)}
            style={photoStyle}
            src={window.images.e6}
          />
          <img
            className="column"
            onClick={() => this.openModalState(window.images.e7)}
            style={photoStyle}
            src={window.images.e7}
          />
          <img
            className="column"
            onClick={() => this.openModalState(window.images.e8)}
            style={photoStyle}
            src={window.images.e8}
          />
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
