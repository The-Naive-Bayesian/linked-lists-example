class SinglyLinkedListStack {
  root = null;
  size = 0;

  push(value) {
    const newNode = new Node(value);

    newNode.next = this.root;
    this.root = newNode;
  }

  pop() {
    if (!root) return null;

    const val = root.value;
    this.root = root.next;

    return val;
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

module.exports = SinglyLinkedListStack;
