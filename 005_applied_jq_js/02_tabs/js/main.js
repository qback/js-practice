$(function () {
	$tabs = $('a[data-toggle=tab]');
	$tabPanes = $('.tab-pane');

	$tabs.on('click', function (ev) {
		ev.preventDefault();
		const id = $(this).attr('href');
		$('.active').removeClass('active');
		$(this).parent().addClass('active');
		$(id).addClass('active');

	});
});