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
				<div className="tile is-ancestor press-tile" style={{display: "flex", justifyContent: "center"}}>{this.renderPress()}</div>
			</div>
		);
	}
}

const news = {
	postition: "relative",
	overflow: "hidden",
	transition: "all .5s ease",
};

const thingy = {
	position: "absolute",
	textAlign: "center",
	background: "rgba(0,0,0,.5)",
	width: "100%",
	height: "60%",
	display: "flex"
};

const Tile = ({ article }) => {
	return (
		<article
			className="tile is-3 is-parent news-tile"
			style={news}
		>
			<figure className="tile is-child image is-square">
				<img className="cover" src={article.image} />
				<div className="subtext" style={thingy}>
					<p className="subtitle" style={{color: "white", fontSize: "1.2em", alignSelf: "center"}}>{article.title}</p>
				</div>
			</figure>
		</article>
	);
};

export default Press;
