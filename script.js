let randomNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const numberStyle = (change) => { document.querySelector('.number').style.width = change; }
const changeBackground = (color) => { document.body.style.backgroundColor = color; }
const change = (select, value) => { document.querySelector(select).textContent = value; }

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  
  if(!guess) {
    change('.message', 'Not a Number');
  } else if (guess === randomNumber) {
    change('.message', 'Correct Number!');
    change('.number', randomNumber);
    changeBackground('#60b347');
    numberStyle('30rem');
    if(score > highscore) {
      highscore = score;
      change('.highscore', highscore);
    }
  } else if (guess !== randomNumber) {
    if(score > 0) {
       change('.message', guess > randomNumber ? 'Too High!' : 'Too Low');
       score--;
       change('.score', score);
    } else {
       change('.message', 'You Lost!') 
       change('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  change('.message', 'Start guessing...') ;
  document.querySelector('.guess').value = '';
  numberStyle('15rem');
  change('.number', '?');
  change('.score', score);
  changeBackground('#222');
  randomNumber = Math.trunc(Math.random()*20) + 1;
});