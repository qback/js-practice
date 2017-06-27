// На elem.onclick
//  Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.
const showSrc = (function () {
	return {
		show(elem) {
			alert(elem.src);
		}
	};
})()

// На addEventListener, removeEventListener
//  Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.
//  Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
;(function () {
	const links = Array.from(document.querySelectorAll('.links a'));

	links.forEach((item) => {
		item.addEventListener('mouseover', function () {this.title = this.textContent;});
	});
})()

//  Дополнить предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста.
;(function () {
	const links = Array.from(document.querySelectorAll('.links2 a'));
	function addHref () {
		this.textContent += ` (${this.getAttribute('href')})`;
		this.removeEventListener('mouseover', addHref);
	}

	links.forEach((item) => {
		item.addEventListener('mouseover', addHref);
	});
})()

//  Привяжите всем инпутам событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test".
//  Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции.
;(function () {
	const inputs = Array.from(document.querySelectorAll('.inputs input'));
	const test = document.getElementById('test');
	function showInputContent () {
		test.textContent = this.value ? this.value : 'input пуст';
	}
	function alertContent () {
		alert(this.value ? this.value : 'Контента нет');
		this.removeEventListener('click', alertContent);
	}

	inputs.forEach((item) => {
		item.addEventListener('blur', showInputContent);
		item.addEventListener('click', alertContent);
	});
})()

//  Даны абзацы с числами. По первому клику на абзац в нем должен появится квадрат числа, которое он содержит. По второму клику - куб. По третьему клику - четвертая степень.
;(function () {
	const num = document.querySelector('.multiple .num');
	const badge = document.querySelector('.multiple .badge');
	const elem = parseInt(num.textContent, 10);
	let power = 2;
	badge.addEventListener('click', function () {
		num.textContent = Math.pow(elem, power);
		this.textContent = `x${power}`;
		power++;
	});
})()

//  Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.
;(function () {
	const inputs = Array.from(document.querySelectorAll('.validate-length input'));
	inputs.forEach((item) => {
		item.addEventListener('blur', function () {
			const length = parseInt(this.dataset.length, 10);
			if (this.value.length < length) {
				this.style.boxShadow = '0 0 5px 0 red';
			} else {
				this.style.boxShadow = '0 0 5px 0 green';
			}
		});
	})
})()


//  Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener.
;(function () {
	const divs = Array.from(document.querySelectorAll('.chameleon .click'));
	function doBgRed () {
		this.style.backgroundColor = 'red';
		this.removeEventListener('click', doBgRed);
		this.addEventListener('click', doBgGreen);
	}
	function doBgGreen () {
		this.style.backgroundColor = 'green';
		this.removeEventListener('click', doBgGreen);
		this.addEventListener('click', doBgRed);
	}
	divs.forEach((item) => {
		item.addEventListener('click', doBgGreen);
	});
})()
