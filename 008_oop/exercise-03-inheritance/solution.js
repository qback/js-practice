function HTMLElement(arg = 'div') {
  this.goal = arg;
  this.click = () => {
    console.log(`clicked on ${this.goal}`);
  }
}

HTMLElement.prototype.focus = function () {
  console.log(`focused on ${this.goal}`);
}

function HTMLSelectElement() {
  this.items = [];
  this.addItem = (item) => {
    this.items.push(item);
  }
  this.removeItem = (ItemToRemove) => {
    return this.items.filter((item) => ItemToRemove !== item)
  }
}

HTMLSelectElement.prototype = new HTMLElement;
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

