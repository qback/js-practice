import $ from 'jquery';

// Задачи на оборачивание элементов (wrap)

//  Оберните каждый <h2> в <div>.
$('h2').wrap('div');

//  Оберните каждый <h2> в <div> с классом test.
$('h2').wrap('<div class="test"></div>');

//  Оберните каждый <h2> внутри в <i>.
$('h2').wrapInner('i');

//  Оберните все <h2> в один <i>.
$('h2').wrapAll('i');

//  Найдите абзацы <p>, обернутые дивами <div>, и удалите эти дивы.
$('div > p').unwrap();

// Задачи на вставку элементов

//  Перед каждым <h2> вставьте '<p>!</p>'.
$('h2').before('<p>!</p>');

//  После каждого <h2> вставьте '<p>?</p>'.
$('h2').after('<p>?</p>');

//  Сделайте первое и второе задание одновременно (цепочкой).
$('h2').before('<p>!</p>').after('<p>?</p>');

//  Внутри каждого <h2> в начале вставьте '!'.
$('h2').prepend('!');

//  Внутри каждого <h2> в конце вставьте '?'.
$('h2').append('?');

//  Сделайте предыдущие два задания одновременно + окрасьте все <h2> в красный цвет.
$('h2').prepend('!').append('?').css('color', 'red');

// Задачи на замену элементов

//  каждый <h2> замените на его содержимое.
$('h2').replaceWith($('h2').text());

//  каждый <h2> замените на его содержимое, стоящее в абзаце.
$('h2').replaceWith($('h2').text().wrap('p'));

// Задачи на удаление элементов

//  Удалите все <h2>.
$('h2').remove();

//  Сделайте все <h2> пустыми.
$('h2').empty();

// Задачи на атрибуты

//  Получите атрибут href ссылки из класса www.
$('.www a').attr('href');

//  Получите атрибут href первой ссылки.
$('a:first').attr('href');

//  Получите атрибут href всех ссылок и последовательно выведите алертом.
$('a').each(() => {
	alert($(this).attr('href'));
});

//  Замените href каждой ссылки на '!'.
$('a').attr('href', '!');

//  Добавьте каждой ссылке атрибут target='_blank'.
$('a').attr('target', '_blank');

//  Замените содержимое каждой ссылки (анкоры) на их href.
$('a').each(() => {
	const $this = $(this);
	$this.html($this.attr('href'));
});

//  Вставьте после содержимого каждой ссылки их href в круглых скобках.
$('a').each(() => {
	const $this = $(this);
	$this.append('(' + $this.attr('href') + ')');
});

//  Вставьте в атрибут title каждой ссылки ее анкор.
$('a').each(() => {
	const $this = $(this);
	$this.attr('title', $this.attr('href'));
});

// Задачи на работу с классами

//  Добавьте всем li класс test.
$('li').addClass('test');

//  Удалите у li класс www.
$('li').removeClass('www');

//  Добавьте всем li класс www, если его нет, и удалите, если есть.
$('li').toggleClass('www');

//  Проверьте, что хотя бы одна из ссылок имеет класс www.
$('li').hasClass('www');

// Задачи на атрибуты форм

//  Выведите value инпута с классом in.
$('li.in').val();

//  Выведите содержимое textarea с классом text.
$('textarea.text').val();

//  Выведите последовательно value каждого инпута.
$(':input').each(() => {
	console.log($(this).val());
});

//  Установите value всех инпутов в '!'.
$(':input').val('!');

//  В value всех инпутов с классом number находятся числа. Сделайте так, чтобы в них стали квадраты этих чисел.
$('number:input').each(() => {
	const $elem = $(this);
	const valNum = parseInt($elem.val(), 10);
	$elem.val($.isNumeric(valNum) ? Math.pow(valNum, 2) : '');
});

//  Установите все отмеченные чекбоксы в неотмеченные.
$(':checkbox:checked').prop('checked', 'false');

//  Установите все неотмеченные чекбоксы в отмеченные.
$(':checkbox:not(:checked)').prop('checked', 'true');

//  Установите все отмеченные чекбоксы в неотмеченные и наоборот.
$(':checkbox').each(() => {
	const $this = $(this);
	$this.prop('checked', !$this.prop('checked'));
});

//  Сделайте неотмеченным последний чекбокс на странице.
$(':checkbox:last').prop('checked', false);

// Задачи на размеры
// Для решения задач данного блока вам понадобятся следующие методы: width, innerWidth, outerWidth.
//  Узнайте ширину и высоту первого, второго и третьего дивов <div> (по очереди) непосредственно внутри #wrapper без учета padding и границы.
$('#wrapper div:lt(3)').each(() => {
	const $this = $(this);
	console.log($this.width(), $this.height());
});

//  То же самое с учетом padding.
$('#wrapper div:lt(3)').each(() => {
	const $this = $(this);
	console.log($this.innerWidth(), $this.innerHeight());
});

//  То же самое с учетом padding и границы.
$('#wrapper div:lt(3)').each(() => {
	const $this = $(this);
	console.log($this.outerWidth(), $this.outerHeight());
});

//  То же самое с учетом padding, границы и margin.
$('#wrapper div:lt(3)').each(() => {
	const $this = $(this);
	console.log($this.outerWidth(true), $this.outerHeight(true));
});
