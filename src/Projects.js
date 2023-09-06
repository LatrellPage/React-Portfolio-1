import React, { useRef } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProjectsData from "./ProjectsData";

const Projects = () => {
	return (
		<>
			<Navbar />
			<ViewAllProjects />
			<Scroller />
		</>
	);
};

const Scroller = () => {
	const scrollerRef = useRef(null);

	const scrollLeft = () => {
		if (scrollerRef.current) {
			scrollerRef.current.scrollLeft -= 200;
		}
	};

	const scrollRight = () => {
		if (scrollerRef.current) {
			scrollerRef.current.scrollLeft += 200;
		}
	};

	return (
		<>
			<div className="scroll-button-container">
				<div className="left-arrow-btn" onClick={scrollLeft}>
					<FontAwesomeIcon
						icon={faArrowLeft}
						className="left-arrow"
					/>
				</div>
				<div className="right-arrow-btn" onClick={scrollRight}>
					<FontAwesomeIcon
						icon={faArrowRight}
						className="right-arrow"
					/>
				</div>
			</div>
			<div className="project-scroller" ref={scrollerRef}>
				<Cards />
			</div>
		</>
	);
};

const ViewAllProjects = () => {
	return (
		<div
			className="view-all-projects"
			onClick={() => document.getElementById("githubLink").click()}
		>
			<FontAwesomeIcon
				icon={faGithub}
				style={{
					zIndex: 999,
					fontSize: "2rem",
					color: "#000000",
				}}
			/>
			<a
				id="githubLink"
				href="https://github.com/LatrellPage?tab=repositories"
				target="_blank"
			>
				View all projects
			</a>
		</div>
	);
};

const Cards = () => {
	return (
		<>
			{ProjectsData.map((Project) => (
				<div className="card" key={Project.id}>
					<div className="card-img-container">
						<a href={Project.deployedLink}>
							<img src={Project.imgSrc} alt={Project.title}></img>
						</a>
					</div>
					<div className="card-info-container">
						<h2 className="card-header">{Project.title}</h2>
						<p className="card-p">{Project.description}</p>
						<button className="github-button">
							<a
								href={Project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								View on Github
							</a>
						</button>
					</div>
				</div>
			))}
		</>
	);
};

export default Projects;
