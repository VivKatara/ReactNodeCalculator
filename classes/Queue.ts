// Queue class

export class Queue {
  private elements: Array<number | string>;
  public constructor() {
    this.elements = [];
  }
  public enqueue(e: number | string) {
    return this.elements.push(e);
  }
  public dequeue() {
    return this.elements.shift();
  }
  public isEmpty() {
    return this.elements.length === 0;
  }
  public peek() {
    const item: number | string | undefined = !this.isEmpty()
      ? this.elements[0]
      : undefined;
    return item;
  }
}
