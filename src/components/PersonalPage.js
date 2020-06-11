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
      <h2 className="PersTitle">Bio</h2>
      <div className="BioHolder">
        <p className="PersDescription">{props.pictureObj.bio}</p>
      </div>
    </div>
    <div className="LineSpacer"></div>

    <h2 className='PersTitle'>Experience</h2>
    <div className="PersListHolder">
      <div className="PersListElement">
        <h3>Know</h3>
        <ul className="PersDouble" id="KnownList"></ul>
      </div>
      <div className="PersVertSpacer"></div>
      <div className="PersListElement">
        <h3>Learning</h3>
        <ul className="PersDouble" id="LearningList"></ul>
      </div>
    </div>
    <div className="LineSpacer"></div>
    <h2 className="PersTitle">Related Links</h2>
    <p id="linkList"></p>
    <br></br>
    </div>
  );
}

export default PersonalPage;
