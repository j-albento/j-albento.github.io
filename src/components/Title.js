import React from "react";
import Typewriter from "typewriter-effect";

export default function Title() {
	return (
		<div>
			<Typewriter
				options={{ loop: true }}
				onInit={(typewriter) => {
					typewriter
						.changeDelay("natural")
						.typeString("Aspiring Full Stack Developer.")
						.pauseFor(1500)
						.deleteAll()
						.typeString("User-Focused Designer")
						.pauseFor(1500)
						.start();
				}}
			/>
		</div>
	);
}
