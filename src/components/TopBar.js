import React from 'react'
import './HomePage.scss'
import resume from '../common/resume.pdf'

function TopBar({ activeContent }) {

	const selectContent = (val) => {
		const yOffset = -100
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

	const keyPressed = (e, val) => {
		if (e.which === 13) {
			selectContent(val)
		}
	}

	return (
		<div className="top-bar">
			<span className={`${activeContent === "home" ? "current" : ""}`}
				onClick={() => { selectContent(0) }}
				onKeyPress={(e) => { keyPressed(e, 0) }}
				tabIndex="0">
				Home
			</span>
			<span className={`${activeContent === "about" ? "current" : ""}`}
				onClick={() => { selectContent(1) }}
				onKeyPress={(e) => { keyPressed(e, 1) }}
				tabIndex="0">
				About
			</span>
			<span className={`${activeContent === "experience" ? "current" : ""}`}
				onClick={() => { selectContent(2) }}
				onKeyPress={(e) => { keyPressed(e, 2) }}
				tabIndex="0">
				Experience
			</span>
			<span className={`${activeContent === "projects" ? "current" : ""}`}
				onClick={() => { selectContent(3) }}
				onKeyPress={(e) => { keyPressed(e, 3) }}
				tabIndex="0">
				Projects
			</span>
			<div className="resume-btn">
				<a href={resume} target="_blank" rel="noopener noreferrer">
					<span className="resume-text">
						Resume
					<svg className="icon icon-new-tab"><use href="#icon-new-tab"></use>
							<symbol id="icon-new-tab" viewBox="0 0 32 32">
								<path d="M6 2v24h24v-24h-24zM28 24h-20v-20h20v20zM4 28v-21l-2-2v25h25l-2-2h-21z"></path>
								<path d="M11 8l5 5-6 6 3 3 6-6 5 5v-13z"></path>
							</symbol>
						</svg>
					</span>
				</a>
			</div>
		</div>
	)
}

export default TopBar;
