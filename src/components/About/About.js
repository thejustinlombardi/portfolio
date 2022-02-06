import React from "react";
import { Link } from "react-router-dom";

import "./About.css";

function About(props) {
	return (
		<div>
			<main className="details-container">
				<img
					src="https://i.imgur.com/qT5xs6W.jpg"
					alt="author"
					className="info-card"
				/>
				<div className="details">
					<h2 className="about-title">About</h2>
					<p className="about-p">
						Born in Philadelphia, PA, I began my professional career in the
						music industry before taking my dreams to Los Angeles to work in the
						tv and film industry.
					</p>
					<p className="about-p">
						Hungry for more knowledge, I began studying Computer Science with a
						focus in Software Engineering. This led to a newfound passion and
						more curiosity for the field. I then enrolled at General Assembly's
						Software Engineering Immersive to sharpen my new skills. I now
						reside in New York City looking to continue my growth in this new
						industry.
					</p>
				</div>
			</main>
			<footer>
				<div className="vol-div">
					<h2>Vol. 1</h2>
				</div>
			</footer>
		</div>
	);
}

export default About;
