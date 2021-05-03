const singlyLinkedListStack = require('./SinglyLinkedListStack');

it('builds', () => {
  new singlyLinkedListStack();
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
});

it ('adds values in LIFO order', () => {
  const list = new singlyLinkedListStack();
  const values = [5, 2, 10];
  values.forEach(value => list.push(value));

  const results = [];
  list.forEach(value => results.push(value));

  expect(results).toEqual(values.reverse());
});
