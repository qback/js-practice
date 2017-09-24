//  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(value) {
	return value > 0 && value < 10;
}
console.log(isNumberInRange(9));

//  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
let arr = [4, 56, -12, 0, 6];
let arr1 = [];
arr.map(item => {
	if (isNumberInRange(item)) {
		arr1.push(item);
	}
});
console.log(arr1);

//  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(value) {
	const valueArr = String(value).split('');
	const digitsSum = valueArr.reduce((previous, current) => {
		return previous + Number(current);
	}, 0);
	return digitsSum;
}
console.log(getDigitsSum(1234));

//  Найдите все года от 1 до 2017, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
arr = [];
for (let i = 1; i <= 2017; i++) {
	if (getDigitsSum(i) === 13) {
		arr.push(i);
	}
}
console.log(arr);

//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
function isEven(value) {
	return !(value % 2);
}
console.log(isEven(4));

//  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
arr = [4, 56, -12, 0, 6, 7, -11];
let newArr = arr.filter(item => {
	return isEven(item);
});
console.log(newArr);

//  Сделайте функцию getDividers, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
function getDividers(value) {
	let arr = [];
	for (let index = 2; index < value; index++) {
		if (value % index === 0) {
			arr.push(index);
		}
	}
	return arr;
}
console.log(getDividers(15));

//  Сделайте функцию, которая параметром принимает 2 числа, а возвращает массив их общих делителей. Для этого используйте вспомогательную функцию getDividers из предыдущей задачи.
function getCommonDividers(first, second) {
	const arrCommonDividers = [];
	const firstArr = getDividers(first);
	const secondArr = getDividers(second);
	firstArr.map(item => {
		if (secondArr.includes(item)) {
			arrCommonDividers.push(item);
		}
	});
	return arrCommonDividers.length ? arrCommonDividers : 'no common dividers';
}
console.log(getCommonDividers(8, 16));

//  Пусть у нас есть автобусные билеты. Номер каждого билета состоит из 6 цифр. Счастливый билет - это билет, сумма первых трех цифр которого равна сумме вторых трех цифр. Сделайте функцию isTicketLucky, которая проверяет, счастливый билет или нет. Если это так - пусть функция возвращает true, а если не так - то false.
function isTicketLucky(ticketNum) {
	const ticketStr = typeof ticketNum === 'string' ? ticketNum : String(ticketNum);
	const beginTicketArr = ticketStr.substr(0, 3).split('');
	const endTicketArr = ticketStr.substr(3, 3).split('');
	const beginTicketSum = beginTicketArr.reduce((previous, current) => {
		return previous + Number(current);
	}, 0);
	const endTicketSum = endTicketArr.reduce((previous, current) => {
		return previous + Number(current);
	}, 0);
	return beginTicketSum === endTicketSum;
}
console.log(isTicketLucky('143008'));

//  Создайте массив всех автобусных билетов из 6-ти цифр. Учтите, что билеты могут начинаться с нуля.
let defaultTicket = '000000';
arr = [];
function getDigitsNum(num) {
	return String(num).length;
}
for (let index = 1; index < 1000000; index++) {
	const digitsNum = getDigitsNum(index);
	const ticketStr = defaultTicket.slice(digitsNum) + index;
	arr.push(ticketStr);
}
console.log(arr, arr.length);

//  Создайте массив всех счастливых билетов. Для этого используйте вспомогательную функцию isTicketLucky из предыдущей задачи.
defaultTicket = '000000';
arr = [];
for (let index = 1; index < 1000000; index++) {
	const digitsNum = getDigitsNum(index);
	const ticketStr = defaultTicket.slice(digitsNum) + index;
	if (isTicketLucky(ticketStr)) {
		arr.push(ticketStr);
	}
}
console.log(arr, arr.length);
