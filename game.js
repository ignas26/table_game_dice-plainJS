const gamerName = document.querySelectorAll('h3');
const score = document.querySelectorAll('h1');
const dice = document.querySelector('img');
const round = document.querySelector('.round');
const take = document.querySelector('p');

var roundData = 0;
var gamerData=[0,0];
var active=Math.floor(Math.random()*2);

gamerName[active].classList.add('current');