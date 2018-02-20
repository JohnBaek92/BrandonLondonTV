import React from "react";
import { Link } from "react-router-dom";

const makeDate = date => {
  return new Date(Date.parse(date)).toLocaleDateString();
};

const BlogSnippet = ({ blog }) => (
  <div className="blog snippet card">
    <div className="card-image">
      <Link to={"/blog/" + blog.id}>
        <img src={blog.image} alt="" className="image" />
      </Link>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4 has-text-centered">{blog.title}</p>
          <p className="subtitle is-6 has-text-centered">{blog.subtitle}</p>
        </div>
      </div>
    </div>
    <div className="content">{blog.blurb}</div>
    <div className="tags-container">
      <span className="tag">
        <time dateTime="2016-1-1">Published: {makeDate(blog.date)}</time>
      </span>
      <span className="read-more">
        <Link to={"/blog/" + blog.id}>
          <p className="button is-success">Read-More...</p>
        </Link>
      </span>
    </div>
  </div>
);

export default BlogSnippet;
