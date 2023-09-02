import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../components/Navbar.module.css";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(true);

	return (
		<nav>
			<div className={styles.title}>
				<a href="/">ALBENTO.</a>
			</div>

			<ul className={`${styles.links} ${showMenu ? styles.show : ""}`}>
				<li>
					<a href="#about">ABOUT</a>
				</li>
				<li>
					<a href="#projects">PROJECTS</a>
				</li>
				<li>
					<a href="#resume">RESUME</a>
				</li>
				<div className={styles.icons}>
					<li>
						<a href="#/">
							<MailIcon />
						</a>
					</li>
					<li>
						<a href="https://github.com/j-albento">
							<GitHubIcon />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/joanna-albento/">
							<LinkedInIcon />
						</a>
					</li>
				</div>
			</ul>
			<IconButton
				className={styles.menuButton}
				onClick={() => setShowMenu(!showMenu)}>
				<MenuIcon />
			</IconButton>
		</nav>
	);
};

export default Navbar;
