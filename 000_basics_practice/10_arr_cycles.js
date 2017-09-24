// Заполнение массивов
//  Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
let arr = [];
for (let index = 1; index < 5; index++) {
	let str = '';
	for (let i = 1; i <= index; i++) {
		str += 'x';
	}
	arr.push(str);
}
console.log(arr);

//  Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
arr = [];
for (let index = 1; index < 5; index++) {
	let str = '';
	for (let i = 1; i <= index; i++) {
		str += index;
	}
	arr.push(str);
}
console.log(arr);

//  Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill(value, size) {
	const arr = [];
	for (let index = 0; index < size; index++) {
		arr.push(value);
	}
	return arr;
}
console.log(arrayFill('x', 5));

//  Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
function exploreSumIndex(arr, value = 10) {
	let temp = 0;
	let counter;
	arr.some(function(element, index) {
		temp += element;
		if (temp > 10) {
			counter = index;
			return true;
		}
	});
	return counter ? `искомый индекс - ${counter}` : `сумма элементов массива меньше ${value}`;
}
console.log(exploreSumIndex([1, 2, 3, 4, 5]));

// Заполнение объектов
//  С помощью цикла сделайте объект с ключами 'a', 'b', 'c', 'd', 'e' и значениями 1, 2, 3, 4, 5.
arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let index = 0; index < arr.length; index++) {
	obj[arr[index]] = index;
}
console.log(obj);

// Переворот массива
//  Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = [];
for (let index = arr.length - 1; index >= 0; index--) {
	arr1.push(arr[index]);
}
console.log(arr1);

// Многомерные массивы
//  Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
//  Дан трехмерный массив с числами, например [[[[1, 2], [3, 4]]], [[5, 6], [7, 8]]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const calcSum = array => {
	let sum = 0;
	function calc(elem) {
		if (Array.isArray(elem)) {
			for (let index = 0; index < elem.length; index++) {
				calc(elem[index]);
			}
			return sum;
		}
		sum += elem;
		return sum;
	}
	return calc(array);
};

console.log(calcSum([[1, 2, 3], [4, 5], [6]]));
console.log(calcSum([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]));

//  С помощью двух циклов создайте массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let value = 0;
arr = [];
for (let index = 0; index < 3; index++) {
	let arr1 = [];
	for (let i = 0; i < 3; i++) {
		value += 1;
		arr1.push(value);
	}
	arr.push(arr1);
}
console.table(arr);

// ПРИМЕР ИЗ УЧЕБНИКА
// пусть дан массив с числами, давайте запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9

(function() {
	function inRange(num) {
		let sum = arraySum(getDigits(num));
		return sum >= 1 && sum <= 9;
	}
	function getDigits(num) {
		return String(num).split('');
	}
	function arraySum(arr) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += Number(arr[i]);
		}
		return sum;
	}

	let arr = [12, 19, 28, 13, 14, 345];
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (inRange(arr[i])) {
			result.push(arr[i]);
		}
	}
	console.log(result);
})();
