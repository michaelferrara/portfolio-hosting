import React from 'react';
import './HomePage.scss';

import { Link } from 'react-scroll';

function TopBar({ activeContent }) {

	const selectContent = (val) => {
		const yOffset = -100;
		let elem = {}
		let y = 0

		switch (val) {
			case (0):
				elem = document.getElementById("home")
				y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: 'smooth' })
				break
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
		}
	}

	return (
		<div className="top-bar">
			<Link className={`${activeContent == "home" ? "current" : ""}`}
				activeClass="active"
				to="home"
				spy={true}
				smooth={true}
				duration={1000}>
				Home
			</Link>
			<span className={`${activeContent == "about" ? "current" : ""}`}>
			</span>
			<span className={`${activeContent === "projects" ? "current" : ""}`}
				onClick={() => { selectContent(3) }}>
				Projects
			</span>
		</div>
	);
}

export default TopBar;
