// Выведите с помощью цикла столбец чисел от 1 до 100.
let str = '';
for (let index = 1; index < 101; index++) {
	str += `${index} `;
}
console.log(str);

//  Выведите с помощью цикла столбец чисел от 100 до 1.
str = '';
for (let index = 100; index > 0; index--) {
	str += `${index} `;
}
console.log(str);

//  Выведите с помощью цикла столбец четных чисел от 1 до 100.
str = '';
for (let index = 1; index < 101; index++) {
	if (index % 2 === 0) {
		str += `${index} `;
	}
}
console.log(str);

//  Заполните массив 10-ю иксами с помощью цикла.
let arr = [];
for (let index = 1; index < 11; index++) {
	arr.push('x');
}
console.log(arr);

//  Заполните массив числами от 1 до 10 с помощью цикла.
arr = [];
for (let index = 1; index < 11; index++) {
	arr.push(index);
}
console.log(arr);

//  Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
arr = [];
for (let index = 1; index < 11; index++) {
	arr.push(Number(Math.random().toFixed(2)));
}
console.log(arr);

//  Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
arr = [];
for (let index = 1; index < 11; index++) {
	arr.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr);

//  Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
arr = [9, 15, 18, 15, 4, 8, 20, 11, 16, 10];
arr = arr.filter((item) => {
	return item > 0 && item < 10;
});
console.log(arr);

//  Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
arr = [9, 15, 18, 15, 5, 8, 20, 11, 16, 10];
for (let index = 0; index < arr.length; index++) {
	if (arr[index] === 5) {
		console.log('Есть!');
		break;
	}
}

//  Дан массив. С помощью цикла выведите только те элементы массива, которые стоят на четных позициях (имеют четные ключи).
arr = [9, 15, 18, 15, 5, 8, 20, 11, 16, 10];
str = '';
for (let index = 0; index < arr.length; index++) {
	if (index % 2 === 0) {
		str += `${arr[index]} `;
	}
}
console.log(str);

//  Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
arr = [9, 15, 18, 15, 5, 8, 20, 11, 16, 10];
let arrSum = arr.reduce((previous, current) => {
	return previous + current;
}, 0);
console.log(arrSum);

//  Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
arr = [1, 2, 3];
let arrSquareSum = arr.reduce((previous, current) => {
	return previous + Math.pow(current, 2);
}, 0);
console.log(arrSquareSum);

//  Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
arr = [1, 2, 3, 4];
let average = arr.reduce((previous, current) => {
	return previous + current;
}, 0) / arr.length;
console.log(average);

//  Выведите на экран первые 20 чисел Фибоначчи.
let a = 0;
let b = 1;
let sum = 0;
str = `${a} ${b}`;
for (let index = 0; index < 18; index++) {
	sum = a + b;
	a = b;
	b = sum;
	str += ` ${sum}`;
}
console.log(str);