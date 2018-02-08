import React from "react";

class BlogShow extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("in the show page");
    fetch("/blogs/" + this.props.match.params.id)
      .then(res => {
        return res.json();
      })
      .then(blog => {
        this.setState({ blog });
      });
  }

  parsePost(posting) {
    let section = posting.content.map(el => {
      switch (el[0]) {
        case "image":
          return <img src={el[1]} className="blog-photo is-3by2" />;
        case "title":
          return (
            <h1
              className="title is-1 has-text-centered"
              style={{ color: "#03a797" }}
            >
              {el[1]}
            </h1>
          );
        case "subtitle":
          return (
            <h1
              className="subtitle is-2 has-text-centered"
              style={{ color: "#1b00ff" }}
            >
              {el[1]}
            </h1>
          );
        case "text":
          return <div>{el[1]}</div>;
        default:
          return null;
      }
    });
    return section;
  }

  render() {
    const { blog } = this.state;
    if (!blog) return null;
    return <div className="box blog-posting">{this.parsePost(blog)}</div>;
  }
}

export default BlogShow;
