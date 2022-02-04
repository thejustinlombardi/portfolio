import React from "react";
import { Link, useParams } from "react-router-dom";

function ProjectResults({ projects }) {
	const { id } = useParams();

	return (
		<div className="project-page-container">
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
				<Link to="/home/projects" className="about-subtitle">
					<div>
						<h2>Back to Projects Page</h2>
					</div>
				</Link>

				<div className="home-batman">
					<img src="https://i.imgur.com/nDqzRJy.jpg" alt="justin-lombardi" />
				</div>
				<div className="home-bazinga">
					<img src="https://i.imgur.com/KpX5DLz.jpg?1" alt="justin-lombardi" />
				</div>
			</header>
			<div className="project-container">
				<img
					src={projects[id].image}
					alt={projects[id].title}
					className="info-card"
				/>
				<div className="project">
					<h3 className="project-titles">Name: </h3>
					<p>{projects[id].title}</p>
					<h3 className="project-titles">Technologies Used: </h3>
					<p>{projects[id].tech}</p>
					<h4 className="project-titles">Description: </h4>
					<p>{projects[id].description}</p>
					<h4 className="project-titles">Status: </h4>
					<p>{projects[id].status}</p>
					<h4 className="project-titles">Motivation: </h4>
					<p>{projects[id].motivation}</p>
				</div>
				<a
					className="learn-more"
					target="_blank"
					href={projects[id].site}
					rel="noreferrer">
					Go to the Live Site!
				</a>
			</div>
		</div>
	);
}

export default ProjectResults;
