import React, {useState, useEffect} from 'react';
import HomePage from './HomePage.js';
import ProjectsPage from './ProjectsPage.js';
import PersonalPage from './PersonalPage.js';
import TopBar from './TopBar.js';

import {getPersonal, getProjects} from './DataHolder.js'

function MainPage(props){

  let [projState, setProjState] = useState(0);
  let [projectObj, setProjectObj] = useState(null);
  let [dataObj, setDataObj] = useState(null);
  let prom1 = getPersonal();
  let prom2 = getProjects();
  let [personalObj,setPersonalObj] = useState(null);
  window.history.replaceState({}, document.title, "/#Home");

  // Sets the personal information
  useEffect(() => {

    if (prom1 instanceof Promise) {
      prom1.then((success, failed) => {
        setPersonalObj(success);
      })
    }
    else
    {
      setPersonalObj(getPersonal());
    }

  }, [prom1, personalObj]);

  // Sets the project information
  useEffect(() => {

    if (prom2 instanceof Promise) {
      prom2.then((success, failed) => {
        setProjectObj(success);
      })
    }
    else
    {
      setProjectObj(getProjects());
    }

  }, [prom2, projectObj]);

  // Handles switching webpages
  function handler (num, projNum) {

    window.scrollTo(0, 0);

    if (projState !== num || (projState === 1 && dataObj !== projectObj[projNum])) {

      if (num === 1) {
        setDataObj(projectObj[projNum]);
        setProjState(num);
      } else if (num === 2) {
        setDataObj(personalObj);
        setProjState(num);
      } else if (num === 0) {
        setProjState(num);
      }

    }
  }

  // Conditional Rendering
  if (projState === 0) {
    return (
      <div className="Page">
        <TopBar handler = {handler.bind(this)}/>
        <HomePage handler = {handler.bind(this)} pictureObj = {personalObj} projectObj = {projectObj}/>
      </div>
    );
  } else if(projState === 1) {
    return (
      <div className="Page">
        <TopBar handler = {handler.bind(this)}/>
        <ProjectsPage projectObj = {dataObj}/>
      </div>
    );
  } else if(projState === 2) {
    return (
      <div className="Page">
        <TopBar handler = {handler.bind(this)}/>
        <PersonalPage pictureObj = {dataObj}/>
      </div>
    );
  }

}

export default MainPage;
