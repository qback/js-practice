(function() {
	const ajaxBlock = document.querySelector('.basic .ajax');
	const button = document.querySelector('.basic button');
	button.onclick = function() {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'side.html');
		xhr.send();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				ajaxBlock.innerHTML = xhr.responseText;
			}
		};
		this.parentNode.removeChild(this);
	};
})();
