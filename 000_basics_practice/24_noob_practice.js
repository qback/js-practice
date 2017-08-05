// Урок 1
const common = {
	isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	},
	clearNodeChilds(node) {
		while (node.lastChild) {
			node.removeChild(node.lastChild);
		}
	}
};

//  Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".
(function (utils) {
	const inputs = Array.from(document.querySelectorAll('.sum input'));
	const result = document.querySelector('.sum span');
	const btn = document.querySelector('.sum button');
	btn.addEventListener('click', ev => {
		ev.preventDefault();
		const sum = inputs.reduce((previous, current) => {
			const value = utils.isNumeric(current.value) ? parseFloat(current.value) : 0;
			return previous + value;
		}, 0);
		result.innerHTML = sum;
	});
})(common)

//  Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
;(function (utils) {
	const input = document.querySelector('.digit-sum input');
	const result = document.querySelector('.digit-sum span');
	function calcDigitsSum(income) {
		if (!utils.isNumeric(income)){return 'Фигушки!';}
		const arr = income.split('');
		const sum = arr.reduce((previous, current) => {
			return previous + parseFloat(current);
		}, 0);
		return sum;
	}
	input.addEventListener('blur', ev => {
		const sum = calcDigitsSum(input.value);
		result.innerHTML = sum;
	});
})(common)

//  Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
;(function (utils) {
	const input = document.querySelector('.arith-mean input');
	const result = document.querySelector('.arith-mean span');
	function calcMean(income) {
		const sum = income.reduce((previous, current) => {
			return previous + parseFloat(current);
		}, 0);
		return sum / income.length;
	}
	input.addEventListener('blur', function () {
		const commaLessArr = this.value.split(',');
		const arrIsNumeric = commaLessArr.some(item => {
			return !utils.isNumeric(item);
		});
		result.innerHTML = arrIsNumeric ? 'Фигушки!' : calcMean(commaLessArr);
	});
})(common)

//  Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты.
;(function (utils) {
	const incomeInput = document.querySelector('.full-name .income');
	const resultNode = document.querySelector('.full-name .result');
	function createChildren(node, arr) {
		const supArr = ['Фамилия', 'Имя', 'Отчество'];
		utils.clearNodeChilds(node);
		arr.forEach((item, index) => {
			const input =
				`<div class="input-group">
					<span class="input-group-addon">${supArr[index]}</span>
					<input type="text" class="form-control" aria-label="${supArr[index]}" value=${item}>
				</div>`;
			node.insertAdjacentHTML('beforeend', input);
		});
	}
	incomeInput.addEventListener('blur', function () {
		const value = this.value;
		if (!value){return;}
		const rawArr = value.split(' ');
		if (rawArr.length > 3) {rawArr.length = 3;}
		createChildren(resultNode, rawArr);
	});
})(common)

//  Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы при нажатии пробела, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).
;(function () {
	const incomeInput = document.querySelector('.full-name-upper .income');
	incomeInput.addEventListener('keyup', function (ev) {
		const value = this.value;
		if (ev.keyCode !== 32 || !this.value.trim()){return;}
		const namesArr = value.split(' ');
		const upperNamesArr = namesArr.map(item => {
			return item.substr(0, 1).toUpperCase() + item.slice(1);
		});
		this.value = upperNamesArr.join(' ');
	});
})()

//  Дан инпут. В него вводится текст. По мере печатания узнайте количество слов в этом тексте.
;(function () {
	const incomeInput = document.querySelector('.word-number .income');
	const resultNode = document.querySelector('.word-number span');
	function countWords(str) {
		return str.trim().split(/\s+/).length;
	}
	incomeInput.addEventListener('input', function (ev) {
		const wordsCount = this.value === '' ? 0 : countWords(this.value);
		resultNode.innerHTML = wordsCount;
	});
})()

//  Дан инпут. В него вводится текст. По мере ввода узнайте количество символов в самом длинном слове в этом тексте.
;(function () {
	const incomeInput = document.querySelector('.most-long .income');
	const resultNode = document.querySelector('.most-long span');
	incomeInput.addEventListener('input', function (ev) {
		const value = this.value.trim();
		if (!value) {
			resultNode.innerHTML = 'Слов нет';
			return;
		}
		const arr = value.split(/\s+/);
		const maxLength = arr.reduce((previous, current) => {
			return Math.max(previous, current.length);
		}, 0);
		resultNode.innerHTML = maxLength;
	});
})()

//  Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
;(function () {
	const incomeInput = document.querySelector('.date-convert .income');
	incomeInput.addEventListener('blur', function () {
		this.value = this.value.split('.').reverse().join('-');
	});
})()

//  Дан инпут. В него вводится год рождения пользователя. По нажатию на кнопку выведите в абзац ниже сколько пользователю лет.
;(function (moment) {
	const birthInput = document.querySelector('.birth input');
	const birthButton = document.querySelector('.birth button');
	const birthResult = document.querySelector('.birth .word');
	birthButton.addEventListener('click', ev => {
		ev.preventDefault();
		const birth = moment(birthInput.value);
		if (!birth.isValid()) {
			birthResult.innerHTML = 'Что-то не то Вы ввели';
			return;
		}
		const now = moment();
		const diffDuration = moment.duration(now.diff(birth));
		const yearsNumber = diffDuration.years();
		birthResult.innerHTML = yearsNumber ? `Тебе полных лет: ${yearsNumber}` : 'Ты еще только в планах';
	});
})(moment)

//  Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
;(function () {
	const input = document.querySelector('.day-of-week input');
	const result = document.querySelector('.day-of-week .word');
	const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	input.addEventListener('blur', function () {
		const dayIndex = new Date(this.value).getDay();
		result.innerHTML = days[dayIndex] ? days[dayIndex] : 'неправильна дата';
	});
})()

