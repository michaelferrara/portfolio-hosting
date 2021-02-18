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
					<h4>Techrangers (2020-Present)</h4>
					<p>Select apprenticeship providing web application development
					for the University of Central Florida and course development
					support for faculty. Develop unique, and maintain existing,
					educational and, accessible widgets using Angular, PHP, and
					React for UCF’s in-house, open-source learning platform,
					Materia. Currently converting the entire platform from
					PHP/Angular to ReactJS.
					</p>
					<h4>Thales (2017)</h4>
					<p>Reported to the Director of Software Development, and
					assisted the team developing airline, in-flight entertainment
					systems. Worked with developers and designers to create
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
