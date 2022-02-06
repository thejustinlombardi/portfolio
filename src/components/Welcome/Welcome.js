import { Link } from "react-router-dom";

import "./Welcome.css";

function Welcome() {
	return (
		<main className="welcome-container">
			<Link to="/home" className="start-reading">
				<div>Start Reading Here!</div>
			</Link>

			<div className="welcome-title">
				<h2>ORIGINS OF</h2>
				<h1>JUSTIN C LOMBARDI</h1>
			</div>

			<div className="welcome-subtitle">
				<h2>Experience the adventures of a new Super Developer!</h2>
			</div>

			<div className="welcome-batman">
				<img src="https://i.imgur.com/nDqzRJy.jpg" alt="justin-lombardi" />
			</div>
			<div className="welcome-bazinga">
				<img src="https://i.imgur.com/Zkdc0IV.jpg" alt="justin-lombardi" />
			</div>
			<div className="welcome-about">
				<img src="https://i.imgur.com/fVhD4Lf.jpg" alt="justin-lombardi" />
			</div>
			<div className="welcome-boom">
				<img src="https://i.imgur.com/sTG3UGN.jpg" alt="justin-lombardi" />
			</div>
			<div className="welcome-apt">
				<img src="https://i.imgur.com/98daJOW.jpg" alt="justin-lombardi" />
			</div>

			<div className="project2-div">
				<img src="https://i.imgur.com/JRURVpr.png" alt="project-screenshot" />
			</div>
			<div className="project1-div">
				<img src="https://i.imgur.com/DwmsRSM.png?1" alt="project-screenshot" />
			</div>
			<div className="project3-div">
				<img src="https://i.imgur.com/ogi8uwx.png" alt="project-screenshot" />
			</div>
			<div className="linked">
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

			<div className="git">
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
		</main>
	);
}

export default Welcome;
