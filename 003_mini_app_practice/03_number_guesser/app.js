const gamebox = {
  min: 1,
  max: 6,
  get correctNumber() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  attemptsLeft: 3,
  isgameOver: false
};

const min = document.querySelector('.min-num');
const max = document.querySelector('.max-num');
const message = document.querySelector('.message');
const guessInput = document.querySelector('#guess');
const guessBtn = document.querySelector('#guess-submit');

min.textContent = gamebox.min;
max.textContent = gamebox.max;

guessBtn.addEventListener('click', ev => {
  if (gamebox.isgameOver) {
    resetGame();
    return;
  }

  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess > gamebox.max || guess < gamebox.min) {
    showMessage(`Введите ЧИСЛО в промежутке от ${gamebox.min} до ${gamebox.max}`, 'red');
  } else if (guess === gamebox.correctNumber) {
    gameOver(true, `Опаньки!!! Вы победитель! ${guess} - правильный номер`);
  } else {
    gamebox.attemptsLeft -= 1;
    if (gamebox.attemptsLeft === 0) {
      gameOver(false, `Вы проиграли. Правильный ответ: ${gamebox.correctNumber}`);
    } else {
      showMessage(`${guess} - неправильный ответ. Осталось попыток: ${gamebox.attemptsLeft}`, 'red');
      guessInput.value = '';
    }
  }
});

function showMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(result, msg) {
  const color = result ? 'green' : 'red';
  showMessage(msg, color);
  guessInput.style.borderColor = color;
  guessInput.disabled = true;
  guessBtn.value = 'Начать новую игру';
  gamebox.isgameOver = true;
}

function resetGame() {
  gamebox.isgameOver = false;
  gamebox.attemptsLeft = 3;
  message.textContent = '';
  guessInput.style.borderColor = '';
  guessInput.disabled = false;
  guessInput.value = '';
  guessBtn.value = 'Попытать счастье';
}
