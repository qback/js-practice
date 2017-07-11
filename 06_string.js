// Работа с регистром символов
// Для решения задач данного блока вам понадобятся следующие методы: toUpperCase, toLowerCase.
//  Дана строка 'js'. Сделайте из нее строку 'JS'. Показать решение.
let str = 'js';
console.log(str.toUpperCase());

//  Дана строка 'JS'. Сделайте из нее строку 'js'. Показать решение.

str = 'JS';
console.log(str.toLowerCase());

// Работа с length, substr, substring, slice. Работа с indexOf
// Для решения задач данного блока вам понадобятся следующие методы: length, substr, substring, slice, indexOf.
//  Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. Показать решение.
str = 'я учу javascript!';
console.log(str.length);

//  Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). Показать решение.
str = 'я учу javascript!';
const strSubstr = str.substr(2, 3);
const strSubstring = str.substring(2, 5);
const strSlice = str.slice(2, -12);
console.log(strSubstr, strSubstring, strSlice);

//  Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'. Показать решение.
str = 'я учу javascript!';
let pattern = 'учу';
console.log(str.toLowerCase().indexOf(pattern));

//  Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str. Показать решение.
str = 'я учу javascript!';
let str1 = 'я ем';
const truncate = (string, n) => string.length > n ? `${string.substr(0, n)}...` : `${string}`;
console.log(truncate(str, 5));
console.log(truncate(str1, 10));

// Работа с replace
// Для решения задач данного блока вам понадобятся следующие методы: replace.
//  Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены. Показать решение.
str = 'Я-учу-javascript!';
console.log(str.replace(/-/g, '!'));

// Работа с split
// Для решения задач данного блока вам понадобятся следующие методы: split.
//  Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива. Показать решение.
str = 'я учу javascript!';
let arr = str.slice(0, -1).split(' ');
console.log(arr);

//  Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива. Показать решение.
str = 'я учу javascript!';
arr = str.replace(/\s/g, '').split('');
console.log(arr);

//  В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'. Показать решение.
str = '2025-12-31';
console.log(str.split('-').reverse().join('.'));

// Работа с join
// Для решения задач данного блока вам понадобятся следующие методы: join.
//  Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'. Показать решение.
arr = ['я', 'учу', 'javascript', '!'];
console.log(arr.join('+'));

// Задачи
//  Преобразуйте первую букву строки в верхний регистр. Показать решение.
str = 'я учу javascript!';
console.log(str[0].toUpperCase() + str.slice(1));

//  Преобразуйте первую букву каждого слова строки в верхний регистр. Показать решение.
str = 'я учу javascript!';
arr = str.split(' ').map((item) => item[0].toUpperCase() + item.slice(1));
console.log(arr.join(' '));


//  Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками. Показать решение.
str = 'var_test_text';
arr = str.split('_');
for (let index = 1; index < arr.length; index++) {
	const item = arr[index];
	arr[index] = item[0].toUpperCase() + item.slice(1);
}
console.log(arr.join(''));
