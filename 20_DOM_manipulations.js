// Работа с классами
// Для решения задач данного блока вам понадобятся следующие свойства: classList.
//  Дан элемент #test. Добавьте ему класс.
//  Дан элемент #test. Удалите у него класс.
//  Дан элемент #test. Проверьте наличие у него класса.
//  Дан элемент #test. Добавьте ему класс, если его нет и удалите - если есть.
//  Дан элемент #test. Узнайте количество его классов.
//  Дан элемент #test. Выведите последовательно алертом его классы.
(function () {
	const test = document.getElementById('test');
	const add = document.querySelector('.add');
	const remove = document.querySelector('.remove');
	const check = document.querySelector('.check');
	const toggle = document.querySelector('.toggle');
	const amount = document.querySelector('.amount');
	const alertClass = document.querySelector('.alertClass');

	add.addEventListener('click', function () {
		test.classList.add('alert-success');
	});
	remove.addEventListener('click', ev => {
		test.classList.remove('alert-success');
	});
	check.addEventListener('click', ev => {
		console.log(test.classList.contains('alert-success')); 
	});
	toggle.addEventListener('click', ev => {
		test.classList.toggle('alert-success'); 
	});
	amount.addEventListener('click', ev => {
		console.log(test.className.split(' ').length);
	});
	alertClass.addEventListener('click', ev => {
		const arrClasses = test.className.split(' ');
		arrClasses.forEach((item) => {
			alert(item);
		})
	});
})()

// Работа с CSS
// Для решения задач данного блока вам понадобятся следующие свойства: cssText.
//  Дан элемент #test. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.

;(function () {
	const div = document.querySelector('.default');
	const btn = document.querySelector('.default + .btn');

	function addInlineStyle () {
		div.style.cssText = `
			background-color: red;
			width: 300px;
			height: 30px;
			border: 1px solid blue
		`;
		console.log(div);
	}
	btn.addEventListener('click', addInlineStyle);
})()

// Свойство tagName
// Для решения задач данного блока вам понадобятся следующие свойства: tagName.
//  Дан элемент #test. По клику на него выведите название его тега.
//  Дан элемент #test. По клику на него выведите название его тега в нижнем регистре.
;(function () {
	const block = document.querySelector('.tagName');
	block.addEventListener('click', function () {
		this.textContent = this.tagName.toLowerCase();
	});
})()
//  Даны элементы с классом. Добавьте каждому элементу в конец название его тега в нижнем регистре.
;(function () {
	const list = document.querySelector('.tag');
	list.addEventListener('click', ev => {
		const children = list.children;
		for (let index = 0; index < children.length; index++) {
			let element = children[index];
			element.textContent += ` ${element.tagName.toLowerCase()}` ;
		}
	});
})()

// Вставка элементов
// Для решения задач данного блока вам понадобятся следующие методы: createElement, appendChild, insertBefore, insertAdjacentHTML.
//  Дан ol. Вставьте ему в конец li с текстом 'пункт'.
;(function () {
	const list = document.querySelector('.ordered ol');
	const li = document.createElement('li');
	li.classList.add('list-group-item');
	li.textContent = 'пункт';
	list.appendChild(li);
})()

//  Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
;(function () {
	const emptyUl = document.querySelector('.empty');
	const arr = [1, 2, 3];
	arr.forEach((item) => {
		const li = document.createElement('li');
		li.className = 'list-group-item';
		li.innerHTML = `${item}`;
		emptyUl.appendChild(li);
	});
})()

//  Дан массив. Создайте div через createElement, затем вставьте каждый элемент этого массива в отдельный p внутри этого div, затем вставьте этот div в конец body.
;(function () {
	const div = document.createElement('div');
	const arr = [1, 2, 3];
	arr.forEach((item) => {
		div.insertAdjacentHTML('beforeend', `<p class="bg-danger text-white text-center">${item}</p>`);
	});
	document.body.appendChild(div);
})()

//  Дан элемент #test. Вставьте перед ним абзац с красным текстом '!!!' так, чтобы к этому абзацу было привязано следующее событие: по клику на него он должен покраситься в зеленый цвет.
;(function () {
	const div = document.querySelector('.chameleon');
	div.insertAdjacentHTML('beforebegin', `<p class="buzz text-center text-danger" role="button">!!!</p>`);
	const buzz = document.querySelector('.buzz');
	buzz.addEventListener('click', ev => {
		div.classList.remove('bg-inverse');
		div.classList.add('bg-success');
	});
})()

// Потомки
// Для решения задач данного блока вам понадобятся следующие свойства: children, firstElementChild, lastElementChild.
//  Дан элемент #test. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
//  Дан элемент #test. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
//  Дан элемент #test. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
;(function () {
	const list = document.querySelector('.color');
	const children = list.children;
	list.firstElementChild.style.color = 'red';
	list.lastElementChild.style.color = 'red';
	for (let index = 0; index < children.length; index++) {
		const element = children[index];
		element.textContent += ' !';
	}
})()

// Соседи
// Для решения задач данного блока вам понадобятся следующие свойства: previousElementSibling, nextElementSibling.
//  Дан элемент #test. Найдите его соседа сверху и добавьте ему в конец текст '!'.
//  Дан элемент #test. Найдите его соседа снизу и добавьте ему в конец текст '!'.
//  Дан элемент #test. Найдите его соседа снизу его соседа снизу и добавьте ему в конец текст '!'.
;(function () {
	const elem = document.querySelector('.neighbors li:nth-child(2)');
	elem.previousElementSibling.textContent += ' !';
	elem.nextElementSibling.textContent += ' !';
	elem.nextElementSibling.nextElementSibling.textContent += ' !';
})()

