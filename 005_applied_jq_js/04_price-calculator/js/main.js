$(function () {
	class Calculator {
		constructor(options) {
			this.state = options;

			this.meters = $('#meters');
			this.floors = $('#floors');
			this.material = $('.material');
			this.customDesign = $('#customDesign');
			this.calc = $('#calc');
			this.img = $('#img');
			this.price = $('#price');

			this.showImg = this.showImg.bind(this);

			this.init();
		}

		init() {
			this.meters.val(this.state.meters);
			this.floors.val(this.state.floors);
			this.material.filter(`[value=${this.state.material}]`).attr('checked', true);
			this.customDesign.checked = this.state.customDesign;
			this.showImg();
			this.events();
		}

		events() {

			const state = this.state;

			this.meters.on('input', function (ev) {
				state.meters = +$(this).val();
			});

			this.floors.on('change', function (ev) {
				state.floors = +$(this).val();
			});

			this.material.on('change', function (ev) {
				state.material = +$(this).val();
			});

			this.material.on('change', this.showImg);

			this.customDesign.on('click', function () {
				state.customDesign = !state.customDesign;
			});

			this.calc.on('click', () => {
				this.calcPrice();
			});

		}

		showImg() {
			this.img.attr('src', this.state.material === 1 ? 'img/1.jpg' : 'img/2.png');
		}

		calcPrice() {
			const coeffMaterial = this.state.material === 1 ? 1 : 1.5;
			const designBonus = this.state.customDesign ? 5000 : 0;
			const price = 1000 * this.state.meters * this.state.floors * coeffMaterial + designBonus;

			this.price.text(price);
		}
	}

	const calculator = new Calculator({
		meters: 20,
		floors: 1,
		material: 1,
		customDesign: false
	});
});
