import React, { useRef } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
	return (
		<>
			<Navbar />
			<ViewAllProjects />
			<Scroller />
			<Scroller />
			<Scroller />
		</>
	);
};


const Scroller = () => {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft -= 100; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft += 100; // Adjust the scroll amount as needed
    }
  };

  return (
    <>
      <div className="scroll-button-container">
        <div className="left-arrow-btn" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" />
        </div>
        <div className="right-arrow-btn" onClick={scrollRight}>
          <FontAwesomeIcon icon={faArrowRight} className="right-arrow" />
        </div>
      </div>
      <div className="project-scroller" ref={scrollerRef}>
        < Cards />
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
				href="https://github.com/AnferneePage"
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
			<div className="card">
				<div className="card-img-container">
					<img
						src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
						alt="project"
					></img>
				</div>
				<div className="card-info-container">
					<h2 className="card-header">Project Name</h2>
					<p className="card-p">
						The quick brown fox jumps over the lazy dog.
					</p>
					<button className="github-button">
						<a href="google.com">View on Github</a>
					</button>
				</div>
			</div>

			<div className="card">
				<div className="card-img-container">
					<img
						src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
						alt="project"
					></img>
				</div>
				<div className="card-info-container">
					<h2 className="card-header">Project Name</h2>
					<p className="card-p">
						The quick brown fox jumps over the lazy dog.
					</p>
					<button className="github-button">
						<a href="google.com">View on Github</a>
					</button>
				</div>
			</div>

			<div className="card">
				<div className="card-img-container">
					<img
						src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
						alt="project"
					></img>
				</div>
				<div className="card-info-container">
					<h2 className="card-header">Project Name</h2>
					<p className="card-p">
						The quick brown fox jumps over the lazy dog.
					</p>
					<button className="github-button">
						<a href="google.com">View on Github</a>
					</button>
				</div>
			</div>

			<div className="card">
				<div className="card-img-container">
					<img
						src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
						alt="project"
					></img>
				</div>
				<div className="card-info-container">
					<h2 className="card-header">Project Name</h2>
					<p className="card-p">
						The quick brown fox jumps over the lazy dog.
					</p>
					<button className="github-button">
						<a href="google.com">View on Github</a>
					</button>
				</div>
			</div>

			<div className="card">
				<div className="card-img-container">
					<img
						src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
						alt="project"
					></img>
				</div>
				<div className="card-info-container">
					<h2 className="card-header">Project Name</h2>
					<p className="card-p">
						The quick brown fox jumps over the lazy dog.
					</p>
					<button className="github-button">
						<a href="google.com">View on Github</a>
					</button>
				</div>
			</div>
		</>
	);
};

export default Projects;
