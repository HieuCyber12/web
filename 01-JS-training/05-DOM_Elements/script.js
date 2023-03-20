'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const changeBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(!guess, typeof guess);
  //Game logic
  if (!guess) {
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number');
    displayNumber(secretNumber);
    changeBackgroundColor('#60b347');
    if (highscore < score) {
      highscore = score;
      displayHighscore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayHighscore(0);
      displayMessage('You Lost the Game');
      changeBackgroundColor('#e12120');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(score);
  changeBackgroundColor('#222');
});
