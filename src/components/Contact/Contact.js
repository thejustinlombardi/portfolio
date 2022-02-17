import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact(props) {
	const [sent, setSent] = useState(false);
	const form = useRef();

	useEffect(() => {
		setSent(false);
	}, []);

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
					setSent(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="contact-border">
			<main className="contact-body">
				<div className="contact-headers">
					<h3>I would love to hear from you! </h3>
					<h3>Fill out the form below to contact me and connect!</h3>
				</div>
				<div>
					{!sent ? (
						<form ref={form} onSubmit={sendEmail} className="sub-form">
							<label>Name:</label>
							<input
								type="text"
								name="from_name"
								placeholder="Enter name"
								className="name-input"
								required
							/>
							<label>Email:</label>
							<input
								type="email"
								name="reply_to"
								placeholder="Enter email"
								className="email-input"
								required
							/>
							<label>Message:</label>
							<textarea
								name="message"
								rows="10"
								cols="40"
								placeholder="Type your message here..."
								className="message-input"
								required
							/>
							<input type="submit" value="Send" className="send-btn" />
						</form>
					) : (
						<h2 className="sent-reply">Message sent! Talk to you soon!</h2>
					)}
				</div>
			</main>
		</div>
	);
}

export default Contact;
