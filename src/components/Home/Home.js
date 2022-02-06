import React from "react";

import HomeResults from "./HomeResults";

import "./Home.css";

function Home({ projects }) {
	return (
		<div className="home-border">
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
