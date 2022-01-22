import React, { useRef } from "react";
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
		<form ref={form} onSubmit={sendEmail} className="sub-form">
			<label>Name</label>
			<input type="text" name="from_name" />
			<label>Email</label>
			<input type="email" name="reply_to" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
		</form>
	);
}

export default Contact;
