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

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.fetchBlogs();
    window.addEventListener("scroll", this.handleScroll);
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
      .catch(err => this.setState({ error: "There Was an Error..." }));
  }

  handleScroll(event) {
    const winHeight = window.innerHeight;

    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent * 100);
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
    let posts = blogs.map(blog => (
      <BlogSnippet key={blog.id * Math.random(0, 3)} blog={blog} />
    ));
    return (
      <div className="makeFlex">
        {posts}
      </div>
    );
  }
}

export default Blog;
