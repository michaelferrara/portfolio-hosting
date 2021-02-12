import React from 'react';
import './HomePage.scss';

function Footer() {

	const returnToTop = () => {
		const yOffset = -100
		const elem = document.getElementById("home")
		const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset
		window.scrollTo({ top: y, behavior: 'smooth' })
	}

	return (
		<div className="footer-holder">
			<div className="footer">
				<span onClick={returnToTop} ><div className="arrow-up"></div></span>
			</div>
		</div>
	);
}

export default Footer;
