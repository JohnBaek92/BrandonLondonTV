import React from "react";

class Press extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.fetchPress = this.fetchPress.bind(this);
	}

	componentDidMount() {
		this.fetchPress();
	}

	fetchPress() {
		fetch("/pages/1")
			.then(res => res.json())
			.then(press => {
				this.setState({ press });
			});
	}

	renderPress() {
		const { press } = this.state;

		if (!press) {
			return null;
		}
		return press.map((el, idx) => <Tile key={idx} article={el} />);
	}

	render() {
		return (
			<div className="block is-uppercase has-text-weight-bold">
				<p className="title text-center">In the News</p>
				<div className="tile is-ancestor press-tile flex-justify-center">{this.renderPress()}</div>
			</div>
		);
	}
}

const Tile = ({ article }) => {
	return (
		<article
			className="tile is-3 is-parent news-tile"
		>
			<figure className="tile is-child image is-square">
				<img className="cover" src={article.image} />
				<div className="subtext transition-photo">
					<a href={article.link} target="_blank"><p className="subtitle transition-text">{article.title}</p></a>
				</div>
			</figure>
		</article>
	);
};

export default Press;
