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
				<p className="title" style={{textAlign: "center"}}>In the News</p>
				<div className="block columns is-multiline">{this.renderPress()}</div>
			</div>
		);
	}
}

const news = {
	postition: "relative",
	overflow: "hidden",
	transition: "all .5s ease"
};

const thingy = {
	position: "absolute",
	padding: "10px",
	background: "rgba(0,0,0,.5)",
	width: "100%",
	height: "50%"
};

const Tile = ({ article }) => {
	return (
		<article
			className="column is-3 tile is-child notification news-tile"
			style={news}
		>
			<figure className="image is-square">
				<img className="cover" src={article.image} />
				<div className="subtext" style={thingy}>
					<p className="subtitle">{article.title}</p>
				</div>
			</figure>
		</article>
	);
};

export default Press;
