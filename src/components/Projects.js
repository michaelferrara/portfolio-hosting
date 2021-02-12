import React, { useEffect, useRef, useState } from 'react';
import './HomePage.scss';

function Projects({ setHeight }) {
	const projectsRef = useRef(null)

	useEffect(() => {
		setHeight(projectsRef.current.getBoundingClientRect().top - 500)
	}, [])

	return (
		<div ref={projectsRef} id="projects">
		</div>
	);
}

export default Projects;
