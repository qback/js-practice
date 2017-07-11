'use strict';
;(function () {
	const btn = document.getElementById('btn1');
	const textNodes = document.getElementsByClassName('text-example');

	btn.onclick = function () {
		textNodes[0].innerHTML = 'Ку-ку! А я <strong>жирный!</strong>';
		textNodes[1].outerHTML = '<h4>Абзац превратился в h4!</h4>';
		//количество нод с классом 'text-example' обновляется автоматически поэтому снова обращаемся к индексу 1
		textNodes[1].outerHTML = '<h4>' + textNodes[1].innerHTML + '</h4>';
		this.disabled = true;
	};
})()

;(function () {
	const btn = document.getElementById('showResult');
	const el1 = document.getElementById('el1');
	const el2 = document.getElementById('el2');
	const resultSpan = document.getElementById('result');

	function sum(a = 0, b = 0) {
		return Number(a) + Number(b);
	}

	btn.onclick = function () {
		const result = sum(el1.value, el2.value);
		resultSpan.innerHTML = result;
	};
})()

;(function () {
	const tagsBlock = document.querySelector('.tags');
	const btn = tagsBlock.getElementsByTagName('button')[0];
	const textNodes = tagsBlock.getElementsByTagName('p');

	btn.onclick = function () {
		for (let index = 0; index < textNodes.length; index++) {
			textNodes[index].innerHTML = 'Опаньки';
		}
	}

})()

;(function () {
	const classesBlock = document.querySelector('.classes');
	const btnClasses = classesBlock.getElementsByTagName('button')[0];
	const btnQuery = classesBlock.getElementsByTagName('button')[1];

	btnClasses.onclick = function () {
		const textNodes = classesBlock.getElementsByClassName('www');
		for (let index = 0; index < textNodes.length; index++) {
			textNodes[index].innerHTML = 'www';
		}
	};

	btnQuery.onclick = function () {
		const textNodes = classesBlock.querySelectorAll('p.www');
		for (let index = 0; index < textNodes.length; index++) {
			textNodes[index].innerHTML = 'p.www';
		}
	};

})()

;(function () {
	const attributesBlock = document.querySelector('.attributes');
	const example = attributesBlock.querySelector('p');
	const btnGet = attributesBlock.querySelector('.get');
	const btnSet = attributesBlock.querySelector('.set');
	const btnRemove = attributesBlock.querySelector('.remove');
	const btnHas = attributesBlock.querySelector('.has');

	btnGet.onclick = function () {
		alert(example.getAttribute('class'));
	};
	btnSet.onclick = function () {
		example.setAttribute('class', 'alert alert-info');
	};
	btnRemove.onclick = function () {
		example.removeAttribute('class');
	};
	btnHas.onclick = function () {
		alert(example.hasAttribute('class'));
	};
})()


;(function () {
	const bindingBlock = document.querySelector('.binding');
	const input = bindingBlock.querySelector('input');
	const span = bindingBlock.querySelector('span');

	input.oninput = function () {
		span.innerHTML = input.value;
	};
})()

;(function () {
	const variousBlock = document.querySelector('.various');
	const links = variousBlock.getElementsByClassName('help-block');
	const paragraphs = variousBlock.getElementsByTagName('p');
	const btn = variousBlock.querySelector('button');

	btn.onclick = function () {
		links[0].innerHTML += ` ${links[0].href}`;
		links[1].innerHTML += ` ${links[1].getAttribute('href')}`;
		for (let index = 0; index < paragraphs.length; index++) {
			paragraphs[index].innerHTML += ` №${index + 1}`;
		}
	};
})();
