//  Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Показать подсказку.
let str = 'строка';
console.log(str[0].toUpperCase() + str.slice(1));

//  Дана строка. Сделайте заглавным последний символ этой строки не используя цикл. 
str = 'строка';
console.log(str.slice(0, -1) + str.slice(-1).toUpperCase());

//  Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. Показать подсказку.
str = '123456';
console.log(str.split('').reverse().join('')); 

//  Дано число, например, 3751. Отсортируйте цифры в нем (сделайте из него 1357) не используя цикл. Показать подсказку.
let num = 3751;
let newNum = Number(
	String.prototype.split.call(num, '')
	.sort((a, b) => a < b ? -1 : 1)
	.join('')
	);
console.log(newNum);

//  Проверьте, что строка начинается на http://. Показать подсказку.
let pattern = 'http://';
str = 'http://theory.phphtml.net/tasks/javascript/base/';
console.log(str.startsWith(pattern));
console.log(str.substr(0, pattern.length) === pattern);
console.log(str.indexOf(pattern) === 0);

//  Проверьте, что строка заканчивается на .html.
pattern = '.html';
str = 'http://theory.phphtml.net/tasks/javascript/base.html';
console.log(str.endsWith(pattern));
console.log(str.slice(-pattern.length) === pattern);

//  Дана строка вида '/folder1/folder2/folder3/folder4/'. Строки между слешеми могут быть любыми. Получите содержимое второго блока (в нашем случае 'folder2'). Показать подсказку.
str = '/folder1/folder2/folder3/folder4/';
console.log(str.split('/')[2]);
let begin = str.indexOf('/', 1) + 1;
let end = str.indexOf('/', begin);
console.log(str.slice(begin, end));

//  Дана строка вида '/folder1/folder2/folder3/folder4/'. Строки между слешеми могут быть любыми. Получите содержимое второго блока с конца (в нашем случае 'folder3'). Показать подсказку.
str = '/folder1/folder2/folder3/folder4/';
end = str.lastIndexOf('/', str.length - 2);
begin = str.lastIndexOf('/', end - 1) + 1;
console.log(str.slice(begin, end));

//  Дана строка вида '/folder1/folder2/folder3/folder4/'. Строки между слешеми могут быть любыми. Удалите из нее блок с заданным номером. Найдите два решения, оба без цикла. Показать подсказку.
str = '/folder1/folder2/folder3/folder4/';
let arr = str.split('/');
arr.splice(2, 1);
console.log(arr.join('/'));
begin = str.indexOf('/', 1) + 1;
end = str.indexOf('/', begin);
str = str.slice(0, begin - 1) + str.slice(end);
console.log(str);

// На флаги
//  Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
arr = [4, 7, 5, 8, 5];
let flag = false;
for (let index = 0; index < arr.length; index++) {
	if (arr[index] === 5) {
		flag = true;
		break;
	}
}
console.log(flag ? '5 есть' : '5 нет');

//  Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
num = 31;
flag = true;
for (let index = 2; index < num; index++) {
	if (num % index === 0) {
		flag = false;
		break;
	}
}
console.log(flag ? 'не делится' : 'делится');

//  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
arr = [4, 7, 5, 8, 5, 5];
flag = false;
let temp = false;
for (let index = 0; index < arr.length; index++) {
	if (arr[index] === temp) {
		flag = true;
		break;
	}
	temp = arr[index];
}
console.log(flag ? 'соседи есть' : 'соседей нет');

//  Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
function isEqual (a, b) {
	return a === b;
}
console.log(isEqual(1, 1));
//  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
function isMoreThanTen (a, b) {
	return a + b > 10;
}
console.log(isMoreThanTen(5, 6));

//  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
function isPos (a) {
	return a < 0;
}
console.log(isPos(-1));