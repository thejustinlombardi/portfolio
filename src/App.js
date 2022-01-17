import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

function App(props) {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/home" element={<Home />} />
				<Route path="/home/about" element={<About />} />
				<Route path="/home/projects" element={<Projects />} />
				<Route path="/home/contact" element={<Contact />} />
				<Route path="/home/resume" element={<Resume />} />
			</Routes>
		</div>
	);
}

export default App;
