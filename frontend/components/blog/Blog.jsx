import React from "react";
import UnderConstruction from "../misc/UnderConstruction";
import BlogSnippet from "./BlogSnippet";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.fetchBlogs = this.fetchBlogs.bind(this);
    this.addBlogs = this.addBlogs.bind(this);
  }

  componentDidMount() {
    this.fetchBlogs();
  }

  addBlogs(blogs) {
    this.setState({ blogs });
  }

  fetchBlogs() {
    fetch("/blogs")
      .then(res => {
        return res.json();
      })
      .then(blogs => this.addBlogs(blogs))
      .catch(err =>
        this.setState({ error: "There Was an Error..." })
      );
  }

  render() {
    const { blogs, error } = this.state;
    if (error)
      return (
        <div className="container">
          <div className="is-warning">{error}</div>
        </div>
      );
    if (!blogs) return null;
    let posts = blogs.map(foo => <BlogSnippet blog={foo} />);
    return <div className="makeFlex">{posts}</div>;
  }
}

export default Blog;
