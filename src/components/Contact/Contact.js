import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact(props) {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"contact_service",
				"contact_form",
				form.current,
				"user_D9fezxKcsPpYW2DNiOJg4"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<>
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

				<div className="home-cents-div">FREE EDITION</div>
				<div className="home-date-div">Apr 1993</div>
				<div className="home-batman">
					<img src="https://i.imgur.com/nDqzRJy.jpg" alt="justin-lombardi" />
				</div>
				<div className="home-bazinga">
					<img src="https://i.imgur.com/KpX5DLz.jpg?1" alt="justin-lombardi" />
				</div>
			</header>
			<main className="contact-body">
				<div className="contact-headers">
					<h3>I would love to hear from you! </h3>
					<h3>Fill out the form below to contact me and connect!</h3>
				</div>

				<form ref={form} onSubmit={sendEmail} className="sub-form">
					<label>Name:</label>
					<input
						type="text"
						name="from_name"
						placeholder="Enter name"
						className="name-input"
					/>
					<label>Email:</label>
					<input
						type="email"
						name="reply_to"
						placeholder="Enter email"
						className="email-input"
					/>
					<label>Message:</label>
					<textarea
						name="message"
						rows="10"
						cols="50"
						placeholder="Type your message here..."
						className="message-input"
					/>
					<input type="submit" value="Send" className="send-btn" />
				</form>
			</main>
			<footer className="contact-footer">
				<div className="vol-contact">
					<h2>Vol. 1</h2>
				</div>
			</footer>
		</>
	);
}

export default Contact;
