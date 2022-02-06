import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import ProjectResults from "./components/Projects/ProjectResults";

function App(props) {
	const { pathname } = useLocation();
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjects();
	}, []);

	const getProjects = async () => {
		try {
			// change fetch request path to https://jcl-portfolio.herokuapp.com/
			const res = await axios.get(
				`https://jcl-portfolio.herokuapp.com/api/projects`
			);
			setProjects(res.data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="home-border">
			{pathname !== "/" && <Header />}
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/home" element={<Home />} />
				<Route path="/home/about" element={<About />} />
				<Route
					path="/home/projects"
					element={<Projects projects={projects} />}
				/>
				<Route path="/home/contact" element={<Contact />} />
				<Route path="/home/resume" element={<Resume />} />
				<Route
					path="/home/projects/:id"
					element={<ProjectResults projects={projects} />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
