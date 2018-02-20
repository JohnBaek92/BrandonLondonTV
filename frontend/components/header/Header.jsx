import React from "react";
import { Link } from "react-router-dom";
import { SocialLink, NavBarItem } from "./header_items";

let socialTags = [
  { name: "facebook", link: "https://www.facebook.com/BrandonLondonTv/" },
  { name: "twitter", link: "https://twitter.com/brandonlondontv" },
  { name: "instagram", link: "https://www.instagram.com/brandonlondontv/" },
  { name: "youtube", link: "https://www.youtube.com/user/TheCulturedAthlete" }
];

class Header extends React.Component {
  constructor() {
    super();
    this.burgerActions = this.burgerActions.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  componentDidMount() {
    this.burgerActions();
  }

  addresses() {
    return [
      { name: "About", link: "about" },
      { name: "Recent Work", link: "recent-work" },
      { name: "Jersey Off Suit On", link: "joso" },
      { name: "Blog", link: "blog" },
      { name: "London Athletic", link: "london-athletic" },
      { name: "Press", link: "press" },
      { name: "Contact", link: "contact" }
    ];
  }

  socialTags() {
    return [
      { name: "facebook", link: "https://www.facebook.com/BrandonLondonTv/" },
      { name: "twitter", link: "https://twitter.com/brandonlondontv" },
      { name: "instagram", link: "https://www.instagram.com/brandonlondontv/" },
      {
        name: "youtube",
        link: "https://www.youtube.com/user/TheCulturedAthlete"
      }
    ];
  }

  burgerActions() {
    let $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(function($el) {
        $el.addEventListener("click", function() {
          let target = $el.dataset.target;
          let $target = document.getElementById(target);
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  closeMenu() {
    let button = document.querySelector(".navbar-burger");
    if (button) {
      let target = document.getElementById(button.dataset.target);
      button.classList.remove("is-active");
      target.classList.remove("is-active");
    }
  }

  render() {
    return <div className="header-wrapper">
        <react-comment>Hello</react-comment>
        <nav className="top-nav">
          <div className="navbar-brand">
            <Link className="navbar-item title is-0 header-top" to="/" style={{ marginBottom: "0" }}>
              BRANDON LONDON
            </Link>
            <div className="navbar-burger" data-target="navbar-links">
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav>
        <nav className="bottom-nav nav">
          <div id="navbar-links" className="navbar-menu">
            <div className="nav-left" />
            <div className="navbar-start">
              {this.addresses().map(address =>
                NavBarItem(address, this.closeMenu.bind(this))
              )}
            </div>
            <div className="nav-right">
              {this.socialTags().map(tag =>
                SocialLink(tag, this.closeMenu.bind(this))
              )}
            </div>
          </div>
        </nav>
      </div>;
  }
}

export default Header;
