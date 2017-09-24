// вывести координаты при движении мышки
(function() {
	const area = document.querySelector('.area-1');
	const span = area.querySelector('.coords');
	area.addEventListener('mousemove', ev => {
		span.innerHTML = `Координаты мышки относительно окна:
						X:${ev.clientX} Y:${ev.clientY}`;
	});
})();

// по клику задать координаты левому верхнему углу квадрата
(function() {
	const area = document.querySelector('.area-2');
	const square = area.querySelector('.square');
	function goTo(ev) {
		square.style.left = ev.offsetX + 'px';
		square.style.top = ev.offsetY + 'px';
	}
	area.addEventListener('click', goTo);
})();

// по клику задать координаты левому середине квадрата
(function() {
	const area = document.querySelector('.area-3');
	const square = area.querySelector('.square');
	function goTo(ev) {
		square.style.left = ev.offsetX - square.offsetWidth / 2 + 'px';
		square.style.top = ev.offsetY - square.offsetHeight / 2 + 'px';
	}
	area.addEventListener('click', goTo);
})();
// вывести код нажатой клавиши, саму нажатую клавишу
(function() {
	const keysBlock = document.querySelector('.keys');
	const input = keysBlock.querySelector('input');
	const spans = keysBlock.querySelectorAll('span');
	input.addEventListener('keypress', ev => {
		input.value = '';
		spans[0].textContent = ev.keyCode;
		spans[1].textContent = String.fromCharCode(ev.keyCode);
	});
})();
//  Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, если в момент клика нажата клавиша Ctrl, и в зеленый цвет, если в момент клика нажата клавиша Alt.
(function() {
	const area = document.querySelector('.chameleon');
	area.addEventListener('click', function(ev) {
		if (ev.altKey && ev.ctrlKey) {
			this.innerHTML = 'А ты жадный!!!!!!!!!!';
		} else if (ev.ctrlKey) {
			this.style.backgroundColor = 'green';
		} else if (ev.altKey) {
			this.style.backgroundColor = 'red';
		} else {
			this.style.backgroundColor = null;
		}
	});
})();

// Практика
//  Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код номер 13). Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
(function() {
	const enterBlock = document.querySelector('.enter');
	const input = enterBlock.querySelector('input');
	const span = enterBlock.querySelector('span');
	input.addEventListener('keyup', ev => {
		if (ev.keyCode === 13) {
			span.innerHTML = input.value;
			input.value = '';
		}
	});
})();

//  Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
(function() {
	const list = document.querySelector('.add ul');
	const btn = document.querySelector('.add button');
	function addLi() {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.textContent = 'пункт';
		list.appendChild(li);
	}
	function addExlMark(ev) {
		const target = ev.target.closest('.list-group-item');
		if (target) {
			target.textContent += ' !';
		}
	}
	btn.addEventListener('click', addLi);
	list.addEventListener('click', addExlMark);
})();

//  Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу решите с помощью делегирования (то есть событие должно быть навешано на table).
(function() {
	const table = document.querySelector('.persons table');
	const tbodyRef = table.getElementsByTagName('tbody')[0];
	const firstNameInput = document.querySelector('.persons .firstName');
	const lastNameInput = document.querySelector('.persons .lastName');
	const btn = document.querySelector('.persons button');
	function checkInputs() {
		return firstNameInput.value && lastNameInput.value ? true : alert('Заполни все поля');
	}
	function createUserArray(firstName, lastName) {
		const user = [];
		user[0] = firstName.value;
		user[1] = lastName.value;
		return user;
	}
	function addRow(user) {
		const row = tbodyRef.insertRow(tbodyRef.rows.length);
		const firstSell = row.insertCell(0);
		const secondSell = row.insertCell(1);
		firstSell.textContent = user[0];
		secondSell.textContent = user[1];
	}
	function addNewInformation(node) {
		const newText = prompt('Добавьте новую информацию', node.textContent);
		if (newText) {
			node.textContent = newText;
		}
	}
	btn.addEventListener('click', ev => {
		if (checkInputs()) {
			const user = createUserArray(firstNameInput, lastNameInput);
			addRow(user);
		}
	});
	table.addEventListener('click', ev => {
		const target = ev.target;
		const td = target.closest('td');
		if (td) {
			addNewInformation(td);
		}
	});
})();
