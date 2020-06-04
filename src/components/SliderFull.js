import React, { useState } from 'react';
import {projectPromise} from './DataHolder.js'
import './SliderFull.scss';


const SliderFull = (props) => {
  let prom = new Promise(projectPromise);
  let [sliderArr,setSlideArr] = useState([]);
  const [x,setX] = useState(0);
  const [changeSlide,setChangeSlide] = useState(false);

  // Run at the beginning to order all the slides from being in a column to a row
  function moveSlides() {
    if (document.getElementsByClassName("Slide")) {
      let slides = document.getElementsByClassName("Slide");

      for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.transitionDuration = "0s";
        slides[i].style.transform = `translateX(${(100*i) + x}%) translateY(${(-100*i)}%)`;
        let moreBtn = document.getElementById("more"+i);
        moreBtn.style.display = "none";
      }

      let moreBtn = document.getElementById("more0");
      if (moreBtn) {
        moreBtn.style.display = "block";
      }

    }

    setTimeout(function() { showSlides(); }, 200);

    setChangeSlide(true);
  }

  // Shows the slides after they've been moved
  function showSlides() {
    if (document.getElementsByClassName("Slide")) {
      let slides = document.getElementsByClassName("Slide");
      for (let i = 1; i < slides.length; i++) {
        slides[i].style.transitionDuration = ".5s";
        slides[i].style.display = "block";
      }
    }
  }

  // Switches pages once a project is picked
  function projectPick (index) {
    props.handler(1, sliderArr[index]);
  }

  // Handles moving the carousel
  const goLeft = () => {
    let val = x;

    let elem1 = document.getElementById("more"+(-val/100));
    elem1.style.display = "none";

    val === 0 ? val = -100 * (sliderArr.length - 1) : val = x + 100;

    let elem2 = document.getElementById("more"+(-val/100));
    elem2.style.display = "block";

    let slides = document.getElementsByClassName("Slide");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(${(100*i) + val}%) translateY(${(-100*i)}%)`;
    }

    setX(val);
  }

  // Handles moving the carousel
  const goRight = () => {
    let val = x;
    let elem1 = document.getElementById("more"+(-val/100));
    elem1.style.display = "none";

    x === -100 * (sliderArr.length - 1) ? val = 0 : val = x - 100;

    let elem2 = document.getElementById("more"+(-val/100));
    elem2.style.display = "block";

    let slides = document.getElementsByClassName("Slide");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(${(100*i) + val}%) translateY(${(-100*i)}%)`;
    }

    setX(val);
  }

  // Gets the information for the carousel
  if (sliderArr < 1) {
    prom.then((success, failed) => {
      setSlideArr(success);
    })
  }

  // Sets the slide position
  if (changeSlide === false) {
    setTimeout(function() { moveSlides(); }, 200);
  }

  return (
    <div className="Slider">
      <button className="ArrowBtn" onClick={goLeft}><i className="arrow left"></i></button>
      <div className="Content">
      {
        sliderArr.map((item, index) => {
          return(
            <div key= {index} className= "Slide">
              <div className="Panel">
                <img className="Pic" src={process.env.PUBLIC_URL + item.pictures[0]} alt="Game1"></img>
                <div className="TextBox">
                  <h2>{item.name}</h2>
                  <p>{item.shortDescription}</p>
                  <button id={"more" + index} onClick={() => {projectPick(index)}}>more</button>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
      <button className="ArrowBtn" onClick={goRight}><i className="arrow right"></i></button>

    </div>
  );

}

export default SliderFull;
