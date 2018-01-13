import React from "react";
import YoutubePlayer from "./youtube.jsx";

const Hero = () => (
	<div className="youtube-video block">
		<section class="hero is-fullheight">
			<div class="hero-body">
				<div class="container columns level">
					<div className="column level-left">
						<div className="flex content">
							<p className="title is-2">the cultured athlete</p>
							<p className="subtitle is-4">CURATING THE SPORTS LIFESTYLE EXPERIENCE!</p>
						</div>
					</div>
					<div className="column level-right">
						<img src={window.images.smiling} />
					</div>
				</div>
			</div>
		</section>
		<YoutubePlayer />
	</div>
);

export default Hero;
