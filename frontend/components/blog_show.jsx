import React from "react";

class BlogShow extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
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
    return posting.content.map(el => {
      debugger;
      switch (el["type"]) {
        case "image":
          return (
            <img
              src={el["content"]}
              style={{ width: "50%", margin: "0 auto", display: "block" }}
            />
          );
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
