import React, { useEffect } from 'react';

import './ProjectsPage.scss';
import SliderImg from './SliderImg.js'

function ProjectsPage(props) {

  useEffect(() => {
    if (props.projectObj) {
      // Adds the elements to the used tech list
      let listElem = document.getElementById("techList");

      // Clears the initial elems
      listElem.innerHTML = "";
      for (let i = 0; i < props.projectObj.techUsed.length; i++) {
        listElem.innerHTML += (`<li>${props.projectObj.techUsed[i]}</li>`);
      }

      // Adds the links to the related links list
      let pElem = document.getElementById("linkList");

      // Clears the initial elems
      pElem.innerHTML = "";
      for (let i = 0; i < props.projectObj.relatedLinks.length; i++) {
        pElem.innerHTML += (`<a class="RelLink" href="${props.projectObj.relatedLinks[i].link}">${props.projectObj.relatedLinks[i].name}</a>`);
      }
    }

  }, [props.projectObj]);

  return (
    <div className="ProjPageHolder">
    <div className="ProjectHolder">
      <h1 className="ProjTitle">{props.projectObj.name}</h1>
      <SliderImg projectObj = {props.projectObj}/>
      <h2 className="ProjTitle">Description</h2>
      <div className="DescriptionHolder">
        <p className="ProjDescription">{props.projectObj.description}</p>
      </div>
      <div className="ListHolderProj">
        <div className="ListElementProj">
          <h2>Technologies Used</h2>
          <ul id="techList">
          </ul>
        </div>
        <div className="VertSpacerProj"></div>
        <div className="ListElementProj">
          <h2>My Role</h2>
          <p className="RoleText">{props.projectObj.myRole}</p>
        </div>
      </div>
      <div className="LineSpacer"></div>
      <h2 className="ProjTitle">Related Links</h2>
      <p id = "linkList"></p>
      <br></br>
    </div>
    </div>
  );
}

export default ProjectsPage;
