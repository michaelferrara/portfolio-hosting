import React from 'react';
import './HomePage.scss';
import Icon from './Icon.js'

function Home() {
	return (
		<div id="home">
			<div className="picture-backing hide">
				<img id="profile-pic" src="images/michaelProf.jpg" alt="Michael Ferrara" />
			</div>
			<h1>Michael Ferrara</h1>
			<h2>Web Application Developer</h2>
			<div className="logo-holder">
				<Icon type="github" title="https://github.com/michaelferrara" link="https://github.com/michaelferrara" />
				<Icon type="linkedin" title="https://www.linkedin.com/in/michael-ferrara1/" link="https://www.linkedin.com/in/michael-ferrara1/" />
				<Icon type="email" title="ferrara.michael98@gmail.com" link="mailto:ferrara.michael98@gmail.com" target="" />
			</div>
		</div>
	);
}

export default Home;
