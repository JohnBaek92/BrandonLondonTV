import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.PureComponent {
  constructor() {
    super();
    this.state = { image: window.images.circle_logo };

    this.changeImage = this.changeImage.bind(this);
    this.changeBack = this.changeBack.bind(this);
  }

  changeImage() {
    this.setState({ image: window.images.circle_logo2 });
  }

  changeBack() {
    this.setState({ image: window.images.circle_logo });
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav>
            <div className="nav-left navbar-item" />
            <div className="nav-center middle-centered">
              <div className="social-tag">
                <a
                  className="social-tag"
                  href="https://www.facebook.com/BrandonLondonTv/"
                  target="_blank"
                >
                  <i className="fa fa-3x fa-facebook" />
                </a>
              </div>
              <div className="social-tag">
                <a
                  className="social-tag"
                  href="https://twitter.com/brandonlondontv"
                  target="_blank"
                >
                  <i className="fa fa-3x fa-twitter" />
                </a>
              </div>
              <div id="footer-logo">
                <Link
                  to="/"
                  onMouseEnter={this.changeImage}
                  onMouseLeave={this.changeBack}
                >
                  <img className="footer-logo" src={this.state.image} />
                </Link>
              </div>
              <div className="social-tag">
                <a
                  className="social-tag"
                  href="https://www.youtube.com/user/TheCulturedAthlete"
                  target="_blank"
                >
                  <i className="fa fa-3x fa-youtube" />
                </a>
              </div>
              <div className="social-tag">
                <a
                  className="social-tag"
                  href="https://www.instagram.com/brandonlondontv/"
                  target="_blank"
                >
                  <i className="fa fa-3x fa-instagram" />
                </a>
              </div>
            </div>
            <div className="nav-right navbar-item" />
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
