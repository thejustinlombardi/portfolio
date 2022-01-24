import React from "react";
import { Link } from "react-router-dom";

import "./About.css";

function About(props) {
	return (
		<div>
			<header className="home-container">
				<div className="home-title">
					<h2>ORIGINS OF</h2>
					<h1>JUSTIN C LOMBARDI</h1>
				</div>

				<div className="home-linked">
					<a href="https://linkedin.com/in/justin-lombardi" target="blank">
						<img
							align="center"
							src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
							alt="justin-lombardi"
							height="30"
							width="40"
						/>
					</a>
				</div>
				<div className="home-git">
					<a href="https://github.com/thejustinlombardi" target="blank">
						<img
							align="center"
							src="https://i.imgur.com/xwOFfCj.png"
							alt="justin-lombardi"
							height="30"
							width="40"
						/>
					</a>
				</div>
				<Link to="/home" className="about-subtitle">
					<div>
						<h2>Back to Home Page</h2>
					</div>
				</Link>

				<div className="home-cents-div">FREE EDITION</div>
				<div className="home-date-div">Apr 1993</div>
				<div className="home-batman">
					<img src="https://i.imgur.com/nDqzRJy.jpg" alt="justin-lombardi" />
				</div>
				<div className="home-bazinga">
					<img src="https://i.imgur.com/KpX5DLz.jpg?1" alt="justin-lombardi" />
				</div>
			</header>
			<main className="details-container">
				<img
					src="https://i.imgur.com/qT5xs6W.jpg"
					alt="author"
					className="info-card"
				/>
				<div className="details">
					<h2 className="about-title">About</h2>
					<p className="about-p">
						The story of Justin Lombardi goes something like this...
					</p>
					<p className="about-p">
						Born in Philadelphia, PA, a hard-working musician and salesman
						morphed into a full-time sales manager and part time audio engineer
						by 20 years old. Opportunity arose and took him across the country
						to work in the television and film industry in Los Angeles.
					</p>
					<p className="about-p">
						Hungry for more, Justin then began his journey studying Computer
						Science with a focus in Software Engineering. This led to a new
						found passion and more curiosity as he then enrolled at General
						Assembly's Software Engineering Immersive. Strapped with his new
						utility belt of skills, this Super Developer is ready to take
						control of his future as a Software Developer and Engineer in New
						York City.
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
