import React from "react";
import { Link } from "react-router-dom";

export const SocialLink = (item, cb) => (
  <div className="navbar-item" key={item.name}>
    <a href={item.link} target="_blank">
      <i className={"fa is-size-4 fa-" + item.name} onClick={() => cb()} />
    </a>
  </div>
);

export const NavBarItem = (item, cb) => (
  <li className="navbar-item" key={item.name}>
    <Link className="link-color" onClick={() => cb()} to={`/${item.link}`}>
      {item.name}
    </Link>
  </li>
);
