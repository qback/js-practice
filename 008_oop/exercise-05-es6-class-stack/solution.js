const _stack = new WeakMap();

class Stack {
  constructor() {
    _stack.set(this, []);
  }
  get count() {
    return _stack.get(this).length;
  }

  push(item) {
    _stack.get(this).push(item);
  }

  pop() {
    if (!this.count)
      throw new Error('Stack is empty');
    _stack.get(this).pop();
  }

  peek() {
    if (!this.count)
      throw new Error('Stack is empty');
    return _stack.get(this)[this.count - 1];
  }
}
