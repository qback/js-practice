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

// Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.
;(function () {
	const checkbox = document.querySelector('.link-check input');
	const link = document.querySelector('.link-check button');
	link.onclick = () => {
		checkbox.checked = !checkbox.checked;
	};
})()

//  Даны чекбоксы. Дана кнопка. По нажатию на кнопку сделайте все чекбоксы отмеченными.
;(function () {
	const checkboxes = Array.from(document.querySelectorAll('.link-all input'));
	const link = document.querySelector('.link-all button');
	link.onclick = () => {
		checkboxes.forEach(item => {
			item.checked = true;
		});
	};
})()

//  Спросите у пользователя какой язык (html, css, js, php) он знает с помощью радио кнопочек. Выведите этот язык в абзац.
;(function () {
	const radios = Array.from(document.querySelectorAll('.vote input[type="radio"]'));
	const resultNode = document.querySelector('.vote .result');
	radios.forEach(item => {
		item.onchange = () => {
			resultNode.innerHTML = item.value;
		};
	});
})()

//  Спросите у пользователя какие языки (html, css, js, php) он знает с помощью чекбоксов. Выбранные языки должны выводится в абзац ниже через запятую.
;(function () {
	const radios = Array.from(document.querySelectorAll('.vote-check input[type="checkbox"]'));
	const resultNode = document.querySelector('.vote-check .result');
	radios.forEach(item => {
		item.onchange = () => {
			const filteredRadioValues = radios.filter(item => item.checked).map(item => item.value);
			resultNode.innerHTML = filteredRadioValues;
		};
	});
})()

//  Дан чекбокс. Дан инпут. Сделайте так, что если чекбокс отмечен - инпут видимый, если не отмечен - не видимый.
;(function () {
	const checkbox = document.querySelector('.toggle-input input[type="checkbox"]');
	const input = document.querySelector('.toggle-input input[type="text"]');
	checkbox.onchange = () => {
		input.classList.toggle('invisible');
	};
})()

//  Дан инпут. Даны li. В инпут пишется номер. Сделайте так, чтобы по вводу числа, li с заданным номером покрасился в красный цвет.
;(function () {
	const input = document.querySelector('.custom-li input');
	const items = Array.from(document.querySelectorAll('.custom-li li'));
	input.onkeyup = function () {
		const previous = items.find(item => item.style.color === 'red');
		const newValue = Number(this.value) - 1;
		if (previous) {previous.style.color = '';}
		if (newValue < items.length && newValue >= 0) {
			items[newValue].style.color = 'red';
		}
	};
})()

//  Дан абзац. Даны чекбоксы 'перечеркнуть', 'сделать жирным', 'сделать красным'. Если соответствующий чекбокс отмечен - заданное действие происходит с абзацем (становится красным, например). Если чекбоксу снять отметку - действие отменяется.
;(function () {
	const container = document.querySelector('.test');
	const text = document.querySelector('.test p');
	container.onclick = ev => {
		const target = ev.target;
		if (target.closest('input[type=checkbox]')) {
			text.classList.toggle(target.value);
		}
	};
})()

//  Дан блок с кнопкой 'закрыть блок'. По нажатию на эту кнопку блок должен исчезнуть. Кнопка размещается внутри блока и должна исчезнуть вместе с ним. Блоков может быть любое количество, каждый из них закрывает своя кнопка.

;(function () {
	const btns = Array.from(document.querySelectorAll('.cards .btn'));
	btns.forEach(item => {
		item.addEventListener('click', function () {
			const card = this.closest('.card');
			if (card) {
				card.style.display = 'none';
			}
		});
	});
})();
