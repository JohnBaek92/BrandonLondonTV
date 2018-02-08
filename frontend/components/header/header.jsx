import React from "react";
import { Link } from "react-router-dom";
import {SocialLinks, NavBarItem} from './header_items'

let addresses = [
  { name: "About", link: "about" },
  { name: "Recent Work", link: "recent-work" },
  { name: "Jersey Off Suit On", link: "joso" },
  { name: "Blog", link: "blog" },
  { name: "London Athletic", link: "london-athletic" },
  { name: "Press", link: "press" },
  { name: "Contact", link: "contact" }
];

let socialTags = [
  { name: "facebook", link: "https://www.facebook.com/BrandonLondonTv/" },
  { name: "twitter", link: "https://twitter.com/brandonlondontv" },
  { name: "instagram", link: "https://www.instagram.com/brandonlondontv/" },
  { name: "youtube", link: "https://www.youtube.com/user/TheCulturedAthlete" }
];

class Header extends React.Component {
  componentDidMount() {
    this.burgerActions();
  }

  burgerActions() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function($el) {
        $el.addEventListener("click", function() {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  closeMenu() {
    let button = document.querySelector(".navbar-burger");
    let target = document.getElementById(button.dataset.target);
    button.classList.remove("is-active");
    target.classList.remove("is-active");
  }

  render() {
    return (
      <div className="header-wrapper">
        <nav className="top-nav">
          <div className="navbar-brand">
            <Link className="navbar-item title is-0 header-top" to="/" style={{marginBottom: "0"}}>
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
              {addresses.map(address =>
                NavBarItem(address, this.closeMenu.bind(this))
              )}
            </div>
            <div className="nav-right">
              {socialTags.map(tag =>
                SocialLinks(tag, this.closeMenu.bind(this))
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}



export default Header;
