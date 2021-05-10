const DoublyLinkedListDequeue = require('./LinkedListQueue');

it('builds', () => {
  const list = new DoublyLinkedListDequeue();
  expect(list.size).toBe(0);
});

it ('pushes a value without error', () => {
  const list = new DoublyLinkedListDequeue();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  expect(list.size).toBe(values.length);
});

it ('enqueues a value without error', () => {
  const list = new DoublyLinkedListDequeue();
  const values = [5, 2, 10];
  values.forEach(value => list.enqueue(value));

  expect(list.size).toBe(values.length);
});

it ('pushes values in LIFO order', () => {
  const list = new DoublyLinkedListDequeue();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  const results = [];
  list.forEach(value => results.push(value));

  expect(results).toEqual(values.reverse());
});

it ('enqueues values in FIFO order', () => {
  const list = new DoublyLinkedListDequeue();
  const values = [5, 2, 10];
  values.forEach(value => list.enqueue(value));

  const results = [];
  list.forEach(value => results.push(value));

  expect(results).toEqual(values);
});

it('pops values in LIFO order after pushes', () => {
  const list = new DoublyLinkedListDequeue();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  const results = [];
  for (let i=0; i < values.length; i++) {
    console.log('i = ' + i);
    results.push(list._pop());
  }

  expect(results).toEqual(values.reverse());
  expect(list.size).toBe(0);
});

it('dequeues values in FIFO order after enqueues', () => {
  const list = new DoublyLinkedListDequeue();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  const results = [];
  for (let i=0; i < values.length; i++) {
    console.log('i = ' + i);
    results.push(list.dequeue());
  }

  expect(results).toEqual(values.reverse());
  expect(list.size).toBe(0);
});
