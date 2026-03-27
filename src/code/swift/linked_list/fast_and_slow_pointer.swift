func fn(_ head: ListNode<Int>?) -> Int {
    var slow = head
    var fast = head
    var ans = 0

    while fast != nil && fast?.next != nil {
        // TODO: logic
        slow = slow?.next
        fast = fast?.next?.next
    }

    return ans
}
