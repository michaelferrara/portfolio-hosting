import React, { useState, useEffect } from 'react';
import './SliderImg.scss';


const SliderImg = (props) => {

  let sliderArr = [];
  let altName = "";
  const [x,setX] = useState(0);

  if (props.projectObj) {
    sliderArr = props.projectObj.pictures;
    altName = props.projectObj.name;
  } else if (props.pictureObj) {
    sliderArr = props.pictureObj.pictures;
    altName = "Michael";
  }


  useEffect(() => {

    setX(0);
    setTimeout(function() { moveSlides(); }, 100);

  }, [sliderArr]);

  // Run at the beginning to order all the slides from being in a column to a row
  function moveSlides() {
    if (document.getElementsByClassName("SlideImg")) {
      let slides = document.getElementsByClassName("SlideImg");

      for (let i = 0; i < slides.length; i++) {

        if (i !== 0) {
          slides[i].style.display = "none";
          slides[i].style.transitionDuration = "0s";
        }

        slides[i].style.transform = `translateX(${(100*i)}%) translateY(${(-100*i)}%)`;
      }

    }

    setTimeout(function() { showSlides(); }, 100);

  }

  // Shows the slides after they've been moved
  function showSlides() {
    if (document.getElementsByClassName("SlideImg")) {
      let slides = document.getElementsByClassName("SlideImg");

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.transitionDuration = ".5s";
        slides[i].style.display = "block";
      }
    }
  }

  // Handles moving the carousel
  const goLeft = () => {
    let val = x;

    val === 0 ? val = -100 * (sliderArr.length - 1) : val = x + 100;

    let slides = document.getElementsByClassName("SlideImg");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(${(100*i) + val}%) translateY(${(-100*i)}%)`;
    }

    setX(val);
  }

  // Handles moving the carousel
  const goRight = () => {
    let val = x;

    x === -100 * (sliderArr.length - 1) ? val = 0 : val = x - 100;

    let slides = document.getElementsByClassName("SlideImg");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transform = `translateX(${(100*i) + val}%) translateY(${(-100*i)}%)`;
    }

    setX(val);
  }

  return (
    <div id="ProjCarousel">
    <button className="ProjArrowBtn" onClick={goLeft}><i className="arrow left"></i></button>
      <div id="ProjPicHolder">

        <div className="Content">
          {
            sliderArr.map((item, index) => {
              return(
                <div key= {index} className= "SlideImg">
                  <img id="ProjPic" src={process.env.PUBLIC_URL + '/' + sliderArr[index]} alt={altName + " picture " + (index+1)}></img>
                </div>
              )
            })
          }
        </div>

      </div>
      <button className="ProjArrowBtn" onClick={goRight}><i className="arrow right"></i></button>
    </div>
  );

}

export default SliderImg;
