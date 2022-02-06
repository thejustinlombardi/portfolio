import ProjectList from "./ProjectList";

import "./Project.css";

function Projects({ projects }) {
	return (
		<>
			<div>
				<div className="project-subtitle">
					<h2>Choose the project you'd like to view below!</h2>
				</div>
				<ProjectList projects={projects} />
			</div>
		</>
	);
}

export default Projects;
