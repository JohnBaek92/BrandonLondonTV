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
        debugger;
        this.setState({ blog });
      });
  }

  parsePost(posting) {
    return posting.content.map(el => {
      debugger;
      switch (el[0]) {
        case "image":
          return (
            <img
              src={el[1]}
              style={{ width: "50%", margin: "0 auto", display: "block" }}
            />
          );
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
              className="title is-1 has-text-centered"
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
  }

  render() {
    const { blog } = this.state;
    if (!blog) return null;
    return <div className="box">{this.parsePost(blog)}</div>;
  }
}

export default BlogShow;
