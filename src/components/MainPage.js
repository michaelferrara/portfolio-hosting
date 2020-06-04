import React, {useState, useEffect} from 'react';
import HomePage from './HomePage.js';
import ProjectsPage from './ProjectsPage.js';
import PersonalPage from './PersonalPage.js';
import TopBar from './TopBar.js';

import {personalPromise} from './DataHolder.js'

function MainPage(props){

  let [projState, setProjState] = useState(0);
  let [projectObj, setProjectObj] = useState(null);
  let [pictureObj, setPictureObj] = useState(null);
  let prom = new Promise(personalPromise)
  let [personalObj,setPersonalObj] = useState(null);
  window.history.replaceState({}, document.title, "/#Home");

  // Sets the personal information
  useEffect(() => {

    if (personalObj == null) {
      prom.then((success, failed) => {
        setPersonalObj(success);
      })
    }
  }, [prom, personalObj]);

  // Handles switching webpages
  function handler (num, Obj) {

    window.scrollTo(0, 0);

    if (projState !== num || (projState === 1 && projectObj !== Obj)) {

      if (num === 1 && Obj) {
        setProjectObj(Obj);
        setProjState(num);
      } else if (num === 2 && Obj) {
        setPictureObj(Obj);
        setProjState(num);
      } else if (num === 0 && Obj) {
        setPictureObj(Obj);
        setProjState(num);
      }

    }
  }

  // Conditional Rendering
  if (projState === 0) {
    return (
      <div className="Page">
        <TopBar handler = {handler.bind(this)}/>
        <HomePage handler = {handler.bind(this)} pictureObj = {personalObj}/>
      </div>
    );
  } else if(projState === 1) {
    return (
      <div className="Page">
        <TopBar handler = {handler.bind(this)}/>
        <ProjectsPage projectObj = {projectObj}/>
      </div>
    );
  } else if(projState === 2) {
    return (
      <div className="Page">
        <TopBar handler = {handler.bind(this)}/>
        <PersonalPage pictureObj = {pictureObj}/>
      </div>
    );
  }

}

export default MainPage;
