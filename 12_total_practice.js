//  Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой. Показать подсказку.
function ucfirst(str) {
	return str.substr(0, 1).toUpperCase() + str.slice(1);
}
let str = 'заглавным первый символ';
let newStr = str.split(' ').reduce((previous, current) => previous + ' ' + ucfirst(current), '').trim();
console.log(newStr);

//  Дана строка. Сделайте заглавным последний символ каждого слова этой строки.
function ucLast(str) {
	return str.slice(0, -1) + str.slice(-1).toUpperCase();
}
str = 'заглавным последний символ';
newStr = str.split(' ').reduce((previous, current) => previous + ' ' + ucLast(current), '').trim();
console.log(newStr);

//  Дана строка. Сделайте заглавным каждый четный символ этой строки.
str = 'заглавным четный символ';
let strArr = str.split('');
strArr = strArr.map((item, index) => {
	if (index % 2) {
		return item.toUpperCase();
	}
	return item;
});
str = strArr.join('');
console.log(str);

//  Дана строка с дефисами, например '12-345-67-89-10'. Замените первые 3 дефиса на !. Показать подсказку.
str = '12-345-67-89-10';
let i = 0;
let searchBegin = 0;
while (i < 3) {
	const defPosition = str.indexOf('-', searchBegin);
	str = str.slice(0, defPosition) + '!' + str.slice(defPosition + 1);
	searchBegin = defPosition + 1;
	i++;
}
console.log(str);

//  Дана строка с дефисами, например '12-345-67-89-10'. Замените первые 3 дефиса с конца на !. Показать подсказку.
str = '12-345-67-89-10';
i = 0;
searchBegin = str.length - 1;
while (i < 3) {
	const defPosition = str.lastIndexOf('-', searchBegin);
	str = str.slice(0, defPosition) + '!' + str.slice(defPosition + 1);
	searchBegin = defPosition - 1;
	i++;
}
console.log(str);

//  Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
str = 'var_text_hello';
newStr = str.split('_').map((item, index) => index > 0 ? ucfirst(item) : item).join('');
console.log(newStr);

//  Дана строка с пробелами по краям. Реализуйте функцию ltrim, которая будет убирать пробелы слева. Реализуйте функцию rtrim, которая будет убирать пробелы справа. Реализуйте функцию trim, которая будет убирать пробелы по концам строки.
str = '               строка   ';
function lTrim(str) {
	while (str.startsWith(' ')) {
		str = str.slice(1);
	}
	return str;
}
function rTrim (str) {
	while (str.endsWith(' ')) {
		str = str.slice(0, -1);
	}
	return str;
}
function trim (str) {
	return rTrim(lTrim(str));
}
newStr = trim(str);
console.log(newStr, newStr.length);

//  Сделайте функцию strReplace, которая будет осуществлять поиск и замену. Первым параметром функция должна принимать массив 'что меняем', а вторым параметром массив 'на что меняем'. Третьим параметром строку, в которой меняем. Функция должна искать в строке элементы первого массива и менять их на соответствующие элементы второго массива.
function replaceSymbols(string, a, b) {
	const reg = new RegExp(a, 'gi');
	return string.replace(reg, b);
}
function strReplace(arrOld, arrNew, string) {
	arrOld.map((item, index) => {
		string = replaceSymbols(string, item, arrNew[index]);
	})
	return string;
}
console.log(strReplace(['ы', 'е'], ['и', 'и'], 'ЖЫлЕ богато жыле'));


//  Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
function inArray(text, arr) {
	return arr.includes(text);
}
console.log(inArray('two', ['one', 'two', 3]));

//  Дана строка, например, '123456'. Сделайте из нее '214365'.
str = '123456';
strArr = str.split('');
for (var index = 1; index < strArr.length; index += 2) {
	let temp = strArr[index - 1];
	strArr[index - 1] = strArr[index];
	strArr[index] = temp;
}
str = strArr.join('');
console.log(str);

//  Сделайте функцию, которая меняет местами ключи и значения в объекте.
function changeKeyValue(obj) {
	const temp = {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			temp[obj[key]] = key;
		}
	}
	return temp;
}
console.log(changeKeyValue({name: 'Oleg', size: 18}));

