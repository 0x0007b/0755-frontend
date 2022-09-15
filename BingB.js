// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bing
// @author       Vladislav Skrynnikov
// @match        https://www.bing.com/*
// @match        https://tproger.ru/*
// @icon         https://pushall.ru/upimg/sub641-1458837242.png
// @grant        none
// ==/UserScript==

let links = document.links
let search = document.getElementsByName("search")[0];
let keywords = ["как стать разработчиком?", "Как стать программистом с нуля в 2022", "как стать программистом, имея самые базовые представления о разработке"];
let keyword = keywords[getRandom(0, keywords.length)];
let BingInput = document.getElementsByName("q")[0];
let sb_bp = document.getElementsByClassName("sb_bp")[5]

if (search !== undefined) {
  let i = 0;

  let timerId = setInterval(function() {
    BingInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      setTimeout(()=>{
        search.click();
      }, getRandom(1000, 2500));

    }
  }, 200);


}else if (location.hostname == "tproger.ru") {
  console.log("Мы на целевом сайте");
  setInterval(()=>{
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) > 75) {
      location.href = "https://www.bing.com/";
    }
    if (links[index].href.indexOf("tproger.ru") !== -1) {
      links[index].click();
    }

  }, getRandom(1000, 2500));


} else {
  let nextBingPage = true;
  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("tproger.ru") !== -1) {
      console.log("Нашел строку " + links[i]);
      let link = links[i];
      nextBingPage = false;
      setTimeout(()=>{
        link.click();
      }, getRandom(1000, 2500))
      break;
    }
  }
  if (document.querySelector(".sb_pagS").innerText == "4") {
    nextBingPage = false;
    location.href = "https://www.bing.com/";
  }
  if (nextBingPage) {
    setTimeout(()=>{
      sb_bp.click()
    }, getRandom(1000, 2500));
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}
