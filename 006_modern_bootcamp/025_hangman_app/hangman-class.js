class Hangman {
  constructor(word, attempts) {
    this.word = word.toLowerCase().split('');
    this.attempts = attempts;
    this.guessedLetters = [];
    this.status = '';
    this.charListener = this.listenKeyPress.bind(this);

    this.run();
  }

  getPuzzle() {
    const puzzle = this.word
      .map(letter => {
        return this.guessedLetters.includes(letter) || letter === ' ' ? letter : '*';
      })
      .join('');
    if (!puzzle.includes('*')) {
      this.status = 'finished';
    }
    return puzzle;
  }

  makeGuess(letter) {
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
  }

  startListener() {
    window.addEventListener('keypress', this.charListener);
  }

  listenKeyPress(ev) {
    const guess = String.fromCharCode(ev.charCode);
    this.makeGuess(guess);
    this.renderDOM();
    this.checkGameStatus();
  }

  renderDOM() {
    const app = document.querySelector('#app');
    app.innerHTML = '';

    const puzzleEl = document.createElement('p');
    puzzleEl.classList.add('status');
    puzzleEl.textContent = this.getPuzzle();
    app.appendChild(puzzleEl);

    const attemptsEl = document.createElement('mark');
    attemptsEl.textContent = `Попыток осталось - ${this.attempts}`;
    app.appendChild(attemptsEl);
  }

  checkGameStatus() {
    if (this.status === 'finished') {
      document.querySelector('#app .status').textContent = `Вы выиграли. Правильное слово - ${this.word.join('')}`;
      window.removeEventListener('keypress', this.charListener);
    }
    if (this.status === 'failed') {
      document.querySelector('#app .status').textContent = `Вы проиграли. Правильное слово - ${this.word.join('')}`;
      window.removeEventListener('keypress', this.charListener);
    }
  }

  run() {
    this.status = 'playing';
    this.renderDOM();
    this.startListener();
  }
}
