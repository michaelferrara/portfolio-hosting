import React, { useEffect, useRef, useState } from 'react';
import './HomePage.scss';
import Icon from './Icon'
import image from '../images/TCCK1.PNG'

function Projects({ setHeight }) {
	const projectsRef = useRef(null)
	const [title, setTitle] = useState("The Court of the Crimson King")
	const [description, setDescription] = useState("The Court of the Crimson King is a 2D, rouge-like, turn based RPG created using Unity and C#. The player must collect monster and gold to help them progress through four randomly generated dungeons. Complete quests, train your monster, and use items along the way to help improve your chances of clearing the dungeons. You can even listen to the music your monsters are named from during your fight.")
	const [contributions, setContributions] = useState("This project was a semester long project that I worked on with two other people. I worked as a PM dividing up tasks, as well as a lead developer. I mainly worked on procedural dungeon generation, save management, data management, quest/dialogue management, and UI management.")
	const [activePhoto, setActivePhoto] = useState(0)
	const images = [1, 2, 3, 4, 5]

	useEffect(() => {
		setHeight(projectsRef.current.getBoundingClientRect().top - 500)
	}, [setHeight])

	return (
		<div ref={projectsRef} id="projects">
			<div className="projects-label">My Projects</div>
			<div className="projects-content">
				<div className="projects-bar">
					<h3>{title}</h3>
					<Icon type="wordpress" link="https://team11game.wordpress.com/" />
				</div>
				<div className="image-picker">
					<img src={image}></img>
					<div className="image-options">
						{images.map((item, index) => {
							return <span className={`circle ${index === activePhoto ? 'active' : ''}`}></span>
						})}
					</div>
				</div>
				<div className="text-holder">
					<h4>Description</h4>
					<p>{description}</p>
					<h4>My Contributions</h4>
					<p>{contributions}</p>
				</div>
				<div className="button-holder">
					<button>Previous</button>
					<button>Next</button>
				</div>
			</div>
		</div>
	);
}

export default Projects;
