import React from "react";

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
		const { posts } = this.state;
		if (!posts) {
			return null;
		}
		return (
			<div className="stuff">
				{posts.map(post => (
					<div>
						<p className="title">{post.title}</p>
						<p className="subtitle">{post.body}</p>
						{post.images.map(image => <img src={image.image} />)}
					</div>
				))}
			</div>
		);
	}
}

export default Blog;
