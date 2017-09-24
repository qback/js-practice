// Работа с %
//  Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b. Показать решение.
console.log(10 % 3);

//  Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления. Показать решение.
let a = 5;
let b = 2;
console.log(a % b ? `Делится с остатком ${a % b}` : 'Делится ровно');

// Работа с модулем
// Для решения задач данного блока вам понадобятся следующие методы: Math.abs.
//  Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b. Показать решение.
console.log(Math.abs(b - a));

//  Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1. Показать решение.
a = 3;
b = 5;
let c;
let x = 6;
let y = 1;
console.log((c = Math.abs(a - b)));
console.log((c = Math.abs(x - y)));

// Работа со степенью и корнем
// Для решения задач данного блока вам понадобятся следующие методы: Math.pow, Math.sqrt.
//  Возведите 2 в 10 степень. Результат запишите в переменную st. Показать решение.
let st = Math.pow(2, 10);
console.log(st);

//  Найдите квадратный корень из 245. Показать решение.
console.log(Math.sqrt(245));

//  Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. Показать решение.
let arr = [4, 2, 5, 19, 13, 0, 10];
let coubSum = arr.reduce((previous, current) => {
	return previous + Math.pow(current, 3);
}, 0);
console.log(Math.sqrt(coubSum));

// Работа с функциями округления
// Для решения задач данного блока вам понадобятся следующие функции: Math.round, Math.ceil, Math.floor, toFixed, toPrecision.
//  Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. Показать решение.
a = Math.sqrt(379);
console.log(Math.round(a), Number(a.toFixed(1)), Number(a.toFixed(2)));

//  Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'. Показать решение.
a = Math.sqrt(579);
let obj = {
	floor: Math.floor(a),
	ceil: Math.ceil(a)
};
console.log(obj);

// Нахождение максимального и минимального числа
// Для решения задач данного блока вам понадобятся следующие методы: Math.max, Math.min.
//  Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. Показать решение.
arr = [4, -2, 5, 19, -130, 0, 10];
let min = arr[0];
let max = arr[0];
for (let index = 1; index < arr.length; index++) {
	min = Math.min(arr[index], min);
	max = Math.max(arr[index], max);
}
console.log(min, max);

// Работа с рандомом
// Для решения задач данного блока вам понадобятся следующие методы: Math.random.
//  Выведите на экран случайное целое число от 1 до 100. Показать решение.
console.log(Math.ceil(Math.random() * 100));

//  Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). Показать решение.
arr = [];
for (let index = 0; index < 10; index++) {
	arr.push(Math.ceil(Math.random() * 100));
}
console.log(arr);

// Задачи
//  Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
arr = [12, 15, 20, 25, 59, 79];
let arrSum = arr.reduce((previous, current) => {
	return previous + current;
}, 0);
console.log(arrSum / arr.length);

//  Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
function fact(x) {
	return x ? x * fact(x - 1) : 1;
}
console.log(fact(4));

//  Напишите скрипт, который проверяет, является ли данное число простым (простое число - это то, которое делится только на 1 и на само себя).
a = 17;
for (let i = 2; i < a; i++) {
	if (a % i === 0) {
		console.log(`Число ${a} не является простым`);
		break;
	}
	if (i + 1 === a) {
		console.log(`Число ${a} является простым`);
	}
}

//  Напишите скрипт, который найдет все простые числа в заданном промежутке. Проверьте его работу на промежутке от 1 до 1000.
a = 1000;
let simpleArr = [];
for (let index = 2; index <= a; index++) {
	for (let temp = 2; temp < index; temp++) {
		if (index % temp === 0) {
			break;
		}
		if (temp + 1 === index) {
			simpleArr.push(index);
		}
	}
}
console.log(simpleArr);

//  Напишите скрипт, который будет разлагать заданное число на простые множители.

a = 260;
let arrMult = [];
for (let index = 2; index <= a; index++) {
	if (a % index === 0) {
		arrMult.push(index);
		a /= index;
		index = 1;
	}
	if (index === a && index !== 1) {
		arrMult.push(index);
	}
}
console.log(arrMult);
