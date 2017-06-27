// На цикл в цикле
//  Выведите на экран таблицу умножения (как в школьной тетради).
for (let index = 1; index < 10; index++) {
	for (let i = 1; i < 10; i++) {
		let value = (i * index);
		value = value < 10 ? `0${value} ` : `${value} `;
		document.write(value);
	}
	document.write('<br>');
}

// Пирамидки
//  С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную $str.
let $str = '';
for (let index = 1; index < 10; index++) {
	$str += index;
}
console.log($str);

//  С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную $str.
$str = '';
for (let index = 9; index > 0; index--) {
	$str += index;
}
console.log($str);

//  С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную $str.
$str = '-';
for (let index = 1; index < 10; index++) {
	$str += index;
	$str += '-';
}
console.log($str);

//  Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
// Показать решение.
for (let index = 1; index < 21; index++) {
	for (let i = 1; i <= index ; i++) {
		document.write('x');
	}
	document.write('<br>');
}

//  С помощью двух вложенных циклов нарисуйте следующую пирамидку:

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Показать решение.
for (let index = 1; index < 10; index++) {
	for (let i = 1; i <= index ; i++) {
		document.write(index);
	}
	document.write('<br>');
}

//  Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for или while:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx
// Показать решение.
for (let index = 2; index < 11; index += 2) {
	for (let i = 1; i <= index; i++) {
		document.write('x');
	}
	document.write('<br>');
}