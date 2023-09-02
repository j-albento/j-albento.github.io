import React from "react";
import "./App.css";
import "@fontsource-variable/maven-pro";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Title from "./components/Title";

function App() {
	return (
		<div className="App">
			<Navbar />
			<section id="home">
				<h1>
					<Title />
				</h1>
			</section>
			<section id="about">
				<div className="section-title">BACKGROUND</div>
				<div className="section-content">
					<p>
						Hello! My name is Joanna Albento. I'm a recent graduate from the{" "}
						<span className="link">
							<a href="https://www.sait.ca/">
								Southern Alberta Institute of Technology
							</a>
						</span>{" "}
						where I studied software development and continue my passion for
						programming every day.
					</p>
					<p style={{ paddingTop: 20 }}>
						When I'm not at my computer, I'm usually being haunted by bugs in a
						project so I take my stress and frustrations out by picking up
						weights and putting them back down, hanging out with my dogs, or
						casting spells on Wizard101.
					</p>
				</div>
			</section>
			<section id="projects">
				<div className="section-title">PROJECTS</div>

				<div className="section-content">
					<ProjectCard
						title={"Appointment Scheduler"}
						description={
							"A Capstone project carefully designed and developed with other student developers for a local massage therapy business based in Calgary, AB."
						}
						link={""}
						languages={["Java", "MySQL", "HTML/CSS", "JavaScript"]}
					/>
					<ProjectCard
						title={"Todo List"}
						description={
							"A redesigned and refactored version of a previous todo list project."
						}
						link={"https://github.com/j-albento/todo"}
						languages={["React", "HTML/CSS"]}
					/>
					<ProjectCard
						title={"Password Generator"}
						description={
							"My take on a password generator with design inspired by various applications."
						}
						link={"https://github.com/j-albento/password-generator"}
						languages={["React", "HTML/CSS", "Material UI"]}
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
