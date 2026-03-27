class TreeNode {
    var val: Int
    var left: TreeNode?
    var right: TreeNode?
    init(_ val: Int) { self.val = val }
}

func fn(_ root: TreeNode?) -> Int {
    guard let root = root else { return 0 }
    var que = [root]
    var ans = 0

    while !que.isEmpty {
        let currentLength = que.count
        // TODO: logic for current level
        for _ in 0..<currentLength {
            let node = que.removeFirst()
            // TODO: logic
            if let left = node.left {
                que.append(left)
            }
            if let right = node.right {
                que.append(right)
            }
        }
    }

    return ans
}
