import React from "react";

const makeDate = date => {
  return new Date(Date.parse(date)).toLocaleDateString();
};

const BlogSnippet = ({ blog }) => (
  <div className="blog snippet card">
    <div className="card-image">
        <img src={blog.image} alt="" className="image" />
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4 truncate">{blog.title}</p>
          <p className="subtitle is-6 truncate">{blog.subtitle}</p>
        </div>
      </div>
    </div>
    <div className="content">{blog.blurb}</div>
    <div className="tags-container">
      <span class="tag">
        <time dateTime="2016-1-1">Published: {makeDate(blog.date)}</time>
      </span>
    </div>
  </div>
);

export default BlogSnippet;
