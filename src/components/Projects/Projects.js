import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";

import "./Project.css";

function Projects({ projects }) {
	return (
		<div className="home-border">
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

				<div className="home-batman">
					<img src="https://i.imgur.com/nDqzRJy.jpg" alt="justin-lombardi" />
				</div>
				<div className="home-bazinga">
					<img src="https://i.imgur.com/KpX5DLz.jpg?1" alt="justin-lombardi" />
				</div>
			</header>
			<div className="project-subtitle about-subtitle">
				<h2>Choose the project you'd like to view!</h2>
			</div>
			<ProjectList projects={projects} />

			<footer>
				<div className="vol-div">
					<h2>Vol. 1</h2>
				</div>
			</footer>
		</div>
	);
}

export default Projects;
