import React from "react";
import UnderConstruction from "../misc/UnderConstruction";
import {Link} from "react-router-dom";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("/blogs")
      .then(res => {
        return res.json();
      })
      .then(blogs => {
        this.setState({ blogs });
      })
      .catch(err => this.setState({ error: err.message }));

  }

  render() {
    const { blogs } = this.state;
    if (!blogs) return null;
    let posts = blogs.map(foo => <BlogSnippet blog={foo} />);
    return <div className="makeFlex">{posts}</div>;
  }
}

export default Blog;

const makeDate = (date) => {
  return new Date(Date.parse(date)).toLocaleDateString()
}

const BlogSnippet = ({ blog }) => (
  <div className="blog snippet card">
    <div className="card-image">
      <figure className="image is-3by2">
        <img src={blog.image} alt="" className="image" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p
            className="title is-2 has-text-centered"
            style={{ color: "rgb(3, 167, 151)", paddingBottom: "0.2em" }}
          >
            {blog.title}
          </p>
          <p
            className="subtitle is-4 has-text-centered"
            style={{ color: "rgb(27, 0, 255)" }}
          >
            {blog.subtitle}
          </p>
        </div>
      </div>
    </div>
    <div className="content">
      {blog.blurb}
      <br />
      <time dateTime="2016-1-1">Published: {makeDate(blog.date)}</time>
      <br />
      <br/>
      <div
        className="notification hoverReadMore"
      >
        <Link to={`/blog/` + blog.id}>Read More</Link>
      </div>
    </div>
  </div>
);
