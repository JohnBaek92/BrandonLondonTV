import React from "react";
import UnderConstruction from "../misc/UnderConstruction";
import BlogSnippet from "./BlogSnippet";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = { blogs: [], page: 0 };
    this.fetchBlogs = this.fetchBlogs.bind(this);
    this.addBlogs = this.addBlogs.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.fetchBlogs();
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  addBlogs(newBlogs) {
    const { blogs, page } = this.state;
    const newPage = page + 1;
    if (!newBlogs.length) {
      document.removeEventListener(
        "scroll",
        this.handleScroll.bind(this),
        false
      );
    }
    const combinedBlogs = blogs.concat(newBlogs);
    this.setState({ blogs: combinedBlogs, page: newPage });
  }

  fetchBlogs() {
    const { page } = this.state;
    fetch("/blogs?offset=4&page=" + page)
      .then(res => {
        return res.json();
      })
      .then(blogs => this.addBlogs(blogs))
      .catch(err => {
        debugger;
        this.setState({ error: "There Was an Error..." });
      });
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

    const scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded > 70) {
      this.fetchBlogs();
    }
  }

  render() {
    const { blogs, error, page } = this.state;
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
    return <div className="makeFlex">{posts}</div>;
  }
}

export default Blog;
