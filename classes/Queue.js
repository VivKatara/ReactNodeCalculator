//Queue class

module.exports = class Queue {
  constructor() {
    this.elements = [];
  }
  enqueue(e) {
    return this.elements.push(e);
  }

  dequeue() {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length == 0;
  }

  peek() {
    const item = !this.isEmpty() ? this.elements[0] : undefined;
    return item;
  }
};
