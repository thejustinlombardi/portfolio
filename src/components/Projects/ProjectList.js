import { Link } from "react-router-dom";

function ProjectList({ projects }) {
	return (
		<div className="project-card">
			{projects.map((project, index) => {
				return (
					<Link
						to={`/home/projects/${project.id}`}
						className="issues-div about-div"
						key={`${project.title}-${index}`}>
						<img
							className="project-card-img"
							src={project.image}
							alt={project.title}
						/>
						<h2>{project.title}</h2>
					</Link>
				);
			})}
		</div>
	);
}

export default ProjectList;
