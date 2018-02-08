import React from "react";
import UnderConstruction from "./under_construction";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("this is the index page");
    fetch("/blogs")
      .then(res => {
        return res.json();
      })
      .then(blogs => {
        this.setState({ blogs });
      });
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
    <div class="card-image">
      <figure class="image is-3by2">
        <img src={blog.image} alt="" className="image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{blog.title}</p>
          <p class="subtitle is-6">{blog.subtitle}</p>
        </div>
      </div>
    </div>
    <div class="content">
      {blog.blurb}
      <br />
      <time datetime="2016-1-1">Published: {makeDate(blog.date)}</time>
    </div>
  </div>
);
