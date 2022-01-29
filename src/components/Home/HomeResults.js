import React from 'react';
import { Link } from 'react-router-dom';

function HomeResults(props) {
	return (
		<div>
			<main className="hero-card">
				<Link to={`/home/about`} className="issues-div about-div">
					<img
						className="card-img"
						src="https://i.imgur.com/fVhD4Lf.jpg"
						alt="justin-lombardi-about"
					/>
					<div className="card-text">
						<h2>Issue #01</h2>
						<h2>About</h2>
					</div>
				</Link>

				<Link to={`/home/projects`} className="issues-div projects-div">
					<img
						className="card-img"
						src="https://i.imgur.com/JRURVpr.png"
						alt="justin-lombardi-projects"
					/>
					<div className="card-text">
						<h2>Issue #02</h2>
						<h2>Projects</h2>
					</div>
				</Link>

				<Link to={`/home/resume`} className="issues-div resume-div">
					<img
						className="card-img"
						src="https://i.imgur.com/KSXZH4W.png"
						alt="justin-lombardi-resume"
					/>
					<div className="card-text">
						<h2>Issue #03</h2>
						<h2>Resume/Skills</h2>
					</div>
				</Link>

				<Link to={`/home/contact`} className="issues-div contact-div">
					<img
						className="card-img"
						src="https://i.imgur.com/ngXfHHu.jpg"
						alt="justin-lombardi-contact"
					/>
					<div className="card-text">
						<h2>Issue #04</h2>
						<h2>Contact</h2>
					</div>
				</Link>
			</main>
		</div>
	);
}

export default HomeResults;
