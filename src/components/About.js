import React, { useEffect, useRef } from 'react';
import './HomePage.scss';

function About({ setHeight }) {
	const aboutRef = useRef(null)

	useEffect(() => {
		setHeight(aboutRef.current.getBoundingClientRect().top - 500)
	}, [])

	return (
		<div ref={aboutRef} id="about">
		</div>
	);
}

export default About;
