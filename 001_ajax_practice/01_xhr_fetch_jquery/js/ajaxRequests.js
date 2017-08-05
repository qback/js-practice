'use strict';

// классика
(function() {
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,England';
	const apiKey = '79ca21ca29a927035519119fa5c9c2ac';
	let httpRequest;
	makeRequest();
	// создаем и отправляем запрос
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&appid=' + apiKey + '&units=metric');
		httpRequest.send();
	}
	// обрабатываем запрос
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				updateUiSuccess(httpRequest.responseText);
			} else {
				updateUiError();
			}
		}
	}
	// обрабатываем успешный запрос
	function updateUiSuccess(responseText) {
		const weatherBlock = document.getElementById('weather');
		const response = JSON.parse(responseText);
		const condition = response.weather[0].main;
		const degCelsius = Math.floor(response.main.temp);
		weatherBlock.innerHTML = `<p>${degCelsius} &#176;C</p>` + `<p>${condition}</p>`;
	}
	// обрабатываем ошибку
	function updateUiError() {
		const weatherBlock = document.getElementById('weather');
		weatherBlock.classList.add('hidden');
	}
})();

// fetch API
(function() {
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,England';
	const apiKey = '79ca21ca29a927035519119fa5c9c2ac';

	fetch(url + '&appid=' + apiKey + '&units=metric')
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.json();
		})
		.then(responseObj => {
			updateUiSuccess(responseObj);
		})
		.catch(error => {
			updateUiError();
		});

	// обрабатываем успешный запрос
	function updateUiSuccess(response) {
		const weatherBlock = document.getElementById('weather1');
		const condition = response.weather[0].main;
		const degCelsius = Math.floor(response.main.temp);
		weatherBlock.innerHTML = `<p>${degCelsius} &#176;C</p>` + `<p>${condition}</p>`;
	}
	// обрабатываем ошибку
	function updateUiError() {
		const weatherBlock = document.getElementById('weather1');
		weatherBlock.classList.add('hidden');
	}
})();

// jQuery usage
(function($) {
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,England';
	const apiKey = '79ca21ca29a927035519119fa5c9c2ac';

	$.get(url + '&appid=' + apiKey + '&units=metric')
		.done(response => {
			// возврашает сразу объект
			updateUiSuccess(response);
		})
		.fail(error => {
			updateUiError();
		});

	// обрабатываем успешный запрос
	function updateUiSuccess(response) {
		const $weatherBlock = $('#weather2');
		const condition = response.weather[0].main;
		const degCelsius = Math.floor(response.main.temp);
		$weatherBlock.html(`<p>${degCelsius} &#176;C</p>` + `<p>${condition}</p>`);
	}
	// обрабатываем ошибку
	function updateUiError() {
		const $weatherBlock = $('#weather2');
		$weatherBlock.addClass('hidden');
	}
})(jQuery);
