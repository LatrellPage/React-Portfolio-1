import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";


const Home = () => {
	return (
		<>
			<Navbar />
			<HomeContent />
		</>
	);
};





const HomeContent = () => {
	return (
		<>
			<div className="home-content-container">
				<div className="content-container">
					<h1 className="hello">Hello, I am</h1>
					<h2>
						<strong className="name">La'Trell Page</strong>
					</h2>
					<h3 className="job-title">Fullstack Developer</h3>
					<p className="about-me-p">
						I'm a creative builder and lifelong learner, constantly
						driven to turn ideas into reality. I embrace the
						challenges that come my way, always seeking to improve
						and make a positive impact.
					</p>
					<div className="socials-container">
						<a
							href="https://github.com/AnferneePage"
							target="_blank"
						>
							<FontAwesomeIcon
								icon={faGithub}
								style={{
									zIndex: 999,
									fontSize: "3rem",
									color: "#000000",
								}}
							/>
						</a>

						<div className="linked-in-button">
							<a
								href="https://www.linkedin.com/in/la-trell-page-17200b273/"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faLinkedinIn}
									style={{
										zIndex: 999,
										fontSize: "1.5rem",
										color: "#fff",
										marginLeft: "14px",
										marginRight: "auto",
										marginTop: "13px",
										marginBottom: "auto",
									}}
								/>
							</a>
						</div>
						<div className="x-button">
							<a
								href="https://twitter.com/LatrellPage"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faXTwitter}
									style={{
										color: "fff",
										zIndex: 999,
										fontSize: "1.7rem",
										marginLeft: "10px",
										marginRight: "auto",
										marginTop: "10px",
										marginBottom: "auto",
									}}
								/>
							</a>
						</div>
					</div>
					<button className="contact-me-button">Contact Me</button>
					<button className="resume-button">Resume</button>
				</div>
				<div className="coding-vector-image-container">
					<img
						src="https://img.freepik.com/premium-vector/programmer-working-concept-web-banner-man-work-with-code-programming-computer_9209-7397.jpg?w=2000"
						alt=""
					></img>
				</div>
			</div>
		</>
	);
};

export default Home;
