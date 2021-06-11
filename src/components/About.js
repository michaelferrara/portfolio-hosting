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
				<p>I live in the Orlando area and am a proud Knight and graduate of UCF and the Burnett Honors College. I graduated with my B.S. in Computer Science in the Spring of 2021. I’m currently working as a web application developer at UCF in the Materia cohort where I am able to develop educational and accessible widgets for their online learning platform. When I’m not programming for work, I enjoy developing games in Unity, learning more about web development, playing volleyball, and playing video games with friends.</p>
			</div>
		</div>
	);
}

export default About;
