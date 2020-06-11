//import React from 'react';
import { csv } from 'd3';

const slideData = {
  name: "",
  description: "",
  shortDescription: "",
  myRole: "",
  pictures: [],
  techUsed: [],
  relatedLinks: []
};

const personalData = {
  bio: "",
  techKnown: [],
  techLearning: [],
  pictures: [],
  relatedLinks: []
};

let ProjArr = [];
let projProm = null;
let personalProm = null;
let PersonalObj = null;

const projectPromise = (resolve, reject) => {

  const row = (d) => {
    let data = JSON.parse(JSON.stringify(slideData));

    data.name = d.projectName;
    data.description = d.description;
    data.myRole = d.myRole;

    let picStr = d.pictures
    let techStr = d.techUsed;
    let longDesc = d.description;
    let shortDesc = "";
    let maxLen = 350;
    let linkStr = d.relatedLinks;

    // Doesn't allow for duplicate project names
    for (let i = 0; i < ProjArr.length; i++) {
      if (ProjArr[i].name === data.name) {
        return;
      }
    }

    // Converts description to shortened version ending in ...
    for (let i = 0; i < longDesc.length; i++) {
      if (i >= maxLen) {
        if (/\s/.test(longDesc.charAt(i))) {
          shortDesc += "...";
          //console.log(shortDesc);
          break;
        } else {
          shortDesc += longDesc.charAt(i);
        }
      } else {
        shortDesc += longDesc.charAt(i);
      }
    }

    // Converts picture names from string to array
    let picArr = picStr.split(',');
    for (let i = 0; i < picArr.length; i++) {
      data.pictures.push(picArr[i]);
    }

    // Converts tech from string to array
    let techArr = techStr.split(',');
    for (let i = 0; i < techArr.length; i++) {
      data.techUsed.push(techArr[i]);
    }

    data.shortDescription = shortDesc;

    // Converts related links from string to array
    let linkArr = linkStr.split(',');
    for (let i = 0; i < linkArr.length; i++) {
      let str = linkArr[i].split('>');
      data.relatedLinks.push({name: str[0], link: str[1]});
    }

    //console.log(data);

    ProjArr.push(data);

    //setKeyNum(ProjArr.length);
  }

  csv('data.csv', row).then( data => {
    //console.log(ProjArr);
    //console.log(ProjArr);
    resolve(ProjArr);
    return;
  });
}

// Bio, techknown, techlearning, pictures, relLinks
const personalPromise = (resolve, reject) => {

  const row = (d) => {
    let data = JSON.parse(JSON.stringify(personalData));

    data.bio = d.bio;
/*
    techKnown: [],
    techLearning: [],
    pictures: [],
    relatedLinks: []
*/
    let picStr = d.pictures
    let techKnowStr = d.techKnown;
    let techLearnStr = d.techLearning;
    let linkStr = d.relatedLinks;

    // Converts picture names from string to array
    let picArr = picStr.split(',');
    for (let i = 0; i < picArr.length; i++) {
      data.pictures.push(picArr[i]);
    }

    // Converts tech from string to array
    let techKnowArr = techKnowStr.split(',');
    for (let i = 0; i < techKnowArr.length; i++) {
      data.techKnown.push(techKnowArr[i]);
    }

    let techLearningArr = techLearnStr.split(',');
    for (let i = 0; i < techLearningArr.length; i++) {
      data.techLearning.push(techLearningArr[i]);
    }

    // Converts related links from string to array
    let linkArr = linkStr.split(',');
    for (let i = 0; i < linkArr.length; i++) {
      let str = linkArr[i].split('>');
      data.relatedLinks.push({name: str[0], link: str[1]});
    }

    //console.log(data);

    PersonalObj = data;
  }

  csv('personalData.csv', row).then( data => {
    //console.log(ProjArr);
    //console.log(PersonalObj);
    resolve(PersonalObj);
    return;
  });
}

if (projProm === null)
{
  projProm = new Promise(projectPromise);
  projProm.then((success,failed) => {
    ProjArr = success;
  })
}

if (personalProm === null)
{
  personalProm = new Promise(personalPromise);
  personalProm.then((success,failed) => {
    PersonalObj = success;
  })
}

export const getProjects = () => {
  if (ProjArr === [])
    return projProm;

  return ProjArr;
}

export const getPersonal = () => {
  if (PersonalObj === null)
    return personalProm;

  return PersonalObj;
}
