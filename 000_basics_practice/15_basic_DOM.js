'use strict';
(function() {
	const input1 = document.getElementById('input1');
	const button1 = document.getElementById('button1');
	button1.onclick = function() {
		const value = input1.value !== '' ? input1.value : 'Ничего нет';
		console.log(value);
	};
})();

(function() {
	const input2 = document.getElementById('input2');
	const button2 = document.getElementById('button2');
	button2.onclick = function() {
		input2.value = 'Новый текст';
	};
})();

(function() {
	const img3 = document.getElementById('img3');
	const button3 = document.getElementById('button3');
	const startImgSrc = img3.src;
	const altImgSrc = 'http://theory.phphtml.net/exercises/javascript/dom/osnovy-raboty-s-dom-v-javascript/2/3/2.jpg';
	button3.onclick = function() {
		img3.src = img3.src === startImgSrc ? altImgSrc : startImgSrc;
	};
})();

(function() {
	const input4 = document.getElementById('input4');
	const input5 = document.getElementById('input5');
	const input6 = document.getElementById('input6');
	const input7 = document.getElementById('input7');

	input4.onclick = function() {
		console.log(this.value);
	};
	input5.onfocus = function() {
		this.value = 'Значение то изменилось';
	};
	input6.onfocus = function() {
		this.value = 'Вход';
	};
	input6.onblur = function() {
		this.value = 'Выход';
	};
	input7.onclick = function() {
		this.disabled = true;
	};
})();

(function() {
	const img4 = document.querySelector('#figure1 img');
	const startImgSrc = img4.src;
	const altImgSrc = 'http://theory.phphtml.net/exercises/javascript/dom/osnovy-raboty-s-dom-v-javascript/2/3/2.jpg';
	img4.onmouseenter = function() {
		this.src = altImgSrc;
	};
	img4.onmouseout = function() {
		this.src = startImgSrc;
	};
})();

(function() {
	const input8 = document.getElementById('input8');
	const button8 = input8.nextElementSibling;
	button8.onclick = function() {
		input8.style.cssText = 'width: 500px; color: red';
		input8.value = `Ширина: ${getComputedStyle(input8).width}`;
	};
})();

(function() {
	const input = document.getElementById('input9');
	let counter = 0;
	input.onclick = function(e) {
		e.preventDefault();
		this.value = `Нажато ${++counter} раз`;
	};
})();

(function() {
	const input = document.getElementById('experimental');
	const reset = document.getElementById('exp1');
	const hide = document.getElementById('exp2');
	const float = document.getElementById('exp3');
	const reveal = document.getElementById('exp4');
	const disable = document.getElementById('exp5');

	reset.onclick = function() {
		const initialValue = input.getAttribute('value');
		input.value = initialValue;
		input.style = '';
	};
	hide.onclick = function() {
		input.style.display = 'none';
	};
	float.onclick = function() {
		input.style.cssFloat = 'right';
	};
	reveal.onclick = function() {
		const stylesString = input.style.cssText;
		input.value = stylesString;
	};
	disable.onclick = function() {
		input.disabled = !input.disabled;
	};
})();
