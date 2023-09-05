import React from "react";
import Navbar from ".//Navbar";

// Skills.js

const Skills = () => {
	return (
		<>
			<Navbar />
			<SkillsContainer />
		</>
	);
};

const SkillsContainer = () => {
	return (
		<div className="skills-container">
			<main>
				<section className="client-side">
					<h2>Client Side</h2>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>Vanilla JavaScript</li>
						<li>React</li>
						<li>TypeScript</li>
						<li>Tailwind CSS</li>
						<li>Bootstrap</li>
						<li>Jinja2</li>
					</ul>
				</section>
				<section className="server-side">
					<h2>Server Side</h2>
					<ul>
						<li>Node.js</li>
						<li>Express.js</li>
						<li>RESTful API</li>
						<li>MongoDB</li>
						<li>Mongoose</li>
						<li>GraphQL</li>
						<li>NoSQL</li>
						<li>SQL</li>
						<li>Bcrypt</li>
						<li>JSON</li>
						<li>JWT (JSON Web Tokens)</li>
						<li>Python</li>
					</ul>
				</section>
				<section className="soft-skills">
					<h2>Soft Skills</h2>
					<ul>
						<li>Git Version Control</li>
						<li>Teamwork and Collaboration</li>
						<li>Fast Learner</li>
					</ul>
				</section>
			</main>
		</div>
	);
};

export default Skills;
