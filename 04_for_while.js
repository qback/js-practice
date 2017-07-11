// Задачи
//  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10. Показать решение.
let arr = [2, 5, 9, 15, 0, 4];
let filteredArray = arr.filter((value) => value > 3 && value < 10);
console.log(filteredArray);

//  Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
arr = [2, -5, 9, -15, 0, 4];
let arrSum = arr.reduce((previous, current) => {
	if (current > 0) {
		return previous + current;
	}
	return previous;
}, 0);
console.log(arrSum);

//  Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла foreach и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо. Показать решение.
arr = [1, 2, 5, 9, 4, 13, 4, 10];
// There is no way to stop or break a forEach()
// Поэтому используем some()
arr.some((item) => {
	if (item === 4) {
		console.log('Есть!!!');
		return true;
	}
});

//  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
arr = [10, 20, 30, 50, 235, 3000];
filteredArray = arr.filter((item) => {
	const firstItemSymbol = ~~`${item}`[0];
	return [1, 2, 5].includes(firstItemSymbol);
});
console.log(filteredArray);

//  Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'. Показать решение.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = '-';
for (let i = 0; i < arr.length; i++) {
	result += arr[i];
	result += '-';
}
console.log(result);

//  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным. Показать решение.
arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let list = document.createElement('ul');
arr.forEach((item, index) => {
	const listItem = document.createElement('li');
	if (index > 4) {
		listItem.innerHTML = `<b>${item}</b>`;
		list.appendChild(listItem);
		return;
	}
	listItem.innerHTML = `${item}`;
	list.appendChild(listItem);
});
document.body.appendChild(list);

//  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day. Показать решение.
arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const currentDayIndex = new Date().getDay();
const actualIndex = currentDayIndex ? currentDayIndex - 1 : 6;
list = document.createElement('ul');
arr.forEach((item, index) => {
	const listItem = document.createElement('li');
	if (index === actualIndex) {
		listItem.innerHTML = `<em>${item}</em>`;
		list.appendChild(listItem);
		return;
	}
	listItem.innerHTML = `${item}`;
	list.appendChild(listItem);
});
document.body.appendChild(list);

//  Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла),. Показать решение.
let num = 1000;
let iter = 0;
while (num >= 50) {
	num /= 2;
	iter++;
}
console.log(iter);