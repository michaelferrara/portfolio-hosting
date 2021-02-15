import React from 'react';
import './HomePage.scss';

function TopBar({ activeContent }) {

	const selectContent = (val) => {
		const yOffset = -100;
		let elem = {}
		let y = 0

		switch (val) {
			case (1):
				elem = document.getElementById("about")
				y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
				break
			case (2):
				elem = document.getElementById("experience")
				y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
				break
			case (3):
				elem = document.getElementById("projects")
				y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
				break
			default:
				elem = document.getElementById("home")
				y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
				break
		}
	}

	return (
		<div className="top-bar">
			<span className={`${activeContent === "home" ? "current" : ""}`}
				onClick={() => { selectContent(0) }}
				onTouchStart={() => { selectContent(0) }}>
				Home
			</span>
			<span className={`${activeContent === "about" ? "current" : ""}`}
				onClick={() => { selectContent(1) }}
				onTouchStart={() => { selectContent(1) }}>
				About
			</span>
			<span className={`${activeContent === "experience" ? "current" : ""}`}
				onClick={() => { selectContent(2) }}
				onTouchStart={() => { selectContent(2) }}>
				Experience
			</span>
			<span className={`${activeContent === "projects" ? "current" : ""}`}
				onClick={() => { selectContent(3) }}
				onTouchStart={() => { selectContent(3) }}>
				Projects
			</span>
		</div>
	);
}

export default TopBar;
