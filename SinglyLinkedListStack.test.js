const singlyLinkedListStack = require('./SinglyLinkedListStack');

it('builds', () => {
  const list = new singlyLinkedListStack();
  expect(list.size).toBe(0);
});

it ('adds a value without error', () => {
  const list = new singlyLinkedListStack();
  list.push(5);
  list.push(2);
  list.push(10);
});

it ('adds a value without error', () => {
  const list = new singlyLinkedListStack();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  expect(list.size).toBe(values.length);
});

it ('adds values in LIFO order', () => {
  const list = new singlyLinkedListStack();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  const results = [];
  list.forEach(value => results.push(value));

  expect(results).toEqual(values.reverse());
});

it('pops values in LIFO order', () => {
  const list = new singlyLinkedListStack();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  const results = [];
  for (let i=0; i < values.length; i++) {
    console.log('i = ' + i);
    results.push(list.pop());
  }

  expect(results).toEqual(values.reverse());
  expect(list.size).toBe(0);
});
