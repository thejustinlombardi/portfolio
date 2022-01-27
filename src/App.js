import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import ProjectResults from './components/Projects/ProjectResults';

function App(props) {
	const projects = [
		{
			title: 'Portfolio',
			id: 0,
			tech: 'React, CSS, EmailJS, Imgur',
			description:
				'My very own portfolio inspired by old-fashioned comic book covers!',
			status:
				'This portfolio will be my professional portfolio. Currently, it holds all of my projects with links to my GitHub and my LinkedIn profile. I also experimented with EmailJS to have a contact form that will deliver straight to my personal email! Head over to my contact page to send a message! ',
			motivation:
				'My love for comics and creativity brought me to this concept. I wanted to do something out of the ordinary and, again, challenge myself with a design completely from scratch. This will continue to be updated and formatted for mobile, tablet, and desktop use. The ability to showcase who I am and what I love all in the same space is truly a wonderful feeling! Please, enjoy! ',
			image: 'https://i.imgur.com/D8Dzpv3.png',
			site: 'www.thejustinlombardi.com',
		},
		{
			title: 'My Favorite Hero',
			id: 1,
			tech: 'React, CSS, Netlify, Imgur',
			description:
				'A superhero app that allows you to search for your favorite heroes using a great API, fun styling, and React!',
			status:
				"This app is fully functional and currently is designed for mobile, tablet, and desktop use! The fellow hero can explore up to 700+ superheroes thanks to a wonderful superhero API that has been integrated into the site. Currently, you can search for your own hero by name or be given a random hero to learn about. The user will be able to also click a 'Learn More' button that will take them to a more in-depth database with more facts. Users will eventually be able to sign up and sign in to keep a list of their favorite heroes!",
			motivation:
				'I absolutely love comics and the superhero universe! I am also always trying to remember the names, looks, and aliases of my favorite heroes and villains. I wanted to create a space to do that in while also challenging myself to work on my CSS skills. This app tested my attention to detail and I am proud of the functionality of it!',
			image: 'https://i.imgur.com/DwmsRSM.png?1',
			site: 'https://my-favorite-hero.netlify.app/',
		},
		{
			title: 'Simon - The Game',
			id: 2,
			tech: 'HTML, CSS, JavaScript, GarageBand',
			description: 'A web browser take on the classic game Simon!',
			status:
				'This game is fully functional and currently has two additional modes to play. There is a time attack version that gives the player two minutes to get as high of a score as they can. There is also a hard mode that doubles the sequences as you progress to each round!',
			motivation:
				'I wanted to challenge myself with this project because I knew it was going to be difficult to get the sounds to line up right with the glow. I used to love playing this game when I was a kid and, as a first project, I wanted the challenge.',
			image: 'https://i.imgur.com/JRURVpr.png',
			site: 'https://thejustinlombardi.github.io/simon-browser-game/',
		},
	];
	return (
		<div className="app-container">
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
		</div>
	);
}

export default App;
