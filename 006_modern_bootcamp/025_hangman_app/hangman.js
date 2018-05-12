'use strict';

const Hangman = function(word, attempts) {
  this.word = word.toLowerCase().split('');
  this.attempts = attempts;
  this.guessedLetters = [];
  this.status = '';
  this.run();
};

Hangman.prototype.getPuzzle = function() {
  const puzzle = this.word
    .map(letter => {
      return this.guessedLetters.includes(letter) || letter === ' ' ? letter : '*';
    })
    .join('');
  if (!puzzle.includes('*')) {
    this.status = 'finished';
  }
  return puzzle;
};

Hangman.prototype.makeGuess = function(letter) {
  letter = letter.toLowerCase();
  const isUnique = !this.guessedLetters.includes(letter);
  const isNotCorrect = !this.word.includes(letter);

  if (isUnique) {
    this.guessedLetters.push(letter);
  }
  if (isUnique && isNotCorrect) {
    this.attempts -= 1;
    if (this.attempts === 0) {
      this.status = 'failed';
    }
  }
};

Hangman.prototype.startListener = function() {
  window.addEventListener('keypress', ev => {
    const guess = String.fromCharCode(ev.charCode);
    this.makeGuess(guess);
    this.renderDOM();
    this.checkGameStatus();
  });
};

Hangman.prototype.renderDOM = function() {
  const app = document.querySelector('#app');
  app.innerHTML = '';

  const puzzleEl = document.createElement('p');
  puzzleEl.textContent = this.getPuzzle();
  app.appendChild(puzzleEl);

  const attemptsEl = document.createElement('mark');
  attemptsEl.textContent = `Попыток осталось - ${this.attempts}`;
  app.appendChild(attemptsEl);
};

Hangman.prototype.checkGameStatus = function() {
  if (this.status === 'finished') {
    this.gameSuccess();
  }
  if (this.status === 'failed') {
    this.gameOver();
  }
};

Hangman.prototype.gameSuccess = function() {
  console.log('Вы выиграли!');
};

Hangman.prototype.gameOver = function() {
  console.log('Вы проиграли!');
};

Hangman.prototype.run = function() {
  // alert('Игра началась');
  this.status = 'playing';
  this.renderDOM();
  this.startListener();
};
