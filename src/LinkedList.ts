export class LinkedNode {
  value: any
  next: LinkedNode
}

export class LinkedList {
  public head: LinkedNode
  public prev: LinkedNode

  public constructor () {}

  public static create(List: Array<any>): LinkedList {
    var currentIndex: number = 0
    var linkedList = new LinkedList

    linkedList.head = new LinkedNode
    linkedList.prev = linkedList.head

    while (currentIndex < List.length) {
      var currElem = List[currentIndex]
      const currNode = new LinkedNode
      currNode.value = currElem
      linkedList.prev.next = currNode
      linkedList.prev = currNode
      currentIndex += 1
    }

    return linkedList
  }
}
