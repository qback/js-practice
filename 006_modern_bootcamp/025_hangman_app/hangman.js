'use strict';

const Hangman = function(word, attempts) {
  this.word = word.toLowerCase().split('');
  this.attempts = attempts;
  this.guessedLetters = [];
  this.status = '';
  this.charListener = this.listenKeyPress.bind(this);

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
  window.addEventListener('keypress', this.charListener);
};

Hangman.prototype.listenKeyPress = function(ev) {
  const guess = String.fromCharCode(ev.charCode);
  this.makeGuess(guess);
  this.renderDOM();
  this.checkGameStatus();
};

Hangman.prototype.renderDOM = function() {
  const app = document.querySelector('#app');
  app.innerHTML = '';

  const puzzleEl = document.createElement('p');
  puzzleEl.classList.add('status');
  puzzleEl.textContent = this.getPuzzle();
  app.appendChild(puzzleEl);

  const attemptsEl = document.createElement('mark');
  attemptsEl.textContent = `Попыток осталось - ${this.attempts}`;
  app.appendChild(attemptsEl);
};

Hangman.prototype.checkGameStatus = function() {
  if (this.status === 'finished') {
    document.querySelector('#app .status').textContent = `Вы выиграли. Правильное слово - ${this.word.join('')}`;
    window.removeEventListener('keypress', this.charListener);
  }
  if (this.status === 'failed') {
    document.querySelector('#app .status').textContent = `Вы проиграли. Правильное слово - ${this.word.join('')}`;
    window.removeEventListener('keypress', this.charListener);
  }
};

Hangman.prototype.run = function() {
  // alert('Игра началась');
  this.status = 'playing';
  this.renderDOM();
  this.startListener();
};
