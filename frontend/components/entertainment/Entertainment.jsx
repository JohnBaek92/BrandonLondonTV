import React from "react";
import Youtube from "react-youtube";


class Entertainment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      picture: null,
      prevVideo: null,
      top: "50vh",
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

    this.videos = ["unxtRCOsZpE", "BKXLB4-9sfg", "Y9YP2EQJ_wI", "AOmHwHWpdKc", "7WOW3hCIg8U", "G4iZJtXw5ig", "rJ_qxnuKADY", "KLmwpPbTsN0", "KLmwpPbTsN0", "4lRkQZTapcg", "erRJtA8bkVc", "J_MAIrPsmRA", "y1_sZeSDlc8"];
    this.changeHeight = this.changeHeight.bind(this);
    this.makeVideo = this.makeVideo.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
          // onPlay={e => this.changeHeight(row, idx, link, e)}
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

  openModalState(e) {
    if (!e.target.src) {
      return null;
    }
    this.setState({ openModal: true, picture: e.target.src });
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <div className="entertainment-wrapper" onClick={e => this.openModalState(e)}>
        {this.state.openModal ? this.openModal() : null}
        <div className="title has-text-centered">Photos</div>
        <div className="columns is-mobile">
          <img className="column" src={window.images.e1} />
          <img className="column" src={window.images.e5} />
          <img className="column" src={window.images.e3} />
          <img className="column" src={window.images.e4} />
        </div>
        <div className="columns is-mobile">
          <img className="column" src={window.images.e2} />
          <img className="column" src={window.images.e6} />
          <img className="column" src={window.images.e7} />
          <img className="column" src={window.images.e8} />
        </div>
        <div className="title has-text-centered">Videos</div>
        <div className="subtitle has-text-centered">My Best Moves</div>
        <div className="columns is-mobile" style={{ height: this.state.top }}>
          {this.videos
            .slice(0, 2)
            .map(link => this.makeVideo(link, "middle"))}
        </div>
        <div className="columns is-mobile" style={{ height: this.state.top }}>
          {this.videos
            .slice(2, 4)
            .map(link => this.makeVideo(link, "middle"))}
        </div>
        <div className="subtitle has-text-centered">Fan Experience</div>
        <div className="columns is-mobile" style={{ height: this.state.top }}>
          {this.videos
            .slice(4, 6)
            .map(link => this.makeVideo(link, "middle"))}
        </div>
        <div className="columns is-mobile" style={{ height: this.state.top }}>
          {this.videos
            .slice(6, 8)
            .map((link, idx) => this.makeVideo(link, "middle", idx))}
        </div>
        <div className="subtitle has-text-centered">On The Road</div>
        <div className="columns is-mobile" style={{ height: this.state.top }}>
          {this.videos
            .slice(8, 10)
            .map((link, idx) => this.makeVideo(link, "middle", idx))}
        </div>
        <div className="columns is-mobile" style={{ height: this.state.top }}>
          {this.videos
            .slice(10, 12)
            .map((link, idx) => this.makeVideo(link, "middle", idx))}
        </div>
        <div className="columns is-mobile" style={{ height: this.state.top }}>
          {this.videos
            .slice(12, 14)
            .map((link, idx) => this.makeVideo(link, "middle", idx))}
        </div>
      </div>;
  }
}

export default Entertainment;
