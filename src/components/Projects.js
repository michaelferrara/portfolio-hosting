import React, { useEffect, useRef, useState } from 'react'
import './HomePage.scss'
import Icon from './Icon'
import { projects as projectData } from '../common/data.js'

// Custom hook that will call the callback after <interval>ms unless the reset
// is flipped
function useInterval(callback, delay, resetRef) {
	const savedCallback = useRef()
	const [intervalId, setIntervalId] = useState(null)

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current()
		}
		if (delay !== null) {
			if (intervalId !== null && resetRef.current) clearInterval(intervalId)

			const id = setInterval(tick, delay)
			setIntervalId(id)
			resetRef.current = false
			return () => clearInterval(id)
		}
	// eslint-disable-next-line
	}, [delay, resetRef.current])
}

function Projects({ setHeight }) {
	const projectsRef = useRef(null)
	const [projectNum, setProjectNum] = useState(0)
	const [pictureNum, setPictureNum] = useState(0)
	const [currentPicture, setCurrentPicture] = useState('')
	const [projects, setProjects] = useState([])
	const resetRef = useRef(false)
	const [currentProject, setCurrentProject] = useState(
		{
			name: "",
			description: "",
			contributions: "",
			links: [],
			pictures: [],
			index: -1
		})

	useEffect(() => {
		setProjects(projectData)
	}, [])

	// Changes the project data
	useEffect(() => {
		if (projects.length >= projectNum + 1 && projectNum !== currentProject.index) {
			const curProj = projects[projectNum]

			setCurrentProject({
				name: curProj.name,
				description: curProj.description,
				contributions: curProj.role,
				links: curProj.links,
				pictures: curProj.pictures,
				index: projectNum
			})

			setPictureNum(0)

			setCurrentPicture('images/' + curProj.pictures[0])
		}
	}, [projects, projectNum, currentProject])

	// Changes the picture
	useEffect(() => {
		if (pictureNum < currentProject.pictures?.length) {
			const picStr = 'images/' + currentProject.pictures[pictureNum]
			if (currentPicture !== picStr) setCurrentPicture(picStr)
		}
		else setPictureNum(0)
	}, [pictureNum, currentProject, currentPicture])

	// Gives the parent element this elements height
	useEffect(() => {
		setHeight(projectsRef.current.getBoundingClientRect().top - 500)
	}, [setHeight])

	// Changes picture every 10 seconds
	useInterval(() => {
		if (pictureNum >= currentProject.pictures.length - 1) {
			setPictureNum(0)
		}
		else {
			setPictureNum(pictureNum => pictureNum + 1)
		}
	}, 10000, resetRef)

	// Keyboard support for changing the pictures
	const keyPressed = (e, val) => {
		if (e.which === 13) {
			resetRef.current = true
			setPictureNum(val)
		}
	}

	const onPictureClicked = (val) => {
		resetRef.current = true
		setPictureNum(val)
	}

	return (
		<div ref={projectsRef} id="projects">
			<div className="projects-label">My Projects</div>
			<div className="projects-content">
				<div className="projects-bar">
					<h3>{currentProject.name}</h3>
					{
						currentProject.links.map((val, index) => {
							return (<Icon key={index} type={val.name} link={val.link} />)
						})
					}
				</div>
				<section className="project-container">
					<div className="image-picker">
						<img src={currentPicture} alt="project example"></img>
						<div className="image-options">
							{currentProject.pictures.map((item, index) => {
								return <span key={index}
									tabIndex="0"
									onClick={() => { onPictureClicked(index) }}
									onKeyPress={(e) => { keyPressed(e, index) }}
									className={`circle ${index === pictureNum ? 'active' : ''}`}></span>
							})}
						</div>
					</div>
					<div className="text-holder">
						<div className="text-section">
							<h4>Description</h4>
							<p>{currentProject.description}</p>
						</div>
						<div className="text-section">
							<h4>My Work</h4>
							<p>{currentProject.contributions}</p>
						</div>
					</div>
				</section>
				<div className="button-holder">
					<button onClick={() => { projectNum - 1 >= 0 ? setProjectNum(projectNum - 1) : setProjectNum(projects.length - 1) }}>
						Previous
						</button>
					<button onClick={() => {
						projectNum + 1 < projects.length ? setProjectNum(projectNum + 1) : setProjectNum(0)
					}}>
						Next
					</button>
				</div>
			</div>
		</div>
	)
}

export default Projects
