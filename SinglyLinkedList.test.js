const SinglyLinkedList = require('./SinglyLinkedList');

it('builds', () => {
  new SinglyLinkedList();
});

it ('adds a value without error', () => {
  const list = new SinglyLinkedList();
  list.add(5);
  list.add(2);
  list.add(10);
});