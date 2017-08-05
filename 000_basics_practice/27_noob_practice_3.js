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
}

// В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li).
;(function () {
	const input = document.querySelector('.country-list input');
	const list = document.querySelector('.country-list ul');
	const btn = document.querySelector('.country-list button');
	btn.addEventListener('click', ev => {
		list.innerHTML = '';
		if (input.value === '')return;
		const countriesArr = input.value.split(',');
		countriesArr.forEach((item) => {
			if (item.trim()) {
				const li = document.createElement('li');
				li.textContent = item.trim();
				list.appendChild(li);
			}
		});
	});
})()

//  В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так, чтобы введенные страны записывались в абзац под инпутом через запятую. То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны, не повторяясь.
;(function () {
	const input = document.querySelector('.enter-country input');
	const textContainer = document.querySelector('.enter-country p');
	let data = [];
	input.addEventListener('keyup', function (ev) {
		if (ev.keyCode !== 13 || this.value === '')return;
		const countriesArr = input.value.split(',');
		countriesArr.map((item) => {
			const cleanItem = item.trim();
			if (cleanItem && !data.includes(cleanItem)) {
				data.push(cleanItem);
			}
		});
		textContainer.textContent = data.reduce((pr, cur) => pr + ', ' + cur) + '.';
	});
})()

//  На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 20 символов. И добавьте троеточие в конец обрезанного текста
;(function () {
	const textBlocks = Array.from(document.querySelectorAll('.cards-text-trim .card-text'));
	textBlocks.forEach((item) => {
		const text = item.textContent;
		item.textContent = text.length <= 20 ? text : text.slice(0, 20) + '...';
	});
})()

//  Дана таблица с числами. По нажатию на кнопку найдите ячейку, в которой хранится максимальное число, и сделайте ее фон красным.
;(function (utils) {
	const tds = document.getElementById('max-table').getElementsByTagName('td');
	const btn = document.querySelector('.max-table-finder button');
	btn.onclick = findMaxTd;
	function findMaxTd() {
		let values = [];
		let numericTds = [];
		for (let index = 0; index < tds.length; index++) {
			const elementValue = Number(tds[index].textContent);
			if (utils.isNumeric(elementValue)) {
				values.push(elementValue);
				numericTds.push(tds[index]);
			}
		}
		const maxValueString = values.length ? String(Math.max(...values)) : null;
		if (maxValueString) {
			numericTds.forEach((item) => {
				if (item.textContent === maxValueString) {
					item.style.backgroundColor = 'red';
				}	
			});
		}
	}

})(common)

//  Дана таблица с числами. По нажатию на кнопку в инпут под таблицей выведите эти числа через запятую в порядке возрастания.
;(function (utils) {
	const tds = document.getElementById('string-table').getElementsByTagName('td');
	const btn = document.querySelector('.string-table-finder button');
	const input = document.querySelector('.string-table-finder input');
	btn.onclick = sortValues;
	function sortValues() {
		let values = [];
		for (let index = 0; index < tds.length; index++) {
			const elementValue = Number(tds[index].textContent);
			if (utils.isNumeric(elementValue)) {
				values.push(elementValue);
			}
		}
		values.sort((a, b) => a > b);
		input.value = values;
	}
})(common)

//  Дана таблица с числами. По нажатию на кнопку в последний ряд таблицы в каждую ячейку запишите сумму чисел в столбце таблицы, расположенном над определенной ячейкой.
;(function () {
	const table = document.getElementById('sum-table');
	const sumTd = table.rows[table.rows.length - 1].cells[1];
	const btn = document.querySelector('.sum-table-finder button');
	btn.addEventListener('click', ev => {
		// rows from 2 to second last
		let sum = 0;
		for (let index = 1; index < table.rows.length - 1; index++) {
			sum += Number(table.rows[index].cells[2].textContent);
		}
		sumTd.textContent = sum;
	});
})()

//  Дана таблица с числами. По нажатию на ячейку она активируется и становится красного цвета. Активировать можно много ячеек. Под таблицей кнопка. По нажатию по этой кнопке в абзац ниже выведите сумма активированных ячеек. Реализуйте кнопку 'сбросить активированные ячейки'.
;(function (utils) {
	const table = document.querySelector('.active-table-finder table');
	const input = document.querySelector('.active-table-finder input');
	const sumButton = document.querySelector('.active-table-finder .sum-button');
	const resetButton = document.querySelector('.active-table-finder .reset-button');
	table.addEventListener('click', ev => {
		const target = ev.target;
		if (target.closest('td') && utils.isNumeric(target.textContent)) {
			target.classList.toggle('bg-danger');
		}
	});
	sumButton.addEventListener('click', ev => {
		const activeCells = Array.from(table.getElementsByClassName('bg-danger'));
		if (activeCells.length) {
			input.value = activeCells.reduce((pr, cur) => pr + Number(cur.textContent), 0);
			return;
		}
		input.value = '';
	});
	resetButton.addEventListener('click', ev => {
		input.value = '';
		const activeCells = Array.from(table.getElementsByClassName('bg-danger'));
		activeCells.forEach((item) => {
			item.classList.remove('bg-danger');
		});
	});
})(common)

//  Дана таблица. По нажатию на ячейку в ней появляется инпут с содержимым этой ячейки и кнопка сохранить. Можно поредактировать текст в инпуте, сохранить - и текст ячейки поменяется.
;(function () {
	const table = document.querySelector('.edit-table table');
	let isEditing = false;
	table.addEventListener('click', ev => {
		if (isEditing)return false; 
		const target = ev.target;
		if (target.tagName === 'TD') {
			const span = createEditNode(target);
			isEditing = true;
			target.replaceChild(span, target.firstChild);
		}
	});
	function createEditNode (target) {
		const span = document.createElement('span');
		const button = document.createElement('button');
		const input = document.createElement('input');
		button.classList.add('editButton');
		button.textContent = 'Edit';
		button.addEventListener('click', saveEditNode);
		input.setAttribute('type', 'text');
		input.value = target.textContent;
		span.appendChild(input);
		span.appendChild(button);
		return span;
	}
	function saveEditNode () {
		const input = this.previousElementSibling;
		const td = this.closest('td');
		const span = this.parentNode;
		const text = document.createTextNode(input.value);
		td.replaceChild(text, span);
		this.removeEventListener('click', saveEditNode); 
		isEditing = false;
	}
})()

//  Реализуйте раскрывающийся список. По умолчанию есть список стран (ul), по нажатию на страну внутри li со страной появляется список городов.

//  Даны два селекта. В первом находятся страны, во втором - города. Сделайте так, чтобы когда выбирается определенная страна - в другом селекте появлялись города этой страны. В абзац ниже пишите выбранную страну и город через запятую.

//  Сделайте селекты день, мес, год. Сделайте так, чтобы не корректную дату нельзя было выбрать (например, 30 февраля нельзя, а 30 марта можно или 29 февраля можно, но только в високосный год).

//  Реализуйте калькулятор валют. Есть два селекта - селект с исходной валюты, селект с той валютой, в которую мы хотим перевести деньги, инпут, в который вводится сумма для обмена. Курсы валют храните в массиве. Сделайте так, чтобы в селектах нельзя было выбрать две одинаковых валюты.

//  Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).

//  Дан список и кнопка. По нажатию на кнопку посортируйте пункты списка по возрастанию.

//  Дан ряд ссылок. Сделайте так, чтобы по нажатию на ссылку она становилась с красным фоном. По нажатию на другую ссылку выделение первой ссылки снимается и выделяется та, на которую мы нажали. В абзац ниже пишите текст активной ссылки.
