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

  renderPress(start, end) {
    const { press } = this.state;

    if (!press) {
      return null;
    }
    return press.slice(start, end).map((el, idx) => <Tile key={idx} article={el} />);
  }

  render() {
    return (
      <div className="block is-uppercase has-text-weight-bold">
        <p className="title has-text-centered">In the News</p>
        <div className="tile is-ancestor">
          {this.renderPress(0,4)}
        </div>
        <div className="tile is-ancestor">
          {this.renderPress(4,8)}
        </div>
      </div>
    );
  }
}

const swapURL = link => link.replace("s3-us-east-1", "s3");

const Tile = ({ article }) => {
	return (
		<div
			className="tile is-3 is-parent news-tile"
		>
			<figure className="tile is-child image is-square">
				<img className="cover" src={swapURL(article.image)} />
				<div className="subtext transition-photo">
					<a href={article.link} target="_blank"><p className="subtitle transition-text">{article.title}</p></a>
				</div>
			</figure>
		</div>
	);
};

export default Press;
