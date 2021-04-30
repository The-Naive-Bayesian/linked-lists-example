class SinglyLinkedList {
  root = null;

  add(value) {
    const newNode = new Node(value);

    newNode.next = this.root;
    this.root = newNode;
  }

  forEach(fn) {
    let node = this.root;
    while (node != null) {
      fn(node.value);
      node = node.next;
    }
  }
}

class Node {
  next = null;
  value = null;

  constructor(value) {
    this.value = value;
  }
}

module.exports = SinglyLinkedList;