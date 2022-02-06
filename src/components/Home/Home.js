import React from "react";

import HomeResults from "./HomeResults";

import "./Home.css";

function Home({ projects }) {
	return (
		<div className="home-border">
			<div className="home-subtitle">
				<h2>Choose your issue below!</h2>
			</div>
			<HomeResults />
			<footer>
				<div className="vol-div">
					<h2>Vol. 1</h2>
				</div>
			</footer>
		</div>
	);
}

export default Home;
