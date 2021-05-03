class DoublyLinkedListDequeue {
  root = null;
  last = null;
  size = 0;

  push(value) {
    const newNode = new Node(value);

    newNode.next = this.root;
    this.root = newNode;
    if (!this.last) this.last = this.root;

    this.size++;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.last) {
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.root = newNode;
      this.last = newNode
    }
    this.size++;
  }

  pop() {
    if (!this.root) return null;

    const val = this.root.value;
    this.root = this.root.next;
    this.size--;

    if (this.size == 0) this.last = null;

    return val;
  }

  dequeue() {
    return this.pop();
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

module.exports = DoublyLinkedListStack;
