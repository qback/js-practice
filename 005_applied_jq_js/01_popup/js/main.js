$(function () {
  const $buttonsContainer = $('.buttons-container');
  const $popup = $('.popup');
  const $closeButton = $('.close-btn');
  const $overlay = $('.overlay');
  const $fruitName = $('.fruit-name');

  $buttonsContainer.on('click', 'button[data-popup]', function () {
    const newText = $(this).data('fruit');
    $fruitName.text(newText);
    $popup.addClass('popup_active');
    $overlay.show();
  });

  $closeButton.on('click', function () {
    $popup.removeClass('popup_active');
    $overlay.hide();
  });
});
