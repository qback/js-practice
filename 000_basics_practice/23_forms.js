//  Дана форма с id="form". В ней даны инпуты, в них числа. Дана кнопка. По нажатию на эту кнопку получите форму по ее id, затем циклом переберите все инпуты в ней и найдите сумму чисел из этих инпутов.
(function () {
	const form = document.querySelector('#form1');
	const inputs = form.getElementsByTagName('input');
	const button = form.querySelector('button');
	const result = form.querySelector('.result');
	button.addEventListener('click', ev => {
		if (inputs.length) {
			let sum = 0;
			for (let index = 0; index < inputs.length; index++) {
				const element = inputs[index];
				sum += parseFloat(element.value);
			}
			result.innerHTML = sum ? sum : 'Данные некорректны';
		}
	})
})()

//  На странице расположено несколько форм. В них есть инпуты, в инпутах числа. Дана кнопка. По нажатию на эту кнопку циклом переберите все формы на странице, затем циклом переберите все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов.
;(function () {
	const forms = Array.from(document.querySelectorAll('.forms form'));
	const button = document.querySelector('.forms button');
	const result = document.querySelector('.forms .result');
	function handleForm (form) {
		const inputs = form.getElementsByTagName('input');
		if (inputs.length) {
			let sum = 0;
			for (let index = 0; index < inputs.length; index++) {
				const element = inputs[index];
				sum += parseFloat(element.value);
			}
			return sum;
		}
		return 0;
	}
	button.addEventListener('click', ev => {
		const commonSum = forms.reduce((previous, current) => {
			return previous + handleForm(current);
		}, 0);
		result.innerHTML = commonSum;
	});
})()

// Работа с селектами
//  Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут.
;(function () {
	const select = document.querySelector('.select select');
	const input = document.querySelector('.select input');
	select.addEventListener('change', function (ev) {
		const activeIndex = this.selectedIndex;
		input.value = this.options[activeIndex].text;
	});
})()

//  Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку и в селекте становился выбранным пункт с этим номером.
;(function () {
	const select = document.querySelector('.manual-select select');
	const button = document.querySelector('.manual-select button');
	const input = document.querySelector('.manual-select input');
	function makeSelect (index) {
		select.selectedIndex = index;
	}
	function checkValue (income) {
		const inputValue = parseInt(income, 10);
		const optionsNum = select.options.length;
		return !isNaN(inputValue) && inputValue < optionsNum;
	}
	button.addEventListener('click', ev => {
		const value = input.value;
		if (checkValue(value)) {
			makeSelect(value);
		}
	});
	input.addEventListener('keyup', function (ev) {
		if (ev.keyCode === 13) {
			const value = this.value;
			if (checkValue(value)) {
				makeSelect(value);
			}
		}
	});
})()

//  Дан селект со списком стран. Сделайте так, чтобы при выборе страны рядом появлялся еще и селект со списком городов из этой страны.
;(function () {
	const countrySelect = document.querySelector('.double-select .countries');
	const citySelect = document.querySelector('.double-select .cities');
	const countries = {
		'Россия': ['Москва', 'Урюпинск', 'Бобринск'],
		'ФРГ': ['Дюссельдорф', 'Берлин'],
		'Франция': ['Париж', 'Марсель', 'Ницца', 'Лорьян']
	};
	function removeOptions(obj) {
		while (obj.options.length) {
			obj.remove(0);
		}
	}
	function createOption (income) {
		const option = document.createElement('option');
		option.value = income;
		option.innerHTML = income;
		return option;
	}
	function chooseCountry (country) {
		const citiesArr = countries[country];
		removeOptions(citySelect);
		citiesArr.forEach((item, index) => {
			const option = createOption(item);
			citySelect.options[index] = option;
		});
	}
	function initCountrySelect (obj) {
		for (let key in obj) {
			const option = createOption(key);
			countrySelect.appendChild(option);
		}
		chooseCountry(countrySelect.value);
	}
	countrySelect.addEventListener('change', function () {
		chooseCountry(this.value);
	});
	initCountrySelect(countries);
})()