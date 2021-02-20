import React, { useEffect, useRef } from 'react';
import './HomePage.scss';

function About({ setHeight }) {
	const aboutRef = useRef(null)

	useEffect(() => {
		setHeight(aboutRef.current.getBoundingClientRect().top - 400)
	}, [setHeight])

	return (
		<div ref={aboutRef} id="about">
			<div className="about-backing">
				<h3>About</h3>
				<p>I live in the Orlando area and am a proud Knight at UCF and the Burnett Honors College. I will be graduating with my B.S. in Computer Science in the Spring of 2021. I’m currently working as a Techranger at UCF in the Materia cohort where I am able to develop educational and accessible widgets for our online learning platform.
When I’m not programming for work I enjoy developing games in Unity, playing volleyball, practicing and learning more about web developement, and playing videogames with friends.</p>
			</div>
		</div>
	);
}

export default About;
