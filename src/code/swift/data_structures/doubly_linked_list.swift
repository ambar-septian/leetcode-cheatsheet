class ListNode<T: Equatable> {
    var data: T
    var prev: ListNode?
    var next: ListNode?
    init(_ data: T) { self.data = data }
}

class DoublyLinkedList<T: Equatable> {
    var head: ListNode<T>?

    func append(_ data: T) {
        let newNode = ListNode(data)
        guard let head = head else {
            self.head = newNode
            return
        }
        var curr = head
        while let next = curr.next { curr = next }
        curr.next = newNode
        newNode.prev = curr
    }

    func delete(_ data: T) {
        var curr = head
        while let node = curr {
            if node.data == data {
                node.prev?.next = node.next
                node.next?.prev = node.prev
                if node === head { head = node.next }
                return
            }
            curr = node.next
        }
    }

    func reverse() {
        var curr = head
        var prevNode: ListNode<T>? = nil

        while let node = curr {
            let nextNode = node.next
            node.next = prevNode
            node.prev = nextNode
            prevNode = node
            curr = nextNode
        }
        head = prevNode
    }
}
