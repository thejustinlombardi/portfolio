import React from 'react';
import { Link } from 'react-router-dom';

import './Resume.css';

function Resume(props) {
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
			<main className="resume-container">
				<h2 className="resume-titles">Resume</h2>
				<h3 className="resume-titles">Click resume below to download</h3>
				<a
					className="resume-card"
					target="_blank"
					href="https://drive.google.com/file/d/1jsid7GbIdgTcYqFjdhRlQ-50l-1bgVMQ/view?usp=sharing"
					rel="noreferrer">
					<img src="https://i.imgur.com/KSXZH4W.png" alt="author" />
				</a>
				<div>
					<h2 className="resume-titles">Technical Skills</h2>
				</div>
				<div className="resume-icons">
					{' '}
					<a
						href="https://www.w3schools.com/cpp/"
						target="_blank"
						rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
							alt="cplusplus"
						/>{' '}
					</a>{' '}
					<a
						href="https://www.w3schools.com/css/"
						target="_blank"
						rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
							alt="css3"
						/>{' '}
					</a>{' '}
					<a
						href="https://www.djangoproject.com/"
						target="_blank"
						rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg"
							alt="django"
						/>{' '}
					</a>{' '}
					<a href="https://expressjs.com" target="_blank" rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
							alt="express"
						/>{' '}
					</a>{' '}
					<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
							alt="html5"
						/>{' '}
					</a>{' '}
					<a href="https://www.java.com" target="_blank" rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
							alt="java"
						/>{' '}
					</a>{' '}
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						target="_blank"
						rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
							alt="javascript"
						/>{' '}
					</a>{' '}
					<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
							alt="mongodb"
						/>{' '}
					</a>{' '}
					<a href="https://nodejs.org" target="_blank" rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
							alt="nodejs"
						/>{' '}
					</a>{' '}
					<a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
							alt="postgresql"
						/>{' '}
					</a>{' '}
					<a href="https://www.python.org" target="_blank" rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
							alt="python"
						/>{' '}
					</a>{' '}
					<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
							alt="react"
						/>{' '}
					</a>{' '}
					<a
						href="https://www.typescriptlang.org/"
						target="_blank"
						rel="noreferrer">
						{' '}
						<img
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
							alt="typescript"
						/>{' '}
					</a>{' '}
				</div>
				<div className="resume-list-container">
					<ul className="resume-list">
						<li> React </li>
						<li> JavaScript </li>
						<li> CSS </li>
						<li> HTML </li>
						<li> TypeScript </li>
						<li> MongoDB </li>
						<li> Node.js </li>
						<li> Express.js </li>
					</ul>
					<ul className="resume-list">
						<li> Python </li>
						<li> Java </li>
						<li> C++ </li>
						<li> SQL </li>
						<li> PostgreSQL </li>
						<li> Django </li>
						<li> Git/Github </li>
						<li> Postman</li>
					</ul>
				</div>
			</main>
			<footer>
				<div className="vol-div">
					<h2>Vol. 1</h2>
				</div>
			</footer>
		</div>
	);
}

export default Resume;
