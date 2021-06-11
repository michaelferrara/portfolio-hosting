import React, { useEffect, useRef } from 'react';
import './HomePage.scss';

function Experience({ setHeight }) {
	const experienceRef = useRef(null)

	useEffect(() => {
		setHeight(experienceRef.current.getBoundingClientRect().top - 500)
	}, [setHeight])

	return (
		<div ref={experienceRef} id="experience">
			<div className="experience-backing">
				<h3>Experience</h3>
				<div className="experience-content">
					<h4>Techrangers (5/2020-Present)</h4>
					<p>Web application developer and course development support
						for online learning. Developing unique and maintaining
						existing, educational, and accessible widgets using React,
						AngularJS, and PHP for UCF’s in-house, open-source learning
						platform, Materia. Currently tasked with leading conversion of
						Materia’s front-end from AngularJS to React.
					</p>
					<h4>Thales (2017)</h4>
					<p>Reported to the Director of Software Development; assisted
						the team developing airline, in-flight entertainment systems.
						Worked with developers and designers to create
						documentation laying out the exact design and structure of
						the entertainment systems. Created three separate sets of
						documentation for Air Canada, Royal Air Maroc, and JetBlue’s
						seatback entertainment system.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Experience;
