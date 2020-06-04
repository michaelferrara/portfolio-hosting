import React, { useState, useRef, useEffect }  from 'react';
import {projectPromise, personalPromise} from './DataHolder.js'
import './TopBar.scss';

// Use this to detect click outside of a component reference
function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        let elem = document.getElementById("dropContent");
        elem.style.display = "none";
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function TopBar(props) {
  let prom1 = new Promise(projectPromise);
  let [sliderArr,setSlideArr] = useState([]);
  let prom2 = new Promise(personalPromise)
  let [personalObj,setPersonalObj] = useState(null);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  // Displays the list of projects when clicked
  function clickProjTab() {
    let elem = document.getElementById("dropContent");
    elem.style.display = "block";
  }

  // Hides the project tab
  function loseProjTab() {
    var x = document.activeElement.className;
    console.log("x: " + document.activeElement.tagName);

    if (x !== "dropItem") {
      let elem = document.getElementById("dropContent");
      elem.style.display = "none";
    }
  }

  // Loads the personal data
  if (personalObj == null) {
    prom2.then((success, failed) => {
      setPersonalObj(success);
    })
  }

  // Sets the slide array data
  if (sliderArr < 1) {
    prom1.then((success, failed) => {
      setSlideArr(success);
    })
  }

  return (
    <div id="navigation-bar">
      <nav>
        <ul>
          <li><a href="#Home" onFocus={loseProjTab} onClick={() => props.handler(0, personalObj)}>Home</a></li>
          <div ref={wrapperRef} className="dropdown">
            <button className="dropbtn" onClick={clickProjTab}>Projects <span id="Filler">_</span> <i className="arrow down"></i></button>
            <div className="dropdown-content" id="dropContent">
              <a href="#Projects" className="dropItem" onClick={() => props.handler(1, sliderArr[0])}>The Court of the Crimson King</a>
              <a href="#Projects" className="dropItem" onClick={() => props.handler(1, sliderArr[1])}>Canvas Dash</a>
              <a href="#Projects" className="dropItem" onClick={() => props.handler(1, sliderArr[2])}>Leinecker's Leins</a>
            </div>
          </div>
          <li><a href="#Personal" onFocus={loseProjTab} onClick={() => props.handler(2, personalObj)}>Personal</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
