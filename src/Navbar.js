// Navbar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleMenu = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<header>
			<nav className="navbar">
				{!isDropdownOpen ? (
					<h1 className="header-name">{"<La'Trell Page />"}</h1>
				) : (
					<div className="x-icon" onClick={toggleMenu}>
						<FontAwesomeIcon
							icon={faXmark}
							style={{
								color: "#ffffff",
								zIndex: 999,
								fontSize: "1.5rem",
								position: "absolute",
								top: "10px",
								right: "10px",
							}}
						/>
					</div>
				)}
				{!isDropdownOpen ? (
					// Content to render if isDropdownOpen is false
					<div className="burger-icon" onClick={toggleMenu}>
						<FontAwesomeIcon
							icon={faBars}
							style={{ color: "#ffffff" }}
						/>
					</div>
				) : null}

				{isDropdownOpen && <Dropdown />}
				<ul className="nav-links">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/aboutme">About Me</a>
					</li>
					<li>
						<a href="/skills">Skills</a>
					</li>
					<li>
						<a href="/projects">Projects</a>
					</li>
					<li>
						<a href="/contact">Contact Me</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

const Dropdown = () => {
	return (
		<div className="dropdown">
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/aboutme">About Me</a>
				</li>
				<li>
					<a href="/skills">Skills</a>
				</li>
				<li>
					<a href="/projects">Projects</a>
				</li>
				<li>
					<a href="/contact">Contact Me</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
