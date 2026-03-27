class ListNode<T: Equatable> {
    var data: T
    var next: ListNode?
    init(_ data: T) { self.data = data }
}

class LinkedList<T: Equatable> {
    var head: ListNode<T>?

    func append(_ data: T) {
        guard let head = head else {
            self.head = ListNode(data)
            return
        }
        var curr = head
        while let next = curr.next { curr = next }
        curr.next = ListNode(data)
    }

    func delete(_ data: T) {
        if head?.data == data {
            head = head?.next
            return
        }
        var prev: ListNode<T>? = nil
        var curr = head
        while let node = curr {
            if node.data == data {
                prev?.next = node.next
                return
            }
            prev = node
            curr = node.next
        }
    }

    func reverse() {
        var prev: ListNode<T>? = nil
        var curr = head

        while let node = curr {
            let nxt = node.next
            node.next = prev
            prev = node
            curr = nxt
        }
        head = prev
    }
}