//  Сделайте функцию, которая принимает параметрами два массива и сливает их в объект так, что элементы первого массива становятся ключами, а второго - значениями.
function marryArrays(firstArr, secondArr) {
	const temp = {};
	firstArr.forEach((item, index) => {
		temp[item] = secondArr[index];
	})
	return temp;
}
console.log(marryArrays(['a', 'b'], ['c', 'd']));

//  Дан массив вида [1, 2, 3, 4, 5, 6, 7, 8, 9]. Сделайте функцию, которая будет разбивать его в двухмерный массив. Первым параметром функция принимает массив для разбиения, а вторым - сколько элементов должно быть в подмассиве.
// Например, так func([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) мы получим [[1, 2, 3], [4, 5, 6], [7, 8, 9]], а так func([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) мы получим [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
function divideArray(arr, value) {
	const newArr = [];
	while (arr.length) {
		newArr.push(arr.splice(0, value));
	}
	return newArr;
}
console.table(divideArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

//  Дана строка, которая содержит список классов CSS - слов, разделенных пробелом: str='open menu'. Создайте функцию addClass(str, 'class'), которая добавляет в список новый класс, но только если его там еще нет. Метод classList использовать запрещено.
// Примеры: addClass('open menu', 'class') сделает строку 'open menu class'. А вот addClass('open menu', 'menu') вернет строку 'open menu', так как класс menu уже есть в строке.
function addClass(classString, newClass) {
	return classString.includes(newClass) ? classString : `${classString} ${newClass}`;
}
console.log(addClass('menu open active', 'active'));

//  Сделайте функцию removeClass, которая будет удалять заданный класс. Метод classList использовать запрещено.
// Примеры: removeClass('open menu class', 'menu') сделает строку 'open class'. А вот removeClass('open menu class', 'test') вернет строку 'open menu class', так как класса test нет в строке и удалять его не надо.
function removeClass(classString, className) {
	if (classString.includes(className)) {
		const classArr = classString.split(' ');
		const classNameIndex = classArr.indexOf(className);
		classArr.splice(classNameIndex, 1);
		return classArr.join(' ');
	}
	return classString;
}
console.log(removeClass('menu open active', 'open'));

//  Сделайте функцию toggleClass(str, 'class'), которая будет работать так: если класс есть - удалит его, если класса нет - добавит. Метод classList использовать запрещено.
function toggleClass(classString, className) {
	if (classString.includes(className)) {
		const classArr = classString.split(' ');
		const classNameIndex = classArr.indexOf(className);
		classArr.splice(classNameIndex, 1);
		return classArr.join(' ');
	}
	return `${classString} ${className}`;
}
console.log(toggleClass('menu open active', 'open'));
console.log(toggleClass('menu active', 'open'));

//  Сделайте функцию, которая принимает строку на русском языке, а возвращает ее транслит.
function isUpperCase(character) {
	return character === character.toUpperCase();
}
const translitMe = (function () {
	const cyr = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
	const lat = ['a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'sch', '', 'i', '', 'e', 'yu', 'ya'];
	return function(str) {
		let strArray = str.split('');
		strArray = strArray.map((item, index) => {
			const lowerCaseItem = item.toLowerCase();
			const upperCase = isUpperCase(item);
			if (cyr.includes(lowerCaseItem)) {
				return upperCase ? lat[cyr.indexOf(lowerCaseItem)].toUpperCase() : lat[cyr.indexOf(lowerCaseItem)];
			}
			return item;
		});
		return strArray.join('');
	}
})();
console.log(translitMe('Ням-ням!! ВкуснЯшка!'));

//  Сделайте функцию,  которая возвращает множественное или единственное число существительного. Пример: 1 яблоко, 2 (3, 4) яблока, 5 яблок. Функция первым параметром принимает число, а следующие 3 параметра — форма для единственного числа, для чисел два, три, четыре и для чисел, больших четырех, например, func(3, 'яблоко', 'яблока', 'яблок').
function chooseEnding(num, ...endings) {
	switch (num) {
		case 1:
			return `${num} ${endings[0]}`;
		case 2:
		case 3:
		case 4:
			return `${num} ${endings[1]}`;
		default:
			return `${num} ${endings[2]}`;
	}
}
console.log(chooseEnding(1, 'яблоко', 'яблока', 'яблок')); 

//  Дружественные числа - два различных числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, сумма всех собственных делителей второго числа равна первому числу.
// Например, 220 и 284. Делители для 220 это 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 и 110, сумма делителей равна 284. Делители для 284 это 1, 2, 4, 71 и 142, их сумма равна 220.
// Задача: найдите все пары дружественных чисел в промежутке от 1 до 10000. Для этого сделайте вспомогательную функцию, которая находит все делители числа и возвращает их в виде массива. Также сделайте функцию, которая параметром принимает массив, а возвращает его сумму.
function findDividers(value) {
	const arr = [];
	for (var index = 1; index < value; index++) {
		if (value % index === 0) {
			arr.push(index);
		}
	}
	return arr;
}
function findArrSum(arr) {
	return arr.reduce((previous, current) => {
		return previous + current;
	}, 0)
}
function findAmicable(value) {
	const temp = {};
	for (var index = 1; index <= value ; index++) {
		const dividerSum = findArrSum(findDividers(index));
		if (index === dividerSum) {
			continue;
		}
		const oppDividerSum = findArrSum(findDividers(dividerSum));
		if (index === oppDividerSum) {
			temp[index] = dividerSum;
		}
	}
	return temp;
}
// console.log(findAmicable(10000));


//  Реализуйте функцию shuffle, которая перемешивает элементы массива в случайном порядке.
// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function compareRandom(a, b) {
	return Math.random() - 0.5;
}
//хороший вариант от Кантора
function shuffleGood(arr) {
	return arr.sort(compareRandom);
}
//говнокод
function shuffle(arr) {
	const temp = [];
	for (let index = arr.length - 1; index >= 0; index--) {
		const randomNumber = getRandomInt(0, arr.length - 1);
		temp.push(arr.splice(randomNumber, 1)[0]);
	}
	return temp;
}
console.log(shuffle([1, 2, 3, 4])); 
console.log(shuffleGood([1, 2, 3, 4])); 

//  Реализуйте функцию strShuffle, которая перемешивает символы строки в случайном порядке.
function strShuffle(str) {
	const shuffleArr = shuffle(str.split(''));
	return shuffleArr.join('');
}
console.log(strShuffle('бананан'));

//  Реализуйте функцию unique, которая будет удалять дубли из массива. Пример: unique([1, 2, 3, 4, 3]) вернет [1, 2, 3, 4].
function unique(arr) {
	const temp = {};
	const tempArr = [];
	for (let item of arr) {
		if (temp[item]) {continue;}
		temp[item] = true;
		tempArr.push(item);
	}
	return tempArr;
}
console.log(unique([1, 2, 3, 4, 3])); 

//  Реализуйте функцию intersection, которая вернет массив из элементов, встречающихся в каждом из переданных массивов. Пример: intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернет [1, 2].
function getIntersection (...metaArr) {
	metaArr.sort((a, b) => a.length - b.length);
	const testArr = metaArr.splice(0, 1)[0];
	const mixedArr = metaArr.reduce((previous, current) => {
		return previous.concat(current);
	}, []);
	const uniqueMixedArr = unique(mixedArr);
	const resultArr = testArr.filter((item) => {
		return uniqueMixedArr.includes(item);
	});
	return resultArr;
}
console.log(getIntersection(['ляля', 1, 2, 3], [101, 2, 1, 10], [2, 1, 7]));

//  Реализуйте функцию union, которая объединит уникальные элементы всех массивов, переданных ей параметром. Пример: union([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернет [1, 2, 3, 101, 10].
function getUnion (...metaArr) {
	const mixedArr = metaArr.reduce((previous, current) => {
		return previous.concat(current);
	}, []);
	const uniqueMixedArr = unique(mixedArr);
	return uniqueMixedArr;
}
console.log(getUnion([1, 2, 3], [101, 2, 1, 10], [2, 1]));

