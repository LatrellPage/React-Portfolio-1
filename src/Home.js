import React from "react";

const Home = () => {
	return (
		<div>
			<Navbar />
			<HomeContent />
		</div>
	);
};

const Navbar = () => {
	return (
		<header>
			<nav>
                <div><img src=''/></div>
				<ul>
					<li>
						<a href="/aboutme">About Me</a>
					</li>
					<li>
						<a href="/skills">skills</a>
					</li>
					<li>
						<a href="/projects">projects</a>
					</li>
					<li>
						<a href="/contact">Contact Me</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

const HomeContent = () => {
	return (
		<>
			<h1>Hello</h1>
			<h2>
				I am <strong className="name">La'Trell Page</strong>
			</h2>
			<h3>Fullstack Developer</h3>
			<div className="socials-container">
				<div className="github-button">
					<a href="https://github.com/AnferneePage"></a>
				</div>
				<div className="linked-in-button">
					<a href="https://www.linkedin.com/in/la-trell-page-17200b273/"></a>
				</div>
				<div className="x-button">
					<a href="https://twitter.com/LatrellPage"></a>
				</div>
			</div>
			<button className="contact-me-button">Contact Me</button>
			<button className="resume-button">See my resume</button>
			<img></img>
		</>
	);
};

export default Home;