// Родители
// Для решения задач данного блока вам понадобятся следующие свойства: parentElement, parentNode.
//  Дан элемент #test. Найдите его родителя и покрасьте его в розовый цвет.
//  Дан элемент #test. Найдите родителя его родителя и покрасьте его в голубой цвет.
//  Дан элемент #test. Найдите его родителя, найдите всех потомков этого родителя и поставьте им в конец текст '!'.
//  Дан элемент #test. Найдите его родителя, найдите соседа сверху и соседа снизу для этого родителя и поставьте им в конец текст '!'.
;(function () {
	const son = document.querySelector('.family .son');
	son.parentElement.style.backgroundColor = 'pink';
	son.parentElement.parentElement.style.backgroundColor = 'lightblue';
	const children = son.parentElement.children;
	for (let index = 0; index < children.length; index++) {
		let element = children[index];
		element.textContent += ' !';
	}
	son.parentElement.nextElementSibling.textContent += ' !';
})()

// Удаление и клонирование
// Для решения задач данного блока вам понадобятся следующие свойства: removeChild.
//  Дан элемент #parent, внутри него дан элемент #test. Дана кнопка. По нажатию на эту кнопку удалите элемент #test.
;(function () {
	const victim = document.querySelector('.victim');
	const button = document.querySelector('.remove button');
	function killVictim () {
		victim.classList.add('text-white', 'bg-danger');
		setTimeout(() => {
			victim.parentElement.removeChild(victim);
		}, 1000)
		this.classList.remove('btn-primary');
		this.classList.add('btn-danger');
		this.removeEventListener('click', killVictim);
	}
	button.addEventListener('click', killVictim);
})()

//  Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
;(function () {
	const ol = document.querySelector('.last ol');
	const btn = document.querySelector('.last button');
	btn.addEventListener('click', ev => {
		const lastChild = ol.lastElementChild;
		if (lastChild) {
			ol.removeChild(lastChild);
		}
	});
})()

//  Дан элемент. Сделайте так, чтобы по нажатию по нему элемент удалялся.
;(function () {
	const btn = document.querySelector('.kill');
	btn.addEventListener('click', function () {
		this.parentElement.removeChild(this);
	});
})()

// Удаление и клонирование
// Для решения задач данного блока вам понадобятся следующие свойства: cloneNode.
//  Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
;(function () {
	const btn = document.querySelector('.clone .btn');
	const input = document.querySelector('.clone .form-control');
	btn.addEventListener('click', ev => {
		ev.preventDefault();
		const clone = input.cloneNode();
		btn.parentElement.insertBefore(clone, btn);
	});
})()

// Практика
//  Дан элемент #test. Найдите первого и последнего потомков этого элемента и поменяйте их тексты местами.
//   Сделайте массив всех  родителей среднего до тега html.
//  Дан элемент #test. Среди всех его родителей найдите ближайшего родителя с классом 'first-last' и поставьте ему в конец текст '!!!'.
;(function () {
	const list = document.querySelector('.first-last ul');
	const btn = document.querySelector('.first-last .change');
	const btnParents = document.querySelector('.first-last .parents');
	const btnClosest = document.querySelector('.first-last .closest');
	btn.addEventListener('click', ev => {
		const firstElementChild = list.firstElementChild;
		const lastElementChild = list.lastElementChild;
		list.insertBefore(lastElementChild, firstElementChild);
		list.appendChild(firstElementChild);
	});
	btnParents.addEventListener('click', ev => {
		let elem = list.children[1];
		const parents = [];
		while (elem.parentElement !== document.documentElement) {
			parents.push(elem.parentElement);
			elem = elem.parentElement;
		}
	});
	btnClosest.addEventListener('click', function () {
		const closest = this.closest('.first-last');
		const text = document.createTextNode('!!!');
		closest.appendChild(text);
	})
})()



//  Дан элемент инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
//  Даны инпуты. Рядом с каждым из них находится кнопочка "clone". По нажатию на эту кнопку под нашим инпутом должен появится клон этого инпута.
;(function () {
	const inputGroup = document.querySelector('.factory .input-group');
	const input = document.querySelector('.factory input');
	const addBtn = document.querySelector('.factory .add');
	const cloneBtn = document.querySelector('.factory .clone');
	let counter = 0;
	addBtn.addEventListener('click', ev => {
		ev.preventDefault();
		inputGroup.insertAdjacentHTML('afterend', `<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="${++counter}">`);
	});
	cloneBtn.addEventListener('click', ev => {
		ev.preventDefault();
		const clone = input.cloneNode();
		inputGroup.parentNode.insertBefore(clone, inputGroup.nextSibling);
	});
})()

//  Даны инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.
;(function () {
	const familyBlock = document.querySelector('form.family');
	const inputGroup = familyBlock.querySelector('.input-group');
	const input = familyBlock.querySelector('.family input');
	input.addEventListener('blur', function () {
		const descBLock = familyBlock.querySelector('.descendants');
		const str = this.value;
		if (descBLock) {
			familyBlock.removeChild(descBLock);
		}
		if (str) {
			const arr = str.split('');
			const node = document.createElement('div');
			node.classList.add('input-group', 'descendants');
			arr.forEach((item) => {
				node.insertAdjacentHTML('beforeend', `<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" value=${item}>`)
			});
			familyBlock.appendChild(node);
		}
	});
})()
