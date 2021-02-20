import React, { useEffect, useRef, useState } from 'react'
import './HomePage.scss'
import Icon from './Icon'
import { projects as projectData } from '../common/data.js'

// Custom hook that will call the callback after <interval>ms unless the reset
// is flipped
function useInterval(callback, delay, reset, setReset) {
	const savedCallback = useRef()
	const resetRef = useRef(false)

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	useEffect(() => {
		resetRef.current = true
		setReset(false)
	}, [reset, setReset])

	// Set up the interval.
	useEffect(() => {
		function tick() {
			if (resetRef.current) {
				resetRef.current = false
			}
			else {
				savedCallback.current()
			}
		}
		if (delay !== null) {
			let id = setInterval(tick, delay)
			return () => clearInterval(id)
		}
	}, [delay])
}

function Projects({ setHeight }) {
	const projectsRef = useRef(null)
	const [projectNum, setProjectNum] = useState(0)
	const [pictureNum, setPictureNum] = useState(0)
	const [currentPicture, setCurrentPicture] = useState('')
	const [projects, setProjects] = useState([])
	const [doReset, setDoReset] = useState(false)
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

	// Changes picture every 15 seconds
	useInterval(() => {
		if (pictureNum >= currentProject.pictures.length - 1) {
			setPictureNum(0)
		}
		else {
			setPictureNum(pictureNum => pictureNum + 1)
		}
	}, 10000, doReset, setDoReset)

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
			setDoReset(true)
		}
	}, [projects, projectNum, currentProject])

	// Changes the picture
	useEffect(() => {
		const picStr = 'images/' + currentProject.pictures[pictureNum]

		if (currentProject.pictures?.length >= pictureNum && currentPicture !== picStr) {
			setCurrentPicture(picStr)
		}
	}, [pictureNum, currentProject, currentPicture])

	// Gives the parent element this elements height
	useEffect(() => {
		setHeight(projectsRef.current.getBoundingClientRect().top - 500)
	}, [setHeight])

	// Keyboard support for changing the pictures
	const keyPressed = (e, val) => {
		if (e.which === 13) {
			setPictureNum(val)
		}
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
				<div className="image-picker">
					<img src={currentPicture} alt="project example"></img>
					<div className="image-options">
						{currentProject.pictures.map((item, index) => {
							return <span key={index}
								tabIndex="0"
								onClick={() => { setPictureNum(index) }}
								onKeyPress={(e) => { keyPressed(e, index) }}
								className={`circle ${index === pictureNum ? 'active' : ''}`}></span>
						})}
					</div>
				</div>
				<div className="text-holder">
					<h4>Description</h4>
					<p>{currentProject.description}</p>
					<h4>My Contributions</h4>
					<p>{currentProject.contributions}</p>
				</div>
				<div className="button-holder">
					<button onClick={() => { projectNum - 1 >= 0 ? setProjectNum(projectNum - 1) : setProjectNum(projectNum) }}>
						Previous
						</button>
					<button onClick={() => {
						projectNum + 1 < projects.length ? setProjectNum(projectNum + 1) : setProjectNum(projectNum)
					}}>
						Next
					</button>
				</div>
			</div>
		</div>
	)
}

export default Projects
