import React from "react";

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

  // render() {
  //   return (
  //     <div>
  //       <div className="title is-size-2 has-text-weight-bold has-text-centered">
  //         When The Game Ends, The Lifestyle Begins
  //       </div>
  //       <div className="columns">
  //         <div className="column youtube-joso">
  //           <iframe
  //             width="560"
  //             height="400"
  //             src="https://www.youtube.com/embed/rJ_qxnuKADY?list=PLqtmVPBck9G7ZoZ_4eEJ8tl_EoFlETZho"
  //             frameborder="0"
  //             allow="autoplay; encrypted-media"
  //             allowfullscreen
  //           />
  //         </div>
  //         <div className="column sc-joso">
  //           <iframe
  //             width="100%"
  //             height="400"
  //             scrolling="no"
  //             frameborder="no"
  //             allow="autoplay"
  //             src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/388488576&amp;color=%23ff5500&amp;auto_play=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <div className="title is-size-2 has-text-weight-bold has-text-centered">
          When The Game Ends, The Lifestyle Begins
        </div>
        <div className="block columns flex justify-content-center">
          <div className="column">
            <div>
              <div style={{ float: "left" }}>
                Y <br />T <br />P <br />L<br />A<br />Y<br />L<br />I<br />S<br />T<br />
              </div>
              <div className="youtube-joso block" style={{ float: "left" }}>
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/rJ_qxnuKADY?list=PLqtmVPBck9G7ZoZ_4eEJ8tl_EoFlETZho"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
            <div style={{ clear: "both" }} />
            <div>
              <div style={{ float: "left" }}>
                S<br />O<br />U<br />N<br />D<br />C<br />L<br />O<br />U<br />D<br />
              </div>
              <div className="sc-joso block" style={{ float: "left" }}>
                <iframe
                  width="100%"
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Joso;
