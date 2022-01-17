import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home(props) {
	return (
		<>
			<div className="home-container">
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

				<div className="home-subtitle">
					<h2>Choose your issue below!</h2>
				</div>
				<div className="home-cents-div">FREE EDITION</div>
				<div className="home-date-div">Apr 1993</div>
				<div className="home-batman">
					<img src="https://i.imgur.com/nDqzRJy.jpg" alt="justin-lombardi" />
				</div>
				<div className="home-bazinga">
					<img src="https://i.imgur.com/KpX5DLz.jpg?1" alt="justin-lombardi" />
				</div>

				<Link to={`/home/about`} className="issues-div about-div">
					<img
						className="card-img"
						src="https://i.imgur.com/fVhD4Lf.jpg"
						alt="justin-lombardi"
					/>
					<h2>Issue #01</h2>
					<h2>About Me</h2>
				</Link>

				<Link to={`/home/projects`} className="issues-div projects-div">
					<img
						className="card-img"
						src="https://i.imgur.com/fVhD4Lf.jpg"
						alt="justin-lombardi"
					/>
					<h2>Issue #02</h2>
					<h2>Projects</h2>
				</Link>

				<Link to={`/home/resume`} className="issues-div resume-div">
					<img
						className="card-img"
						src="https://i.imgur.com/fVhD4Lf.jpg"
						alt="justin-lombardi"
					/>
					<h2>Issue #03</h2>
					<h2>Skills</h2>
				</Link>

				<Link to={`/home/contact`} className="issues-div contact-div">
					<img
						className="card-img"
						src="https://i.imgur.com/fVhD4Lf.jpg"
						alt="justin-lombardi"
					/>
					<h2>Issue #04</h2>
					<h2>Resume</h2>
				</Link>

				<div className="vol-div">
					<h2>Vol. 1</h2>
				</div>
			</div>
		</>
	);
}

export default Home;
