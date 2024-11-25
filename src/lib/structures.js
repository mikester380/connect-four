class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this.head = null
  }

  put(data) {
    const node = new Node(data)

    if (this.head === null) {
      this.head = node
      return node
    }

    let last = this.head

    while (last.next) {
      last = last.next
    }

    last.next = node
    return node
  }
}
