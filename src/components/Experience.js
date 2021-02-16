import React, { useEffect, useRef } from 'react';
import './HomePage.scss';

function Experience({ setHeight }) {
	const experienceRef = useRef(null)
	const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

	useEffect(() => {
		setHeight(experienceRef.current.getBoundingClientRect().top - 500)
	}, [setHeight])

	return (
		<div ref={experienceRef} id="experience">
			<div className="experience-backing">
				<h3>Experience</h3>
				<h4>Techrangers (2020-Present)</h4>
				<p>{lorem}</p>
				<h4>Thales (2017)</h4>
				<p>{lorem}</p>
			</div>
		</div>
	);
}

export default Experience;
