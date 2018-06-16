function HTMLElement(arg = 'div') {
  this.goal = arg;
  this.click = () => {
    console.log(`clicked on ${this.goal}`);
  }
}

HTMLElement.prototype.focus = function () {
  console.log(`focused on ${this.goal}`);
}

function HTMLSelectElement(arr = []) {
  let options = arr.reduce((prev, current) => {
    return prev + `<option>${current}</option>`
  }, '');
  this.render = () => `<select>${options}</select>`;
}

function HTMLImageElement(src = '#') {
  this.src = src;
  this.render = () => `<img src=${this.src} alt="Image">`
}

HTMLImageElement.prototype = new HTMLElement;
HTMLImageElement.prototype.constructor = HTMLImageElement;

HTMLSelectElement.prototype = new HTMLElement;
HTMLSelectElement.prototype.constructor = HTMLSelectElement;
