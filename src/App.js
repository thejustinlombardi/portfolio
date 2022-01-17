import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";

function App(props) {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/Home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
