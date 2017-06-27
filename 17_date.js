// Работа с new Date
// Для решения задач данного блока вам понадобятся следующие методы объекта Date: getFullYear, getMonth, getDate, getHours, getMinutes, getSeconds.
const today = new Date();
// 	Выведите на экран текущий день. Показать решение.
console.log(today.getDay());
// 	Выведите на экран текущий месяц. Показать решение.
console.log(today.getMonth());
// 	Выведите на экран текущий год. Показать решение.
console.log(today.getFullYear());
// 	Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
function normalizeDigits (digits) {
	if (digits < 10) {
		return '0' + digits;
	}
	return String(digits);
}
function getDateString (date) {
	const seconds = normalizeDigits(today.getSeconds());
	const minutes = normalizeDigits(today.getMinutes());
	const hours = normalizeDigits(today.getHours());
	const days = normalizeDigits(today.getDate());
	const months = normalizeDigits(today.getMonth() + 1);
	const year = today.getFullYear();
	return hours + ':' + minutes + ':' + seconds + ' ' + days + '.' + months + '.' + year; 
}
console.log(getDateString(Date()));

// Работа с getDay
// Для решения задач данного блока вам понадобятся следующие методы: getDay.
//  Выведите на экран номер текущего дня недели. Показать решение.
console.log(today.getDay());

//  Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию, которая параметром принимает число, а возвращает день недели по-русски.
function showDayString (day) {
	const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	return days[day];
}
console.log(showDayString(today.getDay()));

//  Узнайте, какой был 7-го января 2015 года. Показать решение.
let date = new Date(2015, 0, 7);
console.log(showDayString(date.getDay()));

// Работа с getTime
// Для решения задач данного блока вам понадобятся следующие методы: getTime.
// 	Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.
console.log(~~(new Date().getTime() / 1000 / 60));

// Работа с Date.parse
// Для решения задач данного блока вам понадобятся следующие методы: Date.parse.
// 	Выведите на экран количество секунд, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse.
console.log(~~((new Date().getTime() - Date.parse('1988-03-01')) / 1000));

// Разность между датами
// 	Выведите на экран количество секунд с начала дня до настоящего момента времени.
const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
console.log(~~((today.getTime() - todayStart.getTime()) / 1000));

// 	Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' (с конкретным годом). По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения. Воспользуйтесь методом Date.parse.
(function () {
	const input = document.getElementById('birthDay');
	const span = document.getElementById('days');
	const example = document.getElementById('example');
	function getActualBirthDay (date) {
		const today = new Date();
		const actualBirthDay = new Date(today.getFullYear(), date.getMonth(), date.getDate());
		return (today - actualBirthDay < 0) ? actualBirthDay : new Date(today.getFullYear() + 1, date.getMonth(), date.getDate());
	}
	function showremainningTime (dateString) {
		const birthDate = new Date(Date.parse(dateString));
		const actualBirthDay = getActualBirthDay(birthDate);
		const daysDiff = Math.ceil(((actualBirthDay - new Date()) / 1000 / 60 / 60 / 24));
		return daysDiff === 365 ? 0 : daysDiff;
	}

	input.onchange = function (e) {
		span.innerHTML = showremainningTime(e.target.value);
	};

	example.onclick = function () {
		const benchBegin = Date.now();
		input.value = '2014-05-06';
		span.innerHTML = showremainningTime('2014-05-06');
		console.log(`Время выполнения: ${Date.now() - benchBegin}`);
	};
})();
// TODO: добавить обработку исключения (високосный год)

// Выведите на экран количество секунд, которое осталось до конца дня.
(function () {
	const span = document.getElementById('sec');
	function calculateSeconds () {
		const today = new Date();
		// console.log(today);
		const endDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
		// console.log(endDay);
		span.innerHTML = `${~~((endDay - today) / 1000)}`;
	}
	calculateSeconds();
	setInterval(calculateSeconds, 1000);
})()

// Создайте select, в который пользователь вводит день недели - например, вторник. По потери фокуса выведите под инпутом сколько дней осталось до ближайшего вторника.
;(function () {
	const select = document.getElementById('weekDays');
	const today = document.getElementById('today');
	const next = document.getElementById('next');
	const value = document.getElementById('value');
	const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	function calcRemaining (next, today) {
		const subDays = next - today;
		return (subDays > 0) ? subDays : subDays + 7; 
	}
	function calcMessage (day) {
		const selectDay = Number(day);
		const todayDay = new Date().getDay();
		today.innerHTML = days[todayDay];
		next.innerHTML = days[selectDay];
		value.innerHTML = calcRemaining(selectDay, todayDay);
	}
	select.onchange = function (e) {
		calcMessage(e.target.value);
	};
	calcMessage(1);
})()



