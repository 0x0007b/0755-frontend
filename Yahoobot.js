// ==UserScript==
// @name         YahooBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Vladislav Skrynnikov
// @match        https://www.yahoo.com/*
// @icon         https://w7.pngwing.com/pngs/351/399/png-transparent-logo-computer-icons-social-network-yahoo-search-email-miscellaneous-purple-violet.png
// @grant        none
// ==/UserScript==

let links = document.links;
let btnK = document.getElementById("ybar-search")
let keywords = ["вывод произвольных полей wordpress", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)]

document.getElementById("ybar-sbq").value = keyword;
document.getElementById("ybar-search").click();

if (btnK !== undefined) {
    btnK.click;
} else {

for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
        console.log("Нашел строку" + links[i]);
        let link = links[i];
        link.click();
        break;
}
}
}

function getRandom(min, max) {
return Math.floor(Math.random()*(max - min) + min)
}
