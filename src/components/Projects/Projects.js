import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";

import "./Project.css";

function Projects({ projects }) {
	return (
		<>
			<div className="home-border">
				<div className="project-subtitle">
					<h2>Choose the project you'd like to view below!</h2>
				</div>
				<ProjectList projects={projects} />

				<footer>
					<div className="vol-div">
						<h2>Vol. 1</h2>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Projects;
