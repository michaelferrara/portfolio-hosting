import React, { useEffect } from 'react';
import SliderImg from './SliderImg.js'

import './PersonalPage.scss';

function PersonalPage(props) {

  useEffect(() => {
    if (props.pictureObj) {
      // Adds the elements to the used tech list
      let listElem = document.getElementById("KnownList");

      // Clears the initial elems
      listElem.innerHTML = "";
      for (let i = 0; i < props.pictureObj.techKnown.length; i++) {
        listElem.innerHTML += (`<li>${props.pictureObj.techKnown[i]}</li>`);
      }

      // Adds the elements to the used tech list
      let listElem2 = document.getElementById("LearningList");

      // Clears the initial elems
      listElem2.innerHTML = "";
      for (let i = 0; i < props.pictureObj.techLearning.length; i++) {
        listElem2.innerHTML += (`<li>${props.pictureObj.techLearning[i]}</li>`);
      }

      // Adds the links to the related links list
      let pElem = document.getElementById("linkList");

      // Clears the initial elems
      pElem.innerHTML = "";
      for (let i = 0; i < props.pictureObj.relatedLinks.length; i++) {
        pElem.innerHTML += (`<a class="RelLink" href="${props.pictureObj.relatedLinks[i].link}">${props.pictureObj.relatedLinks[i].name}</a>`);
      }
    }

  }, [props.pictureObj]);

  return (
    <div className="PersPageHolder">
    <div className="PersonalHolder">
      <h1 className="PersTitle">Michael Ferrara</h1>
      <SliderImg pictureObj = {props.pictureObj}/>
      <h1 className="PersTitle">Bio</h1>
      <div className="BioHolder">
        <p className="PersDescription">{props.pictureObj.bio}</p>
      </div>
    </div>
    <div className="LineSpacer"></div>

    <h1 className='DarkFont'>Experience</h1>
    <div className="PersListHolder">
      <div className="PersListElement">
        <h2>Know</h2>
        <ul className="PersDouble" id="KnownList"></ul>
      </div>
      <div className="PersVertSpacer"></div>
      <div className="PersListElement">
        <h2>Learning</h2>
        <ul className="PersDouble" id="LearningList"></ul>
      </div>
    </div>
    <div className="LineSpacer"></div>
    <h1 className="PersTitle">Related Links</h1>
    <p id="linkList"></p>
    <br></br>
    </div>
  );
}

export default PersonalPage;
