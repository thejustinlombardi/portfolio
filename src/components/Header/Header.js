import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
	return (
		<header className="home-container">
			<div className="home-title">
				<h2>ORIGINS OF</h2>
				<h1>JUSTIN C LOMBARDI</h1>
			</div>

			<div className="home-linked">
				<a href="https://linkedin.com/in/justin-lombardi" target="blank">
					<img
						src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
						alt="justin-lombardi"
					/>
				</a>
			</div>
			<div className="home-git">
				<a href="https://github.com/thejustinlombardi" target="blank">
					<img src="https://i.imgur.com/xwOFfCj.png" alt="justin-lombardi" />
				</a>
			</div>

			<div className="home-batman">
				<img src="https://i.imgur.com/nDqzRJy.jpg" alt="justin-lombardi" />
			</div>
			<div className="home-bazinga">
				<img src="https://i.imgur.com/Zkdc0IV.jpg" alt="justin-lombardi" />
			</div>
			<Link to="/home" className="about-subtitle">
				<div>
					<h2>Back to Home Page</h2>
				</div>
			</Link>
		</header>
	);
}

export default Header;
