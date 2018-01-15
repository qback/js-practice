$(function () {
	const $links = $('.links');
	const $closeBtn = $('#close');
	const $openBtn = $('#open');
	const $menu = $('#menu');

	$openBtn.on('click', () => {
		$menu.addClass('active-menu');
	});

	$closeBtn.on('click', () => {
		$menu.removeClass('active-menu');
	})

	$links.on('click', 'a', function (ev) {
		ev.preventDefault();

		const id = $(this).attr('href');
		const offset = $(id).offset().top;

		$('html, body').animate({
			scrollTop: offset
		}, 300);

	});



});