import React from "react";
import UnderConstruction from "./under_construction";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("/posts")
      .then(res => {
        return res.json();
      })
      .then(foo => {
        this.setState({ posts: foo });
      });
  }

  render() {
    // const { posts } = this.state;
    // if (!posts) {
    //   return null;
    // }
    // let bar = Array.from({ length: 8 });
    return (
      <div className="container">
        <UnderConstruction />
        {/* {bar.map((post, idx) => <BlogPost key={idx} post={post} />)} */}
      </div>
    );
  }
}

export default Blog;

// const BlogPost = ({ post }) => (
//   <div>
//     <p className="title">{post.title}</p>
//     <p className="subtitle">{post.body}</p>
//     {post.images.map(image => <img src={image.image} />)}
//   </div>
// );
const BlogPost = ({ post }) => (
  <div className="blog-posting content">
    <p className="title is-1">Lorem, ipsum dolor.</p>
    <p className="subtitle">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi mollitia
      odio recusandae id repellendus reiciendis quae ipsa ducimus a voluptatibus
      nam voluptas non cupiditate, natus itaque tempora rerum perferendis vitae.
    </p>
    <img
      className="image"
      src="https://blog.twitter.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png"
    />
    <blockquote>
      Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero
      hendrerit ipsum, ut blandit est tellus sit amet turpis.
    </blockquote>

    <p>
      Suspendisse egestas sapien non felis placerat elementum. Morbi tortor
      nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi.
      Nullam ac erat ante.
    </p>
    <h4 className="is-uppercase">porta faucibus</h4>
    <p>
      Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac.
      Mauris euismod metus a tellus laoreet, at elementum ex efficitur.
    </p>
    <figure>
      <img src="https://bulma.io/images/placeholders/256x256.png" />
      <img src="https://bulma.io/images/placeholders/256x256.png" />
      <figcaption>Figure 1: Some beautiful placeholders</figcaption>
    </figure>
    <p className="subtitle">
      Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc,
      blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh
      bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper.
      Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at
      cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque,
      vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan
      pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum.
      Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non
      pellentesque.
    </p>
    <div className="tags">
      <span className="tag is-light">condimentum</span>
      <span className="tag is-light">euismod</span>
      <span className="tag is-light">Lorem</span>
      <span className="tag is-light">Ipsum</span>
      <span className="tag is-light">Leo</span>
      <span className="tag is-light">Nam</span>
    </div>
  </div>
);
