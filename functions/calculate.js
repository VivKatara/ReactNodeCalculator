//calculator functions
const Queue = require('../classes/Queue');

module.exports = {
  equal: function(numbers, operations) {
    return calculateEqual(numbers, operations);
  },
};

function calculateEqual(numbers, operations) {
  const numberQueue = new Queue();
  const operationQueue = new Queue();
  const stack = [];
  const operationLength = operations.length;
  for (num in numbers) {
    numberQueue.enqueue(numbers[num]);
  }
  for (op in operations) {
    operationQueue.enqueue(operations[op]);
  }
  let counter = 1;
  while (!operationQueue.isEmpty()) {
    let firstItem = 0;
    if (stack.length > 0) {
      firstItem = stack.pop();
    } else {
      firstItem = numberQueue.dequeue();
    }
    const secondItem = numberQueue.peek();
    const operation = operationQueue.dequeue();
    if (operation === '*') {
      if (counter === operationLength) {
        numberQueue.enqueue(firstItem * secondItem);
      } else {
        stack.push(firstItem * secondItem);
      }
      numberQueue.dequeue();
    } else if (operation === '/') {
      if (counter === operationLength) {
        numberQueue.enqueue(firstItem / secondItem);
      } else {
        stack.push(firstItem / secondItem);
      }
      numberQueue.dequeue();
    } else {
      if (counter >= operationLength) {
        if (operation === '+') {
          stack.push(firstItem + secondItem);
          numberQueue.dequeue();
        } else if (operation === '-') {
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
