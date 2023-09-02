import React from "react";
import styles from "../components/ProjectCard.module.css";

const ProjectCard = ({ title, description, languages = [], link }) => {
	return (
		<div className={styles.projectContainer}>
			<div className={styles.projectInfo}>
				<div className={styles.projectHeading}>
					<h3>{title}</h3>
					<a href={link}>GitHub Repo</a>
				</div>
				<div className={styles.projectDescription}>
					<p>{description}</p>
				</div>
			</div>
			<div className={styles.languageContainer}>
				{languages.map((name, index) => (
					<div className={styles.language} key={index}>
						{name}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
