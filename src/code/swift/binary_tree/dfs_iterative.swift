func dfs(_ root: TreeNode?) -> Int {
    guard let root = root else { return 0 }
    var stack = [root]
    var ans = 0

    while !stack.isEmpty {
        let node = stack.removeLast()
        // TODO: logic
        if let left = node.left {
            stack.append(left)
        }
        if let right = node.right {
            stack.append(right)
        }
    }

    return ans
}
