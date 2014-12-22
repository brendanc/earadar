//
// This loads up the scripts we need to be able to manipulate gmail content
//

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i = document.createElement('script');
var iconUrl =  chrome.extension.getURL('litmus-icon-19.png');
i.appendChild(document.createTextNode("var litmus_icon_19 = '" + iconUrl + "';"));
(document.head || document.documentElement).appendChild(i);

var j = document.createElement('script');
j.src = chrome.extension.getURL('jquery-1.11.1.min.js');
(document.head || document.documentElement).appendChild(j);

var g = document.createElement('script');
g.src = chrome.extension.getURL('gmail.js');
(document.head || document.documentElement).appendChild(g);

var s = document.createElement('script');
s.src = chrome.extension.getURL('main.js?x=' + getRandomInt(1,100000));
(document.head || document.documentElement).appendChild(s);

