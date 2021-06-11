import React, { useEffect, useRef, useState } from 'react';
import './HomePage.scss';
import Home from './Home.js'
import About from './About.js'
import Experience from './Experience.js'
import Projects from './Projects.js'
import TopBar from './TopBar.js'
import Footer from './Footer.js'

function Content() {
	const contentRef = useRef(null)
	const [scrollTop, setScrollTop] = useState(0)
	const [aboutTop, setAboutTop] = useState(200)
	const [experienceTop, setExperienceTop] = useState(400)
	const [projectsTop, setProjectsTop] = useState(600)
	const [activeContent, setActiveContent] = useState("home")

	useEffect(() => {
		const onScroll = () => {
			let currentPosition = document.documentElement.scrollTop
			setScrollTop(currentPosition <= 0 ? 0 : currentPosition)

			if (currentPosition > projectsTop) {
				if (activeContent !== "projects")
					setActiveContent("projects")
			}
			else if (currentPosition > experienceTop) {
				if (activeContent !== "experience")
					setActiveContent("experience")
			}
			else if (currentPosition > aboutTop) {
				if (activeContent !== "about")
					setActiveContent("about")
			}
			else {
				if (activeContent !== "home")
					setActiveContent("home")
			}
		}

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [scrollTop, aboutTop, experienceTop, projectsTop, activeContent])

	return (
		<div className="page">
			Cross-Origin-Embedder-Policy: require-corp
			Cross-Origin-Opener-Policy: same-origin
			<TopBar activeContent={activeContent} />
			<div ref={contentRef} className="content">
				<Home />
				<About setHeight={setAboutTop} />
				<div className="wrapper">
					<div className="divider div-transparent div-arrow-down"></div>
				</div>
				<Experience setHeight={setExperienceTop} />
				<Projects setHeight={setProjectsTop} />
				<Footer />
			</div>
		</div>
	);
}

export default Content;
