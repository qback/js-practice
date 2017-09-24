// На величину границы
// Для решения задач данного блока вам понадобятся следующие методы: clientTop, clientLeft.
//  Дан элемент #test с границами. По нажатию на кнопку выведите толщину его верхней границы.
//  Дан элемент #test с границами. По нажатию на кнопку выведите толщину его левой границы.
// На полный размер элемента
// Для решения задач данного блока вам понадобятся следующие методы: offsetWidth, offsetHeight.
//  Дан элемент #test с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding.
//  Дан элемент #test с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding.
// На размер элемента без границ, но с padding
// Для решения задач данного блока вам понадобятся следующие методы: clientWidth, clientHeight.
//  Дан элемент #test с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding.
//  Дан элемент #test с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding.
(function() {
	const elem = document.querySelector('.test');
	const block = document.querySelector('.metrics');
	const styles = getComputedStyle(elem);
	block.addEventListener('click', ev => {
		const target = ev.target;
		if (target.matches('button')) {
			const metric = target.dataset.prop;
			alert(elem[metric] + 'px');
		}
	});
	// Работа с getComputedStyle
	// Для решения задач данного блока вам понадобятся следующие функции: getComputedStyle.
	//  Дан элемент #test. Получите его ширину и высоту, без учета границы и padding.
	// Прокрутка элемента
	// Для решения задач данного блока вам понадобятся следующие методы: scrollTop, scrollLeft.
	//  Дан элемент #test с вертикальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен сверху.
	const btnWidthHeight = document.querySelector('.metrics2 .widthHeight');
	const btnScrollTop = document.querySelector('.metrics2 .scrollTop');
	btnWidthHeight.addEventListener('click', ev => {
		const width = elem.clientWidth - parseInt(styles.paddingLeft, 10) - parseInt(styles.paddingRight, 10);
		const height = elem.clientHeight - parseInt(styles.paddingTop, 10) - parseInt(styles.paddingBottom, 10);
		alert(`Ширина: ${width}px, высота: ${height}px`);
	});
	btnScrollTop.addEventListener('click', ev => {
		alert(elem.scrollTop + 'px');
	});
	//  Дан элемент #test с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px сверху.
	//  Дан элемент #test с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его на 100px вниз от текущего положения.
	const btnScrollTo = document.querySelector('.metrics2 .scrollTo');
	const btnScrollPlus = document.querySelector('.metrics2 .scrollPlus');
	btnScrollTo.addEventListener('click', ev => {
		elem.scrollTop = 100;
	});
	btnScrollPlus.addEventListener('click', ev => {
		elem.scrollTop += 100;
	});

	// Прокрутка элемента
	// Для решения задач данного блока вам понадобятся следующие методы: scrollWidth, scrollHeight.
	//  Дан элемент #test с вертикальной полосой прокрутки. По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки.
	//  Дан элемент #test с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.
	const btnScrollBottom = document.querySelector('.metrics2 .scrollBottom');
	const btnScrollHeight = document.querySelector('.metrics2 .scrollHeight');
	btnScrollBottom.addEventListener('click', ev => {
		elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 100;
	});
	btnScrollHeight.addEventListener('click', ev => {
		alert(elem.scrollHeight);
	});
})();
// Прокрутка страницы
// Для решения задач данного блока вам понадобятся следующие методы: pageXOffset, pageYOffset.
//  Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по вертикали.
(function() {
	const offsetBtn = document.querySelector('.offset');
	offsetBtn.addEventListener('click', ev => {
		alert(pageYOffset);
	});
})();

// Прокрутка страницы
// Для решения задач данного блока вам понадобятся следующие методы: scrollTo, scrollBy, scrollIntoView.
//  Дана страница с горизонтальной и вертикальной полосами прокрутки. По нажатию на кнопку прокрутите ее в точку 500px сверху.
//  Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите на 300px вверх от текущего положения.
(function() {
	const btn1 = document.querySelector('.btn.scrollUpTo');
	const btn2 = document.querySelector('.btn.scrollBy');
	btn1.addEventListener('click', ev => {
		console.log(ev);
		scrollTo(0, 300);
	});
	btn2.addEventListener('click', ev => {
		scrollBy(0, -300);
	});
})();

// Практика
//  По нажатию на кнопку прокрутите страницу до самого низа.
//  По нажатию на кнопку прокрутите страницу на 400px от текущего положения.
//  По нажатию на кнопку проверьте, прокручена ли страница до самого низа. Если это так - прокрутите ее в положение 100px от верхнего края.
//  Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера.
//  Дана кнопка. По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка.
(function() {
	const block = document.querySelector('.metrics3');
	block.addEventListener('click', ev => {
		const target = ev.target;
		if (target.matches('.down')) {
			scrollTo(0, document.body.clientHeight);
		} else if (target.matches('.downby400')) {
			scrollBy(0, 400);
		} else if (target.matches('.down-infinite')) {
			if (pageYOffset + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
				scrollTo(0, 100);
			}
		} else if (target.matches('.height')) {
			alert(document.documentElement.clientHeight);
		} else if (target.matches('.check-scroll')) {
			console.log(pageYOffset ? 'Прокрутка есть' : 'Прокрутки нет');
		}
	});
})();
