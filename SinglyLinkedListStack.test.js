const SinglyLinkedListStack = require('./SinglyLinkedListStack');

it('builds', () => {
  const list = new SinglyLinkedListStack();
  expect(list.size).toBe(0);
});

it ('adds a value without error', () => {
  const list = new SinglyLinkedListStack();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  expect(list.size).toBe(values.length);
});

it ('adds values in LIFO order', () => {
  const list = new SinglyLinkedListStack();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  const results = [];
  list.forEach(value => results.push(value));

  expect(results).toEqual(values.reverse());
});

it('pops values in LIFO order', () => {
  const list = new SinglyLinkedListStack();
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
