// Работа со строками
//  Создайте переменную text и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран. Показать решение.
const text = 'Привет, мир!';
console.log(text);

//  Создайте переменные text1='Привет, ' и text2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'. Показать решение.
const text1 = 'Привет, ';
const text2 = 'Мир';
console.log(`${text1}${text2}`);

//  Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'. Показать решение.
const name = 'Олег';
console.log(`Привет, ${name}`);

//  Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'. Показать решение.
const age = 99;
console.log(`Мой возраст ${age} лет`);

// Функция prompt
//  Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'. Показать решение.
const answer = prompt('Ваше имя?', '');
console.log(`Ваше имя ${answer}`);

//  Спросите у пользователя число. Выведите с помощью alert квадрат этого числа. Показать решение.
const value = parseInt(prompt('Число?', ''), 10);
const valueValue = Math.pow(value, 2);
console.log(`Квадрат числа ${value} = ${valueValue}`);

// Обращение к символам строки
//  Создайте переменную text и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'. Показать решение.
const symbols = 'abcde';
console.log(symbols[0]);
console.log(symbols.charAt(0));

//  Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа. Показать решение.
const numString = '12345';
const arrayNumStrings = numString.split('');
const arrResult = arrayNumStrings.reduce((sum, current) => sum + ~~current, 0);
console.log(arrResult);

// Практика
//  Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце. Показать решение.
function calcSeconds(income) {
	const { sec = 0, min = 0, hours = 0 } = income;
	return sec + min * 60 + hours * 60 * 60;
}
const example = {
	sec: 5,
	min: 10,
	hours: 4
};
console.log(calcSeconds(example));

//  Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'. Показать решение.
function showCurrentTime() {
	const currentTime = new Date();
	const currentSec = currentTime.getSeconds();
	const currentMinutes = currentTime.getMinutes();
	const currentHours = currentTime.getHours();
	console.log(`${currentHours}:${currentMinutes}:${currentSec}`);
}
showCurrentTime();
setInterval(showCurrentTime, 10000);
