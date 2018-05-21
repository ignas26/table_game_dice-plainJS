const gamerName = document.querySelectorAll('h3');
const score = document.querySelectorAll('h1');
const dice = document.querySelector('img');
const round = document.querySelector('.round');
const take = document.querySelector('p');

var roundInfo = 0;
var gamerInfo=[0,0];
var current=Math.floor(Math.random()*2);

gamerName[current].classList.add('current');


var audio = new Audio('audio.mp3');


dice.addEventListener('click', function () {

  var random = Math.ceil(Math.random() * 6);

  audio.play();

  dice.src = `pics/${random}.png`;

  if (random == 1) {
    roundInfo=0;
    switchGamer()
  } else {
    roundInfo += random;
  }
  round.textContent = roundInfo;
});

take.addEventListener('click',function () {
  if(roundInfo==0) return ;
  switchGamer()
});

function switchGamer() {
  gamerName[current].classList.remove('current');
  gamerInfo[current]+=roundInfo;
  score[current].textContent=gamerInfo[current];
  roundInfo=0;
  round.textContent=roundInfo;
  if(gamerInfo[current]>=100){
    alert(`${gamerName[current].textContent} wins!`)
  }
  current++;
  if(current==2) current =0;
  gamerName[current].classList.add('current')
}