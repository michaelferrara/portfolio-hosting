import React, { useEffect, useRef } from 'react';
import './HomePage.scss';

function Experience({ setHeight }) {
	const experienceRef = useRef(null)

	useEffect(() => {
		setHeight(experienceRef.current.getBoundingClientRect().top - 500)
	}, [])

	return (
		<div ref={experienceRef} id="experience">
		</div>
	);
}

export default Experience;
