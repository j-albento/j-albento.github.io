import React from "react";
import styles from "./Form.module.css";

export default function ContactForm() {
	return (
		<form action="/contact" className={styles.contactForm}>
			<div className={styles.formContainer}>
				<div className={styles.formInfo}>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						required
					/>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Email"
						required
					/>
				</div>
				<div className={styles.messageContainer}>
					<textarea
						id="message"
						name="message"
						placeholder="Type your message here"
						rows={5}
						cols={35}
						maxLength={200}
						required
					/>
				</div>
			</div>
			<div className={styles.buttonContainer}>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
}
