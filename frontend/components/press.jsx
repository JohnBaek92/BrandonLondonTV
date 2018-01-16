import React from "react";

class Press extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		console.log("press");
	}

	render() {
		return (
			<div className="block is-uppercase has-text-weight-bold">
				<p className="title ">In the News</p>
				<div className="block columns is-multiline">
					{Array.from({ length: 7 }).map(el => <Tile />)}
				</div>
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

const Tile = () => (
	<article
		class="column is-3 tile is-child notification news-tile"
		style={news}
	>
		<figure class="image is-4by3">
			<img src="https://bulma.io/images/placeholders/640x480.png" />
			<div className="subtext" style={thingy}>
				<p className="subtitle">
					Working Caption
				</p>
			</div>
		</figure>
	</article>
);

export default Press;
