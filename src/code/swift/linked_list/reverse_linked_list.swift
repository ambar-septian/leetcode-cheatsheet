func fn(_ head: ListNode<Int>?) -> ListNode<Int>? {
    var prev: ListNode<Int>? = nil
    var curr = head

    while let node = curr {
        let nxt = node.next
        node.next = prev
        prev = node
        curr = nxt
    }

    return prev
}
