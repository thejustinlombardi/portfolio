import React from "react";
import { Link, useParams } from "react-router-dom";

function ProjectResults({ projects }) {
	const { id } = useParams();

	return (
		<div className="project-page-container">
			<Link to="/home/projects" className="about-subtitle">
				<div>
					<h2>Back to Projects Page</h2>
				</div>
			</Link>
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
