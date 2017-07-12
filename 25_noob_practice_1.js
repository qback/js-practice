// Урок 1
const common = {
	isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	},
	clearNodeChilds(node) {
		while (node.lastChild) {
			node.removeChild(node.lastChild);
		}
	},
	randomInteger(min, max) {
		let rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	}
};

//  Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
;(function () {
	const input = document.querySelector('.range-in input');
	input.addEventListener('blur', function () {
		const value = parseFloat(this.value);
		if (value <= 100 && value >= 1) {
			this.style.boxShadow = '0 0 5px 0 green';
			return;
		}
		this.style.boxShadow = '0 0 5px 0 red';
	});
})()

//  Дан инпут. Выделите любой текст на странице. По окончанию выделения этот текст должен записаться в этот инпут.
;(function () {
	const selectArea = document.querySelector('.select-text');
	const input = document.querySelector('.select-text input');
	selectArea.addEventListener('mouseup', ev => {
		const text = window.getSelection().toString();
		if (text.length) {
			input.value = text;
		}
	});
})()

//  Даны абзацы с числами. По нажатию на кнопку найдите абзац, в котором хранится максимальное число, и сделайте его красного цвета.
;(function () {
	const paragraphs = Array.from(document.querySelectorAll('.max-number p'));
	const button = document.querySelector('.max-number button');
	button.addEventListener('click', ev => {
		let i = 0;
		let maxValue = Number(paragraphs[0].textContent);
		for (let index = 1; index < paragraphs.length; index++) {
			const currentValue = Number(paragraphs[index].textContent);
			if (currentValue > maxValue) {
				maxValue = currentValue;
				i = index;
			}
		}
		paragraphs[i].style.cssText = 'background-color: red; color: white';
	});
})()

//  Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
;(function () {
	const container = document.querySelector('.zh-zh');
	const input = container.querySelector('input');
	let counter = 0;
	container.addEventListener('click', ev => {
		const target = ev.target;
		if (target.tagName === 'P') {
			input.value = ++counter;
		}
	});
})()

//  Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
;(function () {
	const input = document.querySelector('.square input');
	let stop = null;
	function squareValue() {
		stop = setInterval(() => {
			this.value = Math.pow(this.value, 1.0001);
		}, 1000);
	}
	function clearValue() {
		clearInterval(stop);
	}
	input.addEventListener('focus', clearValue);
	input.addEventListener('blur', squareValue);
})()

//  Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
;(function (utils) {
	const button = document.querySelector('.random button');
	const input = document.querySelector('.random input');
	button.addEventListener('click', ev => {
		const arr = [];
		for (let index = 0; index < 8; index++) {
			arr.push(utils.randomInteger(65, 90));
		}
		input.value = String.fromCharCode(...arr).toLowerCase();
	});
})(common)

//  Модифицируйте предыдущую задачу так, чтобы был еще один инпут, в котором задается длина случайной строки.
;(function (utils) {
	const button = document.querySelector('.random-mod button');
	const input = document.querySelector('.random-mod input');
	const resultInput = document.querySelector('.random-mod .result')
	button.addEventListener('click', ev => {
		const arr = [];
		for (let index = 0; index < input.value; index++) {
			arr.push(utils.randomInteger(65, 90));
		}
		resultInput.value = String.fromCharCode(...arr).toLowerCase();
	});
})(common)

//  Модифицируйте предыдущую задачу так, чтобы был еще один инпут, в котором задаются символы, из которых формируется эта случайна строка. Символы задаются без всяких разделитетей, в одну строку.
;(function (utils) {
	const button = document.querySelector('.string-mod button');
	const input = document.querySelector('.string-mod input');
	const resultInput = document.querySelector('.string-mod .result');
	button.addEventListener('click', ev => {
		resultInput.value = [...input.value]
			.sort(() => Math.random() * 2 - 1)
			.join('');
	});
})(common)

//  Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.
;(function (utils) {
	const input = document.querySelector('.timer input');
	const result = document.querySelector('.timer .result');
	input.addEventListener('blur', countOff);
	function countOff() {
		let count = this.value;
		if (utils.isNumeric(count)) {
			result.innerHTML = count;
			const stop = setInterval(() => {
				result.innerHTML = count--;
				if (count < 0) {
					clearInterval(stop);
				}
			}, 500);
		}
	}
})(common)

//  Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
;(function () {
	const paragraph = document.querySelector('.alter-paragraph p');
	paragraph.style.color = 'red';
	setInterval(() => {
		const currentColor = paragraph.style.color;
		paragraph.style.color = currentColor === 'red' ? 'green' : 'red';
	}, 1000);
})()

//  Дан абзац. Дан массив цветов ['red', 'green', 'blue']. Сделайте так, чтобы каждую секунду абзац менял свой цвет на определенное значение их массива: сначала 'red', потом 'green' и так далее. Как только цвета в массиве закончатся - все начнется сначала. Количество цветов в массиве может быть любым.
;(function () {
	const paragraph = document.querySelector('.arr-color-paragraph p');
	const colorArr = ['red', 'blue', 'green'];
	let counter = 1;
	paragraph.style.color = colorArr[0];
	setInterval(() => {
		paragraph.style.color = colorArr[counter++];
		if (counter >= colorArr.length) counter = 0;
	}, 1000);
})()

//  Дан абзац. Дан массив строк ['один', 'два', 'три']. Под абзацем ссылка 'следующая строка'. По заходу на страницу в абзаце должен стоять нулевой элемент этого массива, а по нажатию на ссылку - вставлятся следующий элемент.
;(function () {
	const paragraph = document.querySelector('.assignment p');
	const nextLink = document.querySelector('.assignment a');
	const arr = ['один', 'два', 'три'];
	let counter = 0;
	const init = () => {
		paragraph.innerHTML = arr[counter];
		counter++;
	};
	nextLink.addEventListener('click', ev => {
		paragraph.innerHTML = arr[counter];
		counter++;
		if (counter >= arr.length) counter = 0;
	});
	init();
})()

//  Даны инпуты с числами. Произвольное количетсво, пусть три. В первый инпут запишите 1, через секунду во второй инпут запишите 2, еще через секунду в третий инпут 3, потом через секунду в первый инпут запишите 4, во второй 5 и так далее до бесконечности.
;(function () {
	const inputs = Array.from(document.querySelectorAll('.leap-value input'));
	const inputsCount = inputs.length;
	let counter = 1;
	function leapCounter() {
		inputs.forEach((item, index) => {
			item.value = '';
			if (index === counter % inputsCount) {
				item.value = counter;
			}
		});
		counter++;
	}
	setInterval(leapCounter, 1000);

})()