//  Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).

;(function () {
	const palInput = document.querySelector('.palindrome input');
	const palButton = document.querySelector('.palindrome button');
	const palResult = document.querySelector('.palindrome .result');
	palButton.addEventListener('click', ev => {
		ev.preventDefault();
		const income = palInput.value.split(/\s+/).join('');
		const incomeReverse = [...income].reverse().join('');
		palResult.innerHTML = income === incomeReverse ? 'Все ОК' : 'Неа';
	});
})()

//  Дан инпут. В него вводится число. Проверьте по вводу, что это число содержит внутри себя цифру 3.
;(function () {
	const checkInput = document.querySelector('.check input');
	const checkResult = document.querySelector('.check .result');
	checkInput.addEventListener('input', function () {
		const income = this.value;
		if (income.indexOf('3') !== -1) {
			checkResult.innerHTML = 'А теперь есть';
			return;
		}
		if (checkResult.innerHTML === 'А теперь есть') {
			checkResult.innerHTML = 'Пока нет';
		}
	});
})()

//  Даны N абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
;(function () {
	const paragraphs = document.querySelectorAll('.add-to-end p');
	const button = document.querySelector('.add-to-end button');
	function addIndex() {
		for (let index = 0; index < paragraphs.length; index++) {
			const element = paragraphs[index];
			const text = document.createTextNode(` -${index + 1}-`);
			element.appendChild(text);
		}
		button.removeEventListener('click', addIndex);
	}
	button.addEventListener('click', addIndex);
})()

//  Даны N абзацев с числами. По нажатию на кнопку выведите эти числа в инпут через запятую в порядке возрастания.
;(function () {
	const paragraphs = document.querySelectorAll('.sort-num p');
	const button = document.querySelector('.sort-num button');
	const input = document.querySelector('.sort-num input');
	button.addEventListener('click', ev => {
		const arr = [];
		for (let index = 0; index < paragraphs.length; index++) {
			const num = parseFloat(paragraphs[index].textContent);
			arr.push(num);
		}
		arr.sort((a, b) => a > b);
		input.value = arr;
	});
})()

//  Даны ссылки. По загрузке страницы добавьте в перед каждой ссылки ее href в круглых скобках.
;(function () {
	const links = Array.from(document.querySelectorAll('.links a'));
	window.addEventListener('load', ev => {
		links.forEach(item => {
			const text = document.createTextNode(`(${item.href}) - `);
			item.insertBefore(text, item.firstChild);
		});
	});
})()

//  Даны ссылки. По загрузке страницы, если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
;(function () {
	const outerLinks = Array.from(document.querySelectorAll('.links-types a[href^="https"]'));
	console.log(outerLinks);
	window.addEventListener('load', ev => {
		outerLinks.forEach(item => {
			item.innerHTML += ' &rarr;';
		});
	});
})()

//  Даны N абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
;(function (utils) {
	const div = document.querySelector('.square');
	div.addEventListener('click', ev => {
		const target = ev.target;
		if (target.tagName === 'SPAN') {
			const value = parseFloat(target.innerHTML);
			if (utils.isNumeric(value)) {
				target.innerHTML = Math.pow(value, 2);
			}
		}
	});
})(common);

//  Даны картинки. По нажатию на любую картинку увеличьте ее в 2 раза.
;(function () {
	const div = document.querySelector('.images');
	div.addEventListener('click', ev => {
		const target = ev.target;
		if (target.tagName === 'IMG') {
			const {width, height} = getComputedStyle(target);
			const parsedWidth = parseInt(width, 10);
			const parsedHeight = parseInt(height, 10);
			target.style.width = parsedWidth * 2 + 'px';
			target.style.height = parsedHeight * 2 + 'px';
			target.src = `https://placeimg.com/${parsedWidth * 2}/${parsedHeight * 2}/animals`;
		}
	});
})()

//  Даны картинки. По первому нажатию на любую картинку увеличьте ее в 2 раза. По второму нажатию - уменьшите обратно.
;(function () {
	const div = document.querySelector('.toggle-images');
	div.addEventListener('click', ev => {
		const target = ev.target;
		if (target.tagName === 'IMG' && target.dataset.size === 'double') {
			changeSize(target, 0.5);
			target.dataset.size = '';
		}else if (target.tagName === 'IMG') {
			changeSize(target, 2);
			target.dataset.size = 'double';
		}
	});
	function changeSize (target, factor) {
		const {width, height} = getComputedStyle(target);
		const newWidth = parseInt(width, 10) * factor;
		const newHeight = parseInt(height, 10) * factor;
		target.style.width = newWidth + 'px';
		target.style.height = newHeight + 'px';
		target.src = `https://placeimg.com/${newWidth}/${newHeight}/animals`;
	}
})()

//  Даны N картинок размера 30px. По нажатию на картинку под ними эта картинка появляется размером в 50px.
;(function () {
	const container = document.querySelector('.showcase');
	const bigImage = container.querySelector('.big-image');
	container.addEventListener('click', ev => {
		const target = ev.target;
		if (target.closest('.small-image')) {
			bigImage.src = target.src;
		}
	});
})()

//  Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
;(function () {
	const container = document.querySelector('.plus-minus');
	const input = container.querySelector('input');
	container.addEventListener('click', ev => {
		const target = ev.target;
		if (target.tagName === 'BUTTON') {
			const newValue = parseInt(target.dataset.plus) + parseInt(input.value, 10);
			if (newValue >= 0) input.value = newValue;
		}
	})
})()
