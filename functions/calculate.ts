// Calculator functions
import { Queue } from "../classes/Queue";

module.exports = {
  equal: function (numbers: Array<number>, operations: Array<string>) {
    return calculateEqual(numbers, operations);
  },
};

function calculateEqual(numbers: Array<number>, operations: Array<string>) {
  const numberQueue = new Queue();
  const operationQueue = new Queue();
  const stack: Array<number> = [];
  const operationLength: number = operations.length;
  for (const num in numbers) {
    numberQueue.enqueue(numbers[num]);
  }
  for (const op in operations) {
    operationQueue.enqueue(operations[op]);
  }
  let counter: number = 1;
  while (!operationQueue.isEmpty()) {
    let firstItem: any = 0;
    if (stack.length > 0) {
      firstItem = stack.pop();
    } else {
      firstItem = numberQueue.dequeue();
    }
    const secondItem: any = numberQueue.peek();
    const operation = operationQueue.dequeue();
    if (operation === "*") {
      if (counter === operationLength) {
        numberQueue.enqueue(firstItem * secondItem);
      } else {
        stack.push(firstItem * secondItem);
      }
      numberQueue.dequeue();
    } else if (operation === "/") {
      if (counter === operationLength) {
        numberQueue.enqueue(firstItem / secondItem);
      } else {
        stack.push(firstItem / secondItem);
      }
      numberQueue.dequeue();
    } else {
      if (counter >= operationLength) {
        if (operation === "+") {
          stack.push(firstItem + secondItem);
          numberQueue.dequeue();
        } else if (operation === "-") {
          stack.push(firstItem - secondItem);
          numberQueue.dequeue();
        }
      } else {
        numberQueue.enqueue(firstItem);
        operationQueue.enqueue(operation);
      }
    }
    counter += 1;
  }
  if (!numberQueue.isEmpty()) {
    return numberQueue.dequeue();
  } else {
    return stack.pop();
  }
}
