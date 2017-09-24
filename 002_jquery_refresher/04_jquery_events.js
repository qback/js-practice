import $ from 'jquery';

// События через отдельные методы

// Даны абзацы. Сделайте так, чтобы по клику на каждый абзац на экран выводилось его содержимое.
$('p').click(() => {
	console.log($(this).html());
});

// Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
$('a').mouseenter(() => {
	const $this = $(this);
	$this.append($this.attr('href'));
});

// Дополнить предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста.
$('a').on('mouseenter', () => {
	const $this = $(this);
	$this.append($this.attr('href'));
	$this.off('mouseenter');
});

// Привяжите всем инпутам событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test".
$('input').on('blur', () => {
	$('#text').text($(this).val());
});

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции.
$('input').one('click', () => {
	console.log($(this).val());
});

// Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
$('p').on('click', () => {
	const $this = $(this);
	const oldValue = Number($this.text());
	const newValue = Math.pow(oldValue, 2);
	$this.text(newValue);
});

// Задачи на делегирование через on
// Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
$('ul#id1').on('click', 'li', () => {
	$(this).append('!');
});
$('ul#id1 + button').on('click', () => {
	$('ul#id1').append('<li>пункт</li>');
});

// Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу решите с помощью делегирования (то есть событие должно быть навешано на table).
$('table').on('click', 'td', () => {
	const $this = $(this);
	const newData = prompt('Add new Info', 'New info');
	if (newData !== '') {
		$this.text(newData);
	}
});
$('form').on('submit', e => {
	e.preventDefault();
	const dataFirst = $('input').eq(0).val();
	const dataSecond = $('input').eq(1).val();
	$('table').append(`<tr class="child"><td>${dataFirst}</td><td>${dataSecond}</td></tr>`);
});