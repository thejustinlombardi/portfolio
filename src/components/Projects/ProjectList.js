import { Link } from "react-router-dom";

function ProjectList({ projects }) {
	return (
		<div className="hero-card">
			{projects.map((project) => {
				return (
					<Link
						to={`/home/projects/${project.id}`}
						className="issues-div about-div">
						<img className="card-img" src={project.image} alt={project.title} />
						<h2>{project.title}</h2>
					</Link>
				);
			})}
		</div>
	);
}

export default ProjectList;
