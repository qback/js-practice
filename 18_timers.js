//  Создайте отсчет от 0 до бесконечности:
;(function () {
	const button = document.querySelector('#counter input');
	const counter = document.querySelector('#counter p');
	let num = 0;

	button.onclick = function () {
		this.disabled = true;
		this.classList.add('disabled');
		setInterval(() => {
			num++;
			counter.innerHTML = num;
		}, 1000);
	}
})()

//  Создайте отсчет с кнопкой остановки:
;(function () {
	// const start = document.querySelector('.start-stop .start');
	// const stop = document.querySelector('.start-stop .stop');
	const counter = document.querySelector('.start-stop p');
	const buttons = document.querySelector('.start-stop .buttons');
	let num = 0;
	let startCounter = null;
	function count () {
		num++;
		counter.innerHTML = num;
	}

	buttons.onclick = function (e) {
		const target = e.target;
		if (target.matches('.start')) {
			startCounter = setInterval(count, 1000);
			target.disabled = true;
			target.nextElementSibling.disabled = false;
		}
		if (target.matches('.stop')) {
			clearInterval(startCounter, 1000);
			target.disabled = true;
			target.previousElementSibling.disabled = false;
		}
	}

})()

//  Создайте тикающие часики:
;(function () {
	const clockContainer = document.querySelector('.clock p');
	function normalizeDigits (digits) {
		return digits < 10 ? '0' + digits : digits;
	}
	function calcTimeString () {
		const now = new Date();
		const hours = normalizeDigits(now.getHours());
		const minutes = normalizeDigits(now.getMinutes());
		const seconds = normalizeDigits(now.getSeconds());
		clockContainer.innerHTML = `${hours}:${minutes}:${seconds}`;
	}
	const timer = setInterval(calcTimeString, 1000);
})()

//  Создайте таймер обратного отсчета:
;(function () {
	const button = document.querySelector('.reverseCounter input');
	const counter = document.querySelector('.reverseCounter p');
	let num = 10;
	function timer () {
		num--;
		counter.innerHTML = num;
		if (num > 0) {
			setTimeout(timer, 300);
		}
		if (num === 0) {
			counter.innerHTML = 'It\'s over here';
		}
	}
	button.onclick = function () {
		this.disabled = true;
		this.classList.add('disabled');
		timer();
	}
})()

//  Создайте простой слайдер:
;(function () {
	const img = document.querySelector('.simple-slider img');
	let num = 1;
	setInterval(() => {
		num++;
		img.src = `http://theory.phphtml.net/exercises/javascript/dom/rabota-s-tajmerami-v-javascript/smiles/${num}.png`;
		if (num === 3) {
			num = 0;
		}
	}, 1000)
})()

//  Создайте карусель:
;(function () {
	const img1 = document.querySelector('.slider img:nth-child(1)');
	const img2 = document.querySelector('.slider img:nth-child(2)');
	const img3 = document.querySelector('.slider img:nth-child(3)');
	function changeSrc () {
		const tmp = img1.src;
		img1.src = img2.src;
		img2.src = img3.src;
		img3.src = tmp;
	}
	setInterval(changeSrc, 800);
})()

//  Создайте карусель:
;(function () {
	const images = document.querySelectorAll('.complex-slider img');
	const start = document.querySelector('.complex-slider .start');
	const stop = document.querySelector('.complex-slider .stop');
	let arrImages = [];
	let timer = null;
	function moveArrayElements (arr) {
		const elem = arr.shift();
		arr.push(elem);
		return arr;
	}
	function changeSrc () {
		arrImages = moveArrayElements(arrImages);
		for (let index = 0; index < images.length; index++) {
			images[index].src = arrImages[index];
		}
	}

	for (let index = 0; index < images.length; index++) {
		arrImages.push(images[index].src);
	}
	start.onclick = function () {
		this.disabled = true;
		this.nextElementSibling.disabled = false;
		timer = setInterval(changeSrc, 1000);
	};
	stop.onclick = function () {
		this.disabled = true;
		this.previousElementSibling.disabled = false;
		clearInterval(timer);
	};
})()

//  Создайте отсчет до полуночи:
;(function () {
	const hoursTd = document.querySelector('.table .hours');
	const minutesTd = document.querySelector('.table .minutes');
	const secondsTd = document.querySelector('.table .seconds');
	function normalizeDigits (digits) {
		return digits < 10 ? '0' + digits : digits;
	}
	function calcRemain () {
		const now = new Date();
		const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
		const diffSec = Math.floor((tomorrow - now) / 1000);
		const hours = normalizeDigits(Math.floor(diffSec / (60 * 60)));
		const minutes = normalizeDigits(Math.floor((diffSec - hours * 60 * 60) / 60));
		const seconds = normalizeDigits(diffSec % 60);
		hoursTd.innerHTML = hours;
		minutesTd.innerHTML = minutes;
		secondsTd.innerHTML = seconds;
	}
	calcRemain();
	setInterval(calcRemain, 1000);
})()