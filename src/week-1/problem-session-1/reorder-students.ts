import LinkedList from '../linked-list/linked-list'

/**
 * This function should modifies list l to reverse its last half.
 * The size of the list is always even.
 * @param l linked list with head l.head and size l.size
 * @returns undefined
 */
export default function reorderStudents(l: LinkedList<T>) {
  let curNode = l.head

  for (let i = 0; i < l.size / 2 - 1; i++) {
    curNode = curNode.next
  }

  const midNode = curNode
  curNode = curNode.next
  let lastNode = undefined

  while (curNode) {
    const nextNode = curNode.next
    curNode.next = lastNode
    lastNode = curNode
    curNode = nextNode
  }

  midNode.next = lastNode
}
