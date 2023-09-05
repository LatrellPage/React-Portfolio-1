import React from "react";
import Navbar from "./Navbar";

const AboutMe = () => {
	return (
		<>
			<Navbar />
			<AboutMeContent />
		</>
	);
};

const AboutMeContent = () => {
	return (
		<div className="about-me-content">
			<Image />
			<AboutMeParagraph />
		</div>
	);
};

const AboutMeParagraph = () => {
	return (
		<>
			<div class="about-me-info-container">
				<h1 className="about-me-header">So, who am I?</h1>
				<p className="about-me-p">
					Born in the year 2003 in the vibrant city of Mobile,
					Alabama, I've embarked on a journey filled with curiosity
					and a relentless pursuit of growth. Here's a glimpse into
					who I am: <br /><br />From the earliest days of my existence, I've been
					driven by an insatiable curiosity, a burning desire to ask
					questions, and a natural inclination to question
					conventional wisdom. These traits have shaped me into a
					lifelong learner who thrives on the quest for knowledge and
					understanding.<br /><br /> Reading is not just a pastime for me; it's a
					passion that has opened countless doors to new worlds,
					ideas, and perspectives. I find solace and excitement in the
					pages of books, and I'm always eager to explore the next
					literary adventure.<br /><br /> Traveling is another avenue through
					which I seek to broaden my horizons. Exploring new places,
					experiencing diverse cultures, and tasting exotic cuisines
					are more than just leisure activities—they're opportunities
					for personal growth and a deeper appreciation of the world's
					richness.<br /><br /> Debate is where I refine my thoughts and test my
					ideas. Engaging in meaningful discussions, whether with
					friends or in a public forum, is a vital part of my journey.
					It allows me to challenge my own beliefs, expand my
					perspective, and discover new angles of thinking.<br /><br /> Building
					and creating are essential aspects of my identity. I have a
					profound love for turning ideas into reality, whether
					through entrepreneurial ventures, innovative projects, or
					artistic endeavors. This passion drives me to take action
					and bring positive change to the world. <br /><br />Above all, I am
					addicted to progress. The pursuit of improvement, in both my
					personal and professional life, is a constant motivator. I
					see each day as an opportunity to grow, learn, and make a
					positive impact, not only on my own life but on the lives of
					those around me.<br /><br /> In essence, I am a curious explorer, a
					knowledge seeker, a voracious reader, a passionate traveler,
					a skilled debater, a challenger of the status quo, a builder
					of dreams, and an advocate for progress. My journey is one
					of continuous learning and growth, and I'm excited to see
					where it leads next.<br /><br />
				</p>
			</div>
		</>
	);
};

const Image = () => {
	return (
		<>
			<div className="about-me-img-container">
				<img src="/CutOffImageOfMe.png" alt=""></img>
			</div>
		</>
	);
};

export default AboutMe;
