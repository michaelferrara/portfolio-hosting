import React, { useEffect, useState } from 'react';
import SliderFull from './SliderFull.js';
import './HomePage.scss';

function HomePage(props) {
  const [AffirmationNum, setAffirmationNum] = useState(0);

  useEffect(() => { GetAffirmation(); });

  // Used to modify the Lists
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
    }

  }, [props.pictureObj]);

  // Gets affirmation from the API
  function GetAffirmation() {

    if (AffirmationNum === 0) {

      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = proxyurl + 'https://www.affirmations.dev/';

      fetch(url)
        .then(val => val.text())
        .then((data) => {
          let obj = JSON.parse(data);
          console.log("Affirmation: " + obj.affirmation);
          document.getElementById("Affirmation").innerHTML = obj.affirmation;
        })
        .catch(reason => {
          console.error(reason);
        });

      setAffirmationNum(1);

    }

  }

  return (
    <div id="PageHolder">
      <div id="PictureSection">
        <div className="ProfPic" alt="Michael Ferrara"></div>
        <div className="PicTextHolder">
          <h1>Michael Ferrara: Developer</h1>
          <br />
          <h2 id="Affirmation">Affirmation Loading...</h2>
        </div>
      </div>
      <div className="LineSpacer"></div>

      <h2 className='DarkFont'>Projects</h2>
      <SliderFull handler={props.handler.bind(this)} projectObj={props.projectObj} />
      <div className="LineSpacer"></div>

      <h2 className='DarkFont'>Experience</h2>
      <div className="ListHolder">
        <div className="ListElement">
          <h3>What I Know</h3>
          <ul className="double" id="KnownList"></ul>
        </div>
        <div className="VertSpacer"></div>
        <div className="ListElement">
          <h3>What I'm Learning</h3>
          <ul className="double" id="LearningList"></ul>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
