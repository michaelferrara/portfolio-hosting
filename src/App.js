import React, { useEffect } from 'react';
import Content from './components/Content.js';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill()

function App() {

	useEffect(() => {
		if (window.history.scrollRestoration) {
			window.history.scrollRestoration = 'manual';
		}
		else {
			window.onbeforeunload = function () {
				window.scrollTo(0, 0);
			}
		}
	}, [])

	return (
		<div>
			<Content />
		</div>
	);
}

export default App;
