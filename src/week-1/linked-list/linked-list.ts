export class Node<T> {
  constructor(value: T, next?: Node) {
    this.value = value
    this.next = next
  }
}

export default class LinkedList<T> {
  constructor(...values: T[]) {
    this.head = undefined
    this.size = 0

    if (!values.length) {
      return this
    }

    let prev = undefined

    values.forEach((v) => {
      const node = new Node(v)

      if (prev) {
        prev.next = node
      } else {
        this.head = node
      }

      prev = node
      this.size++
    })
  }

  toString() {
    const a = []
    let node = this.head

    while (node !== undefined) {
      a.push(node.value)
      node = node.next
    }

    return `[${a.join(', ')}]`
  }
}
